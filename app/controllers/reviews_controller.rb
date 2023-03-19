class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    render json: Review.all
  end

  def create
    review = @current_user.reviews.create!(review_params)
    # review = Review.create!(review_params)
    render json: review, status: :created
  end

  def update
    update_review = @current_user.reviews.update!(review_params)
    render json: update_review
  end

  # def destroy
  #   delete_review = Review.find_by(id: params[:id])
  #     if user&.@current_user.review
  #       delete_review.destroy
  #       head :no_content
  #   else


    # @current_user.reviews.destroy
    # head :no_content
    #is a user going to be able to destroy all/any reviews if logged in?? 
    # how do I design front end for users to see a "delete" button if they are loggedin?? and only for their reviews

  end

private
  def review_params
    params.permit(:review)
  end

  # def authorize
  #     @current_user = User.find_by(id: session[:user_id])
  #     render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  #   end
end
