# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Profile.destroy_all
Movie.destroy_all

User.create(email: 'demo@user.com', password: 'password')
User.create(email: 'penny@gmail.com', password: 'password')
User.create(email: 'binx@gmail.com', password: 'password')
User.create(email: 'max@gmail.com', password: 'password')

first_user = User.first

Profile.create(user_id: first_user.id, name: 'mom')
Profile.create(user_id: first_user.id, name: 'dad')
Profile.create(user_id: first_user.id, name: 'grandma')


users = User.all.pluck(:id)
users.each do |user|
    Profile.create(user_id: user, name: 'me')
end


Movie.create(title: 'Sleepless in Seattle', year: 1993, summary: "Tom Hanks and Meg Ryan star in Nora Ephron's wonderfully romantic comedy about two people drawn together by destiny.", length: 105, rating: 'PG')

movie = Movie.first 
photo_file = URI.open('https://s3.amazonaws.com/napflix-seeds/sleepless.png')

movie.photo.attach(io: photo_file, filename: 'sleepless.png')






