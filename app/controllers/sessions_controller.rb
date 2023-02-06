class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      created_jwt = issue_token({id: user.id})
      cookies.signed[:jwt] = {value: created_jwt, httponly: true}
      render json: user, status: :ok
    else
      authentication_failed
    end
  end

  def destroy
    cookies.signed[:jwt] = nil
    head :no_content
  end

  private

  def authentication_failed
    render json: {errors: "Username or password incorrect"}, status: :unauthorized
  end
end
