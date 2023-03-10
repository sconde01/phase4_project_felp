class ReviewsController < ApplicationController

  def index
    render json: Review.all
  end

  def show
    review = Review.find
  end


end
