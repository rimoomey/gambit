class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    ActionCable.server.broadcast("user_channel", user) if user.save
    render json: user, status: :created
  end

  def add_message
    user = User.find(params[:user_id])
    message = params[:message]
    created_message = user.messages.create(content: message)
    # byebug
    ActionCable.server.broadcast("message_channel", created_message) if user.save
    head :ok
  end

  def change_status
  end

  private

  def user_params
    params.permit(%i[id username password password_confirmation])
  end
end