# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Parking.create!([
  {id: 1, date: "5/5/16", time: "12:20pm", car_type: "sedan", description: "space will be vacated in 5 minutes"},
  {id: 2, date: "5/5/16", time: "1:20pm", car_type: "sedan", description: "space will be vacated in 15 minutes"},
  {id: 3, date: "5/5/16", time: "1:45pm", car_type: "suv", description: "space will be vacated in 10 minutes"},
  {id: 4, date: "5/5/16", time: "2:10pm", car_type: "van", description: "space will be vacated in 5 minutes"},
  {id: 5, date: "5/5/16", time: "2:20pm", car_type: "minivan", description: "space will be vacated in 20 minutes"}
  ])
