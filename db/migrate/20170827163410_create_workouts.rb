class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false, index: true
      t.integer :buddy_id
      t.string :address, null: false
      t.string :sport, null:false
      t.date :date, null: false
      t.text :details
      t.boolean :paid, default: false
      t.timestamps
    end
  end
end
