Rails.application.routes.draw do
  root to: 'pages#home'
  get '/chalet', to: 'pages#chalet'
  get '/histoire', to: 'pages#histoire'
  get'/alentours', to: 'pages#alentours'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
