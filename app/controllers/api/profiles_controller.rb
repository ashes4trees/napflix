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

    
    def update
        @profile = selected_profile
        if @profile && @profile.update_attributes(profile_params)
        render :show
        elsif !@profile
        render json: ['Could not locate profile'], status: 400
        else
        render json: @profile.errors.full_messages, status: 401
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