@buddies.each_with_index do |buddy|
  json.set! buddy.id do
    json.partial! 'buddy', buddy: buddy
  end
end
