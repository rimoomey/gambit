class User < ApplicationRecord
  has_many :messages, dependent: :destroy

  has_secure_password
end
