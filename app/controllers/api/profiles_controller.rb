class Api::ProfilesController < ApplicationController
     def create
        @profile = Profile.new(profile_params)
        if @profile.save
            render :show
        else   
            render json: ['Something went wrong'], status: 422
        end
    end

    def update
        @profile = Profile.find(params[:id])
        if @profile && @profile.update(update_params)
            render :show
        else
            render json: @profile.errors.full_messages, status: 401
        end
    end
    

    def show
        @profile = Profile.find(params[:id])
        @my_list = @profile.list_items
        render :show
    end

    def index
        user = User.find(params[:user_id])
        @profiles = user.profiles
        render :index
    end

    
    def destroy
        @profile = current_user.profiles.find_by(id: params[:id])
        if @profile && @profile.destroy
            @profiles = current_user.profiles
            render :index
        else
            render json: ['Something went wrong'], status: 401
        end
     end
    

    private 

    def profile_params
        params.require(:profile).permit(:name, :user_id)
    end

    def update_params
        params.require(:profile).permit(:name, :id)
    end

end