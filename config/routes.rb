Rails.application.routes.draw do
  resources :users, only: %i[index]
  resources :users, only: %i[] do
    resources :games, only: %i[index show]
  end
  post "/signup", to: "users#create"
  resources :games, only: %i[index show]
  resources :games, only: %i[] do
    post "/add_move", to: "games#add_move"
    patch "/end_game", to: "games#end_game"
  end
  post "/login", to: "sessions#create"
  mount ActionCable.server => "/cable"
end
