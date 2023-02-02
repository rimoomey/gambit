module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private

    def find_verified_user
      token = cookies.signed[:jwt]
      stored_user = (JWT.decode token, nil, false)[0]

      if (verified_user = User.find_by(id: stored_user["id"]))
        verified_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
