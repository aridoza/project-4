json.parkings @parkings do |parking|
  json.date parking.date
  json.time parking.time
  json.car_type parking.car_type
  json.description parking.description
  json.id parking.id
end
