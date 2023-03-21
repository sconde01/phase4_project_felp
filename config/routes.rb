Rails.application.routes.draw do
  
  resources :reviews, except: [:index, :show]
  resources :users, only: [:index, :create]
  resources :food_trucks, only: [:index, :show, :create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
