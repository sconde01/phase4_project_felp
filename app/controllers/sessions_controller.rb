class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]
  before_action :authorized, only: [:create]

  #POST /login
  def create
    user = User.find_by(username: params[:username])
    # "authenticate" given to use by bcrypt to match hashed passwords
    if user&.authenticate(params[:password])
      session[:user_id] = user.id # this is the line that is going to log us in
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unprocessable_entity  
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end