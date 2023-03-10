# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  User.destroy_all
  FoodTruck.destroy_all
  Review.destroy_all

  user1 = User.create(username: "FoodieJim1", password_digest: "password1")
  user2 = User.create(username: "TacoLover2", password_digest: "password2")
  user3 = User.create(username: "Jenn3", password_digest: "password3")
  user4 = User.create(username: "MarcoLovesFood4", password_digest: "password4")
  user5 = User.create(username: "Live4Food5", password_digest: "password5")

  truck1 = FoodTruck.create(name: "Kogi BBQ", address: "123 Wilshire Ave, Los Angeles, CA", cuisine: "Korean BBQ", image_url: "https://wp.dailybruin.com/images/2015/04/web.ae_.4.2.truckingaround.picA_.Alisha-Kapur.jpg")
  truck2 = FoodTruck.create(name: "Leo's Tacos", address: "1515 S La Brea Ave, Los Angeles, CA", cuisine: "Mexican", image_url: "https://10619-2.s.cdn12.com/rests/original/407_503860554.jpg")
  truck3 = FoodTruck.create(name: "Habachiana Grill", address: "8020 Pioneer Blvd, Whittier, CA", cuisine: "Japanese", image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/A8byJXAXvQy-_BtCYk07iA/l.jpg")
  truck4 = FoodTruck.create(name: "Trap Kitchen", address: "1324 Hollywood Blvd, Los Angeles, CA", cuisine: "Mexican Soul", image_url: "https://cdn.vox-cdn.com/thumbor/9inwPiMSuJxljafzv8A0lD3dMaw=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19862332/DSC05430.jpg")

  Review.create(user_id: user1.id, food_truck_id: truck2.id, review: "Great! Savory and cooked well! Will be coming back.")
  Review.create(user_id: user2.id, food_truck_id: truck3.id, review: "It was OK!")
  Review.create(user_id: user3.id, food_truck_id: truck4.id, review: "Love this place!")
  Review.create(user_id: user4.id, food_truck_id: truck1.id, review: "Not the biggest fan! Maybe I will try a different dish next time.")
  Review.create(user_id: user5.id, food_truck_id: truck2.id, review: "Best late night food truck!")

  puts "✅ Done seeding!"