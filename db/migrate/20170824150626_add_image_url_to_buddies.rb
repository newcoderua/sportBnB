class AddImageUrlToBuddies < ActiveRecord::Migration[5.1]
  def change
    add_column :buddies, :image_url, :string
  end
end
