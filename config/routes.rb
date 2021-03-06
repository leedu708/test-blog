Rails.application.routes.draw do
  root 'blog#index'

  scope 'api' do
    resources :posts, :only => [:index, :show, :create, :update, :destroy]
    resources :tags, :only => [:index, :create, :destroy]
  end
end
