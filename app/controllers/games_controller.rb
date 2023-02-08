class GamesController < ApplicationController
  wrap_parameters false
  def add_move
    game = Game.find_by(id: params[:game_id])
    game.moves.create(to: params[:to], from: params[:from], color: params[:color], piece: params[:piece])

    game.fen = params[:fen] if params[:fen]

    ActionCable.server.broadcast "game_channel_#{game[:white_user_id]}", {fen: game.fen, moves: game.moves}
    ActionCable.server.broadcast "game_channel_#{game[:black_user_id]}", {fen: game.fen, moves: game.moves}

    render json: game, include: [:moves], status: :created
  end
end
