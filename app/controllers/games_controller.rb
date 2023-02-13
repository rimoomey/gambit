class GamesController < ApplicationController
  wrap_parameters false
  def index
    user = user_logged_in
    if user_logged_in
      games = Game.where(white_user_id: user.id)
      games = games.or(Game.where(black_user_id: user.id))
      return render json: games, include: [:users], status: :ok
    end
    render json: Game.all, status: :ok
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

  private

  def user_logged_in
    User.find_by(params[:user_id]) if params[:user_id]
  end
end
