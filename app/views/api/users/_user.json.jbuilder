json.extract! user, :id, :username, :email, :buddy, :buddy_id 
json.image_url asset_path(user.avatar.url)
