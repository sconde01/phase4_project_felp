class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :reviews

  has_many :food_trucks

  def reviews
    object.reviews.map do |review|
      {
        id: review.id,
        review: review.review,
        food_truck_id: review.food_truck.id,
        food_truck_name: review.food_truck.name,
        created_at: review.created_at
      }
    end
  end

end
