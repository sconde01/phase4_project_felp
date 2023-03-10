class User < ApplicationRecord
  has_many :reviews
  has_many :food_trucks, through: :reviews
end
