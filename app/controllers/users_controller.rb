class UsersController < ApplicationController
  wrap_parameters false
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])

    if user
      render json: user, status: :ok
    else
      render json: {errors: ["Not authorized"]}, status: :unauthorized
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      created_jwt = issue_token({id: user.id})
      cookies.signed[:jwt] = {value: created_jwt, httponly: true}
      session[:user_id] = user.id
      return render json: user, status: :ok
    end
    error_messages(user)
  end

  private

  def user_params
    params.permit(%i[id username password password_confirmation avatar])
  end

  def error_messages(user)
    render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
  end
end
