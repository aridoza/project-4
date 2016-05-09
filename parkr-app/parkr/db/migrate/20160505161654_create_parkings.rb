class CreateParkings < ActiveRecord::Migration
  def change
    create_table :parkings do |t|
      t.string :date
      t.string :time
      t.string :car_type
      t.text :description

      t.timestamps null: false
    end
  end
end
