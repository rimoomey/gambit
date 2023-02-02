class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      sign_in(user: user)
      render json: user, status: :ok
    else
      authentication_failed
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  private

  def authentication_failed
    render json: {errors: "Authentication failed"}, status: :unauthorized
  end
end
