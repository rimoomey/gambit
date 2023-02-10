Rails.application.routes.draw do
  resources :users, only: %i[index]
  post "/signup", to: "users#create"
  resources :games, only: %i[index create] do
    post "/add_move", to: "games#add_move"
  end
  post "/login", to: "sessions#create"
  mount ActionCable.server => "/cable"
end
