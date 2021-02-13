Rails.application.routes.draw do
  
  
  root to: 'home#index'

  get '/dashboard', to: 'home#dashboard'
  namespace :api do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    post 'users', to: 'users#create'
    post 'sessions', to: 'sessions#create'
    get 'sessions', to: 'sessions#authenticated'
    delete 'sessions', to: 'sessions#destroy'

    get 'tweets', to: 'tweets#index'
    post 'tweets', to: 'tweets#create'
    delete 'tweets/:id', to: 'tweets#destroy'
    get 'user/tweets/:username', to: 'tweets#index_by_user'
  end

end
