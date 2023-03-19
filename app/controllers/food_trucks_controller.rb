class FoodTrucksController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: FoodTruck.all
  end
  
  def show
    foodtruck = FoodTruck.find_by(id: params[:id])
    render json: foodtruck
  end

  def create
    # byebug 
    foodtruck = @current_user.food_trucks.create!(foodtruck_params)
    render json: foodtruck, status: :created
  end

  private

  def foodtruck_params
    # params.require(:name).permit(:address, :cuisine, :image_url)
    params.permit(:name, :address, :cuisine, :image_url)
  end

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])
  #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  # end

end
