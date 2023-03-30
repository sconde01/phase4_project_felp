class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    render json: Review.all
  end

  # def create <<<this worked with new 
  #   @review = Review.new(review_params)
  #   render json: @review, status: :created
  # end

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  # def create
  #   review = @current_foodtruck.create!(review_params)
  #     if review.valid?
  #       session[:user_id] = user.id
  #       render json: review, status: :created
  #     else
  #       render json: { errors: review.errors.full_messages },
  #       status: :unprocessable_entity
  #     end
  # end

  # def update
  #   update_review = current_user.reviews.update!(review_params)
  #   render json: update_review
  # end

  # def destroy
  #   delete_review = Review.find_by(id: params[:id])
  #     if user&.current_user.review
  #       delete_review.destroy
  #       head :no_content
  #   else


    # @current_user.reviews.destroy
    # head :no_content
 

  private
    def review_params
    params.permit(:review)
    end


end
