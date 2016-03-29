# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Game.delete_all


20.times do
  Game.create(name: Faker::Superhero.name,
               description: Faker::Hipster.paragraph,
               price: Faker::Commerce.price,
               image: Faker::Avatar.image)
end
