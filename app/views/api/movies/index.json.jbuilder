
json.movies do 
    @movies.each do |movie|
        json.set! movie.id do 
            json.extract! movie, :id, :title, :year, :summary, :rating, :length
            json.photoUrl url_for(movie.photo)
            json.videoUrl url_for(movie.video)
            json.thumbnailUrl url_for(movie.thumbnail)
        end
    end
end

json.tags do 
    @tags.each do |tag|
        json.set! tag.id do
            json.extract! tag, :movie_id, :genre_id
        end
    end
end

json.genres do 
    @genres.each do |genre|
        json.set! genre.id do
            json.extract! genre, :id, :genre
        end
    end
end
