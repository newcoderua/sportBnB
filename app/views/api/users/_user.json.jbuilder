json.extract! user, :id, :username, :email 
json.image_url asset_path(user.avatar.url)
