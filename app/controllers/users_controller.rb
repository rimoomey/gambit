class UsersController < ApplicationController
  wrap_parameters false
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      created_jwt = issue_token({id: user.id})
      cookies.signed[:jwt] = {value: created_jwt, httponly: true}
      return render json: user, status: :ok
    end
    error_messages(user)
  end

  private

  def user_params
    params.permit(%i[id username password password_confirmation])
  end

  def error_messages(user)
    render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
  end
end
