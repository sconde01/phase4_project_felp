class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in
    !!session[:user_id] # two bangs for boolean value true ("Bang Bang! you're a boolean now!"")
  end

  #authorize is used for if someone is logged in, then they are authorized to access
  def authorize
    return render json: { errors: ["Not authorized. Please Login."] }, status: 
    :unauthorized unless logged_in
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end


end
