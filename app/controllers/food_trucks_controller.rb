class FoodTrucksController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: FoodTruck.all
  end
  
  def show
    foodtruck = FoodTruck.find_by(id: params[:id])
    render json: foodtruck
  end

  # all foodtrucks with :n or more reviews
  # def numbers
  #   foodtrucks = FoodTruck.all.select { |foodtruck| 
  #     foodtruck.reviews.length >= params[:n].to_i}
  #   render json: foodtrucks
  #   # byebug
  # end

  def create
    # byebug
    foodtruck = FoodTruck.create!(foodtruck_params)
    # foodtruck = current_user.food_trucks.create!(foodtruck_params)
    render json: foodtruck, status: :created
  end

  private

  def foodtruck_params
    # params.require(:name).permit(:address, :cuisine, :image_url)
    params.permit(:name, :address, :cuisine, :image_url)
  end

end
