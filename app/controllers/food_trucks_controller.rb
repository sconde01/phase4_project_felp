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
    foodtruck = FoodTruck.create!(foodtruck_params)
    render json: foodtruck, status: :created
  end

  private

  def foodtruck_params
    params.permit(:name, :address, :cuisine, :image_url)
  end

end
