class CreateFoodTrucks < ActiveRecord::Migration[6.1]
  def change
    create_table :food_trucks do |t|
      t.string :name
      t.text :address
      t.string :cuisine
      t.string :image_url

      t.timestamps
    end
  end
end
