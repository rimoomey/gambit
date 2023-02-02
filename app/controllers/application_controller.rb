class ApplicationController < ActionController::API
  include ::ActionController::Cookies

  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end

  protected

  def issue_token(payload)
    JWT.encode payload, nil, "none"
  end

  def decode_jwt(token)
    JWT.decode token, nil, false
  end
end
