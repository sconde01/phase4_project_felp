class FoodTruckSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine, :image_url, :reviews

  # def reviews
  #   object.reviews.map do |review|
  #     {
  #       id: review.id,
  #       review: review.review
  #     }
  #   end
  # end
  def reviews
    object.reviews.map do |review|
      {
        id: review.id,
        user: {
          id: review.user.id,
          username: review.user.username
        },
        review: review.review
      }
    end
  end

end
