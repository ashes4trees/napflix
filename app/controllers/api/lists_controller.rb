class ListsController < ApplicationController
    def create
        @list = List.new(list_params)
        if @list.save
            render `api/movies/index`
        else
            return false  
        end
    end

    def destroy
        @list = List.find(params[:list_id])
        if @list.delete
            render `api/movies/index`
        else 
            return false
        end
    end


    private

    def list_params
        params.require(:list).permit(:profile_id, :movie_id)
    end

end