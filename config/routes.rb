Rails.application.routes.draw do
  namespace :api do
    get 'parents/retrieve/:username', :to => 'parents#retrieve'
    get 'buses/retrieve/:driver_username', :to => 'parents#retrieve'
    resources :buses do
      resources :trips
    end
    resources :parents do
      resources :trips
    end

end

end
