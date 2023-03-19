class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review
  
  has_one :food_truck
  has_one :user
end
