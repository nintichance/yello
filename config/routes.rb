Rails.application.routes.draw do
  namespace :api do
    resources :buses do
      resources :trips
    end
    resources :parents do
      resources :trips
    end

end

end
