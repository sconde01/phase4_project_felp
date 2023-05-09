class FoodTruckSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine, :image_url, :reviews

  has_many :users 
  
  def reviews
    object.reviews.map do |review|
      {
        id: review.id,
        review: review.review,
        food_truck_id: review.food_truck.id,
        user_id: review.user.id,
        username: review.user.username,
        food_truck_name: review.food_truck.name,
        created_at: review.created_at
      }
    end
  end
  # def reviews
  #   object.reviews.map do |review|
  #     {
  #       id: review.id,
  #       user: {
  #         id: review.user.id,
  #         username: review.user.username
  #       },
  #       review: review.review
  #     }
  #   end
  # end

end
