class GamesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "GamesChannel"
    stream_from "game_channel_#{params[:user_id]}"
  end

  def unsubscribed
  end
end
