class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :food_truck_id
  
  # belongs_to :food_truck
  belongs_to :user

  # has_one :food_truck
  # has_one :user
end
