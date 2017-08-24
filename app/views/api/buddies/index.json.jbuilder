@buddies.each_with_index do |buddy, index|
  json.set! index do
    json.partial! 'buddy', buddy: buddy
  end
end
