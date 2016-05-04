class CreateMindstuffs < ActiveRecord::Migration
  def change
    create_table :mindstuffs do |t|
      t.string :lobe
      t.text :url
      t.text :concentration
      t.string :completed
      t.integer :points

      t.timestamps null: false
    end
  end
end
