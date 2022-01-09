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
Genre.destroy_all
Tag.destroy_all

User.create(id: 1, email: 'demo@user.com', password: 'password')
User.create(id: 2, email: 'penny@gmail.com', password: 'password')
User.create(id: 3, email: 'binx@gmail.com', password: 'password')
User.create(id: 4, email: 'max@gmail.com', password: 'password')

Profile.create(user_id: 1, name: 'mom')
Profile.create(user_id: 1, name: 'dad')
Profile.create(user_id: 1, name: 'grandma')

Genre.create(id: 1, genre: 'Romance')
Genre.create(id: 2, genre: 'Thriller')
Genre.create(id: 3, genre: 'Horror')
Genre.create(id: 4, genre: 'Drama')
Genre.create(id: 5, genre: 'Sci Fi')

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

Tag.create(movie_id: 1, genre_id: 1)

Movie.create(
    {   id: 2, 
        title: 'While You Were Sleeping', 
        year: 1995, 
        summary: "Lonely transit worker Lucy Eleanor Moderatz (Sandra Bullock) pulls her longtime crush, Peter (Peter Gallagher), from the path of an oncoming train.",
        length: 103,
        rating: 'PG'
}
)

Tag.create(movie_id: 2, genre_id: 1)

Movie.create(
    {   id: 3, 
        title: 'Sleeping Beauty', 
        year: 1959, 
        summary: "Filled with jealousy, the evil witch Maleficent (Eleanor Audley) curses Princess Aurora (Mary Costa) to die on her 16th birthday.",
        length: 75,
        rating: 'G'
}
)

Tag.create(movie_id: 3, genre_id: 1)

Movie.create(
    {   id: 4, 
        title: 'Eternal Sunshine of the Spotless Mind', 
        year: 2004, 
        summary: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        length: 108,
        rating: 'R'
}
)

Tag.create(movie_id: 4, genre_id: 1)
Tag.create(movie_id: 4, genre_id: 4)


Movie.create(
    {   id: 20, 
        title: 'Inception', 
        year: 2010, 
        summary: "Dom Cobb is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious.",
        length: 148,
        rating: 'PG-13'
}
)

Tag.create(movie_id: 20, genre_id: 2)
Tag.create(movie_id: 20, genre_id: 5)

Movie.create(
    {   id: 21, 
        title: 'Insomnia', 
        year: 2002, 
        summary: "Two Los Angeles homicide detectives are dispatched to a northern town where the sun doesn't set to investigate the methodical murder of a local teen.",
        length: 118,
        rating: 'R'
}
)

Tag.create(movie_id: 21, genre_id: 2)

Movie.create(
    {   id: 22, 
        title: 'Vanilla Sky', 
        year: 2001, 
        summary: "A young New York City publishing magnate finds himself on a roller-coaster ride of romance, comedy, suspicion, love, sex and dreams.",
        length: 137,
        rating: 'R'
}
)

Tag.create(movie_id: 22, genre_id: 2)
Tag.create(movie_id: 22, genre_id: 4)

Movie.create(
    {   id: 23, 
        title: 'In Dreams', 
        year: 1999, 
        summary: "Clairvoyant Claire Cooper has a disturbing dream about the murder of a young girl.",
        length: 100,
        rating: 'R'
}
)

Tag.create(movie_id: 23, genre_id: 2)

Movie.create(
    {   id: 40, 
        title: 'A Nightmare on Elm Street', 
        year: 1984, 
        summary: "The monstrous spirit of a slain child murderer seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.",
        length: 91,
        rating: 'R'
}
)

Tag.create(movie_id: 40, genre_id: 3)

Movie.create(
    {   id: 41, 
        title: 'Dead Awake', 
        year: 2016, 
        summary: "A young woman must save herself and her friends from an ancient evil that stalks its victims through the real-life phenomenon of sleep paralysis.",
        length: 99,
        rating: 'NR'
}
)

Tag.create(movie_id: 41, genre_id: 3)

Movie.create(
    {   id: 42, 
        title: 'Doctor Sleep', 
        year: 2019, 
        summary: "Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child.",
        length: 152,
        rating: 'R'
}
)

Tag.create(movie_id: 42, genre_id: 2)
Tag.create(movie_id: 42, genre_id: 3)


Movie.create(
    {   id: 43, 
        title: 'Paranormal Activity', 
        year: 2007, 
        summary: "A young couple set up a camera to document a supernatural presence that is haunting them.",
        length: 86,
        rating: 'R'
}
)

Tag.create(movie_id: 43, genre_id: 3)

Movie.create(
    {   id: 60, 
        title: 'What Dreams May Come', 
        year: 1998, 
        summary: "After Chris Nielsen dies in a car accident, he is guided through the afterlife by his spirit guide.",
        length: 113,
        rating: 'PG-13'
}
)

Tag.create(movie_id: 60, genre_id: 4)

Movie.create(
    {   id: 61, 
        title: 'The City of Lost Children', 
        year: 1995, 
        summary: "Old and decrepit Krank attempts to fight death by stealing the dreams of children.",
        length: 112,
        rating: 'R'
}
)

Tag.create(movie_id: 61, genre_id: 4)
Tag.create(movie_id: 61, genre_id: 5)


Movie.create(
    {   id: 62, 
        title: "A Midsummer Night's Dream", 
        year: 1999, 
        summary: "Four couples sort out their romantic entanglements in Shakespeare's most magical love story.",
        length: 116,
        rating: 'PG-13'
}
)

Tag.create(movie_id: 62, genre_id: 1)
Tag.create(movie_id: 62, genre_id: 4)

Movie.create(
    {   id: 63, 
        title: "The Science of Sleep", 
        year: 2006, 
        summary: "A man entranced by his dreams is love-struck with a French woman and shows her his world.",
        length: 106,
        rating: 'R'
}
)

Tag.create(movie_id: 63, genre_id: 1)
Tag.create(movie_id: 63, genre_id: 4)











# photo_file = URI.open('https://napflix-seeds.s3.amazonaws.com/sleepless.png')
# movie = Movie.first
# movie.photo.attach(io: photo_file, filename: 'sleepless.png')

movies = Movie.all
movies.each do |movie|
    # if movie.id == 1
    #     next 
    if movie.id === 41
         movie.photo.attach(io: File.open('app/assets/images/dead_awake_thumb.png'), filename: 'dead_awake_thumb.png')
    else  
        movie.photo.attach(io: File.open('app/assets/images/collage.png'), filename: 'collage.png')
    end
end







