Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :buddies, only: [:create, :update, :show, :index]
    resources :reservations
    resources :workouts, only: [:create, :update, :show, :index, :destroy]
  end
  root "static_pages#root"

end
