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
    foodtruck = FoodTruck.create!(foodtruck_params)
    render json: foodtruck, status: :created
  end

  private

  def foodtruck_params
    # params.require(:name).permit(:address, :cuisine, :image_url)
    params.permit(:name, :address, :cuisine, :image_url)
  end

end
