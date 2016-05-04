# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Mindstuff.delete_all

Mindstuff.create!([
  {id: 1, lobe: "frontal", url: "http://devpost.com/", concentration: "web development", completed: false, points: 5},
  {id: 2, lobe: "parietal", url: "https://atom.io/", concentration: "web development", completed: false, points: 5},
  {id: 3, lobe: "temporal", url: "https://devchat.tv/js-jabber", concentration: "web development", completed: false, points: 5},
  {id: 4, lobe: "occipital", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla", concentration: "web development", completed: false, points: 5},
  ])
