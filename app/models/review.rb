class Review < ApplicationRecord
  belongs_to :food_truck
  belongs_to :user

  validates :review, presence: true, length: { maximum: 200 }

  #instance methods:

  #username to render on review create or updates on food card
  def username
    self.user.username
  end

  # def no_reviews
  #   if self.review.empty?
  #     "you have no reviews"
  #   else
  #     review
  #   end
  # end
  # byebug 

end
