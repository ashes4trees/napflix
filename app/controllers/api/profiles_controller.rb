class Api::ProfilesController < ApplicationController
     def create
        @profile = Profile.new(profile_params)
        if @profile.save
            # @profiles = Profile.find_by(user_id: @profile[:user_id])
            render :show
        else   
            render json: ['Something went wrong'], status: 422
        end
    end

    def show
        @profile = Profile.find(params[:id])
        render :show
    end

    def index
        user = User.find(params[:user_id])
        @profiles = user.profiles
        render :index
    end

    private 

    def profile_params
        params.require(:profile).permit(:name, :user_id)
    end

end