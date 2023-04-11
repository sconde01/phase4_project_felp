class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  before_action :authorized, only: [:create]

  def index
    render json: User.all
  end

  #render currently logged in user
  def show_current_user
    render json: current_user
  end

  #sign up
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  
end
