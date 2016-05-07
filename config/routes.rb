Rails.application.routes.draw do
  root 'blog#index'

  scope 'api' do
    resources :posts, :only => [:index]
  end
end
