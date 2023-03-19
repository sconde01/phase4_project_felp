class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  # has_many :reviews ?? if a user wants to see it's profile and all of its reviews?
   
end
