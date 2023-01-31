Rails.application.routes.draw do
  root 'pages#index'

  namepace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all # this will catch all routes and send them to the index page
end

