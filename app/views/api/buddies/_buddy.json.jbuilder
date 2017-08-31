# debugger
json.extract! buddy, :id, :name, :rate, :sport, :zip, :best_achievement

if buddy.avatar.url === "profile-pic.png"
  json.image_url buddy.image_url
else
  json.image_url buddy.avatar.url
end
