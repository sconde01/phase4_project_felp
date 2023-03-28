Rails.application.routes.draw do
  
  resources :reviews, except: [:show]
  resources :users, only: [:index]
  resources :food_trucks, only: [:index, :show, :create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/show-current-user", to: "users#show_current_user"

end
