class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  def current_user
    User.find_by(id: session[:user_id])
  end


  # def new <<<<<this worked...rendered review but didn't create id or anything else
  #   foodtruck_review = FoodTruck.find(id: params[:food_truck_id])
  #   @review = foodtruck_review.review.new
  # end

  def logged_in?
    !!session[:user_id] # two bangs for boolean value true (opposite of opposite)
  end

  def authorize
    return render json: { errors: ["Not authorized. Please Login."] }, status: 
    :unauthorized unless logged_in?
  end

  def authorized
    render json: { errors: ["You are already logged in, please log out first."]}, status: :unauthorized if logged_in?
  end

  # def render_unprocessable_entity_response(exception)
  #   render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  # end


end
