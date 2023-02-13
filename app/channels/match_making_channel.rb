class MatchMakingChannel < ApplicationCable::Channel
  @@matches = []

  def subscribed
    stream_from "MatchMakingChannel"
    stream_from "matchmaking_#{params[:user_id]}"
  end

  def joined
    (@@matches.length == 2) ? @@matches.clear : nil
    user = User.find_by(id: params[:user_id])
    # add the user to the array unless they already joined
    puts "*" * 30
    puts @@matches
    @@matches << user unless @@matches.include?(user)
    if @@matches.length == 2
      game = Game.create!(white_user: @@matches.first, black_user: @@matches.last)
      @@matches.each do |user|
        ActionCable.server.broadcast "matchmaking_#{user.id}", {game: game, white_user: white_user_info(game), black_user: black_user_info(game)}
      end
    else
      ActionCable.server.broadcast "matchmaking_#{params[:user_id]}", {message: "waiting for game"}
    end
  end

  def white_user_info(game)
    user = User.find_by(id: game.white_user_id)
    {id: user.id, username: user.username, avatar: user.avatar}
  end

  def black_user_info(game)
    user = User.find_by(id: game.black_user_id)
    {id: user.id, username: user.username, avatar: user.avatar}
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
