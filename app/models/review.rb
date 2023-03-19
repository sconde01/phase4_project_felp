class Review < ApplicationRecord
  belongs_to :food_truck
  belongs_to :user

  validates :review, presence: true, length: { maximum: 200 }
end
