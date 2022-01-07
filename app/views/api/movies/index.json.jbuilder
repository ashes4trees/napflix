
@movies.each do |movie|
    json.set! movie.id do 
        json.extract! movie, :id, :title, :year, :summary, :rating, :length
        json.photoUrl url_for(movie.photo)
    end
end