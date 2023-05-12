class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :food_truck_id,  :created_at, :username, :food_truck_name
  
  belongs_to :food_truck
  belongs_to :user



end
