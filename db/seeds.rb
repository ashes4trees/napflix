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

User.create(id: 1, email: 'demo@user.com', password: 'password')
User.create(id: 2, email: 'penny@gmail.com', password: 'password')
User.create(id: 3, email: 'binx@gmail.com', password: 'password')
User.create(id: 4, email: 'max@gmail.com', password: 'password')

Profile.create(user_id: 1, name: 'mom')
Profile.create(user_id: 1, name: 'dad')
Profile.create(user_id: 1, name: 'grandma')


users = User.all.pluck(:id)
users.each do |user|
    Profile.create(user_id: user, name: 'me')
end


Movie.create( 
    {   id: 1, 
        title: 'Sleepless in Seattle', 
        year: 1993, 
        summary: "Tom Hanks and Meg Ryan star in Nora Ephron's wonderfully romantic comedy about two people drawn together by destiny.", 
        length: 105, 
        rating: 'PG'
    }
)

Movie.create(
    {   id: 2, 
        title: 'While You Were Sleeping', 
        year: 1995, 
        summary: "Lonely transit worker Lucy Eleanor Moderatz (Sandra Bullock) pulls her longtime crush, Peter (Peter Gallagher), from the path of an oncoming train.",
        length: 103,
        rating: 'PG'
}
)

Movie.create(
    {   id: 3, 
        title: 'Sleeping Beauty', 
        year: 1959, 
        summary: "Filled with jealousy, the evil witch Maleficent (Eleanor Audley) curses Princess Aurora (Mary Costa) to die on her 16th birthday.",
        length: 75,
        rating: 'G'
}
)

Movie.create(
    {   id: 4, 
        title: 'Eternal Sunshine of the Spotless Mind', 
        year: 2004, 
        summary: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        length: 108,
        rating: 'R'
}
)

Genre.create(id: 1, genre: 'Romance')
Tag.create(movie_id: 1, genre_id: 1)
Tag.create(movie_id: 2, genre_id: 1)
Tag.create(movie_id: 3, genre_id: 1)
Tag.create(movie_id: 4, genre_id: 1)




photo_file = URI.open('https://s3.amazonaws.com/napflix-seeds/sleepless.png')
Movie.all.each do |movie|
    movie.photo.attach(io: photo_file, filename: 'sleepless.png')
end







