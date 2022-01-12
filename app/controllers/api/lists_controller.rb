class Api::ListsController < ApplicationController
    def create
        @list = List.new(list_params)
        @profile = @list.profile
        @my_list = @profile.list_items
        if @list.save
            render 'api/profiles/show'
        else
            return false  
        end
    end

    def destroy
        @list = List.find(params[:id])
        @profile = @list.profile
        @my_list = @profile.list_items
        if @list.delete
            render 'api/profiles/show'
        else 
            return false
        end
    end


    private

    def list_params
        params.require(:list).permit(:profile_id, :movie_id)
    end

end