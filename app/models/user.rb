class User < ApplicationRecord
  has_many :reviews
  has_many :food_trucks, through: :reviews

  validates :username, uniqueness: true, presence: true
  validates :password_digest, presence: true

  has_secure_password
end
