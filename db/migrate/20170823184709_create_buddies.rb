class CreateBuddies < ActiveRecord::Migration[5.1]
  def change
    create_table :buddies do |t|
      t.string :name, null: false
      t.string :sport, null: false
      t.integer :zip
      t.integer :rate
      t.text :best_achievement, null: false
      t.timestamps
    end
  end
end
