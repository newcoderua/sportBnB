json.array!(@buddies) do |buddy|
  json.(buddy, *Buddy.column_names)
end
