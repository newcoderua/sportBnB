class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
      
      t.timestamps
    end
  end
end
