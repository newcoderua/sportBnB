class AddBuddyIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :buddy_id, :integer
  end
end
