class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :buddy_id, null: false
      t.string :address, null: false
      t.date :date, null: false
      t.string :status, deault: "pending"
      t.text :details
      t.boolean :paid, default: false
      
      t.timestamps
    end
  end
end
