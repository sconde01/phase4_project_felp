class Review < ApplicationRecord
  belongs_to :food_truck
  belongs_to :user
end
