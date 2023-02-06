class User < ApplicationRecord
  has_many :white_games, class_name: "Game", foreign_key: "white_user"
  has_many :black_games, class_name: "Game", foreign_key: "black_user"

  has_secure_password

  def games
    [white_games, black_games]
  end
end
