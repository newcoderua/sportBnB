json.extract! reservation, :id, :user_id, :buddy_id, :address, :date, :status, :details, :paid
json.user_image asset_path(reservation.user.avatar.url)
# debugger
json.user_name reservation.user.username
