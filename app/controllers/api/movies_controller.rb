class Api::MoviesController < ApplicationController
    
   def index
      @movies = Movie.all
      @genres = Genre.all
      @tags = Tag.all
      render :index
   end

end