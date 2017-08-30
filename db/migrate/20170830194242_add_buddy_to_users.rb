class AddBuddyToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :buddy, :boolean, deafult: false
  end
end
