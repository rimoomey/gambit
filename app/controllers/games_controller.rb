class GamesController < ApplicationController
  wrap_parameters false
  def index
    user = user_logged_in
    if user
      games = Game.where(white_user_id: user.id)
      games = games.or(Game.where(black_user_id: user.id))
      return render json: games, status: :ok
    end
    render json: Game.all, status: :ok
  end

  def show
    game = Game.find_by(id: params[:id])

    if game
      render json: game, include: [:moves, :users], status: :ok
    else
      render json: {errors: ["Game not found"]}, status: :unprocessable_entity
    end
  end

  def add_move
    game = Game.find_by(id: params[:game_id])
    game.moves.create(to: params[:to], from: params[:from], color: params[:color], piece: params[:piece])

    game.fen = params[:fen] if params[:fen]
    game.save

    ActionCable.server.broadcast "game_channel_#{game[:white_user_id]}", {fen: game.fen, moves: game.moves}
    ActionCable.server.broadcast "game_channel_#{game[:black_user_id]}", {fen: game.fen, moves: game.moves}

    render json: game, include: [:moves], status: :created
  end

  def end_game
    game = Game.find_by(id: params[:game_id])
    game.outcome = params[:outcome]
    game.winner_username = User.find_by(id: params[:winner_id]).username if User.find_by(id: params[:winner_id])
    game.save

    ActionCable.server.broadcast "game_channel_#{game[:white_user_id]}", {outcome: game.outcome, winner_username: game.winner_username}
    ActionCable.server.broadcast "game_channel_#{game[:black_user_id]}", {outcome: game.outcome, winner_username: game.winner_username}

    render json: game, include: [:moves], status: :ok
  end

  private

  def user_logged_in
    User.find_by(id: params[:user_id]) if params[:user_id]
  end
end
