class Api::ProfilesController < ApplicationController
     def create
        @profile = Profile.new(profile_params)
        if @profile.save
            render 'api/users/show'
        else   
            render json: ['Something went wrong'], status: 422
        end
    end

    def index
        user = User.find(params[:user_id])
        @profiles = user.profiles
        render :index
    end

    private 

    def profile_params
        params.require(:profile).permit(:name)
    end

end