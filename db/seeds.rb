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
m1 = Movie.find(1)
m1.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/sleepless_in_seattle.png'), 
                filename: 'sleepless_in_seattle.png')
m1.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/sleepless_in_seattle.mp4'), 
                filename: 'sleepless_in_seattle.mp4')

Movie.create(
    {   id: 2, 
        title: 'While You Were Sleeping', 
        year: 1995, 
        summary: "Lonely transit worker Lucy Eleanor Moderatz pulls her longtime crush, Peter (Peter Gallagher), from the path of an oncoming train.",
        length: 103,
        rating: 'PG'
}
)

Tag.create(movie_id: 2, genre_id: 1)
m2 = Movie.find(2)
m2.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/while_you_were_sleeping.png'), 
                filename: 'while_you_were_sleeping.png')
m2.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/while_you_were_sleeping.mp4'), 
                filename: 'while_you_were_sleeping.mp4')

Movie.create(
    {   id: 3, 
        title: 'Sleeping Beauty', 
        year: 1959, 
        summary: "Filled with jealousy, the evil witch Maleficent curses Princess Aurora to die on her 16th birthday.",
        length: 75,
        rating: 'G'
}
)

Tag.create(movie_id: 3, genre_id: 1)
m3 = Movie.find(3)
m3.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/sleeping_beauty.png'), 
                filename: 'sleeping_beautfy.png')
m3.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/sleeping_beauty.mp4'), 
                filename: 'sleeping_beautfy.mp4')

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
m4 = Movie.find(4)
m4.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/eternal_sunshine.png'), 
                filename: 'eternal_sunshine.png')
m4.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/eternal_sunshine.mp4'), 
                filename: 'eternal_sunshine.mp4')

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
m20 = Movie.find(20)
m20.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/inception.png'), 
                filename: 'inception.png')
m20.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/inception.mp4'), 
                filename: 'inception.mp4')

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
m21 = Movie.find(21)
m21.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/insomnia.png'), 
                filename: 'insomnia.png')
m21.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/insomnia.mp4'), 
                filename: 'insomnia.mp4')

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
m22 = Movie.find(22)
m22.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/vanilla_sky.png'), 
                filename: 'vanilla_sky.png')
m22.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/vanilla_sky.mp4'), 
                filename: 'vanilla_sky.mp4')

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
m23 = Movie.find(23)
m23.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/in_dreams.png'), 
                filename: 'in_dreams.png')
m23.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/in_dreams.mp4'), 
                filename: 'in_dreams.mp4')

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
m40 = Movie.find(40)
m40.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/nightmare_on_elm_st.png'), 
                filename: 'nightmare_on_elm_st.png')
m40.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/nightmare.mp4'), 
                filename: 'nightmare.mp4')

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
m41 = Movie.find(41)
m41.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/dead_awake.png'), 
                filename: 'dead_awake.png')
m41.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/dead_awake.mp4'), 
                filename: 'dead_awake.mp4')

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
m42 = Movie.find(42)
m42.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/doctor_sleep.png'), 
                filename: 'doctor_sleep.png')
m42.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/doctor_sleep.mp4'), 
                filename: 'doctor_sleep.mp4')


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
m43 = Movie.find(43)
m43.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/paranormal_activity.png'), 
                filename: 'paranormal_activity.png')
m43.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/paranormal_activity.mp4'), 
                filename: 'paranormal_activity.mp4')

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
m60 = Movie.find(60)
m60.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/what_dreams_may_come.png'), 
                filename: 'what_dreams_may_come.png')
m60.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/what_dreams_may_come.mp4'), 
                filename: 'what_dreams_may_come.mp4')

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
m61 = Movie.find(61)
m61.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/city_of_lost_children.png'), 
                filename: 'city_of_lost_children.png')
m61.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/city_of_lost_children.mp4'), 
                filename: 'city_of_lost_children.mp4')


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
m62 = Movie.find(62)
m62.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/midsummer_nights_dream.png'), 
                filename: 'midsummer_nights_dream.png')
m62.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/midsummer_nights_dream.mp4'), 
                filename: 'midsummer_nights_dream.mp4')

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
m63 = Movie.find(63)
m63.photo.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/thumbnails/science_of_sleep.png'), 
                filename: 'science_of_sleep.png')
m63.video.attach(io: URI.open('https://napflix-seeds.s3.amazonaws.com/videos/science_of_sleep.mp4'), 
                filename: 'science_of_sleep.mp4')








