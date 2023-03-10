class FoodTruckSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine, :image_url
end
