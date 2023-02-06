class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    ActionCable.server.broadcast("UserChannel", user) if user.save
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(%i[id username password password_confirmation])
  end
end
