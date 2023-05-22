Rails.application.routes.draw do
  
  resources :reviews
  resources :users, only: [:index]
  resources :food_trucks, only: [:index, :show, :create] 
 
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/show-current-user", to: "users#show_current_user"


end
