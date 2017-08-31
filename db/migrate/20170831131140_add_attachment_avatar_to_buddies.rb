class AddAttachmentAvatarToBuddies < ActiveRecord::Migration[5.1]
  def self.up
    change_table :buddies do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :buddies, :avatar
  end
end
