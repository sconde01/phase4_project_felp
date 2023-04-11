class ReviewsController < ApplicationController
  before_action :find_review, only: [:update, :destroy, :show]
  skip_before_action :authorize, only: [:index]

  def index
    render json: Review.all
  end

  def show
    # review = Review.find_by(id: params[:id])
    render json: @review
  end

  # def create <<<this worked with new 
  #   @review = Review.new(review_params)
  #   render json: @review, status: :created
  # end

  def create
    # byebug
    review = current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def update
    # byebug
    update_review = @review.update!(review_params)
      if user&.current_user
        update_review
        render json: update_review
      else
        render json: { errors: update_review.errors.full_messages }, status: :unprocessable_entity
      end    
  end

  #A USER NEED TO BE LOGGED IN TO DESTROY THE REVIEW??
  # def destroy
  #   delete_review = @review
  #   if user&.current_user
  #     delete_review.destroy
  #     head :no_content
  #     render json: delete_review
  #   else
  #     render json: { errors: delete_review.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

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
