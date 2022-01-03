Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do
        resources :profiles, only: [:index, :create]
    end
    resources :profiles, only: [:show, :update, :delete]
    resource :session, only: [:create, :destroy]
  end 
end
