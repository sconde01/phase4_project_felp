class ReviewsController < ApplicationController
  before_action :find_review, only: [:update, :destroy, :show]
  skip_before_action :authorize, only: [:index]

  def index
    render json: Review.all
  end

  def show
    render json: @review  
  end

  def create
    # byebug
    review = current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def update
    # byebug
    #us the current user, are we updating. foreign key has to 
      if current_user.id == @review.user_id
        @review.update!(review_params)
        render json: @review
      else
        #[] keeps front end consistent
        render json: { errors: ["You are not authorized to update this review."] }, status: :unprocessable_entity
      end    
  end

  def destroy
    @review.destroy
    head :no_content 
  end
  
 

  private
    def review_params
    params.permit(:review, :food_truck_id, :user_id)
    end

    def find_review
      @review = Review.find_by(id: params[:id])
      # byebug
    end

end
