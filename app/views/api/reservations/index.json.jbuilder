@reservations.each do |reservation|
  json.set! resrvation.id do
    json.partial! 'resrvation', resrvation: resrvation
  end
end
