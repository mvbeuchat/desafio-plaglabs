Rails.application.routes.draw do
  resources :products
  resources :sales_products
  resources :sales
  resources :categories
  resources :clients
  get '/salesByCategory', to: 'categories#salesByCategory'
  get '/salesByProduct', to: 'products#salesByProduct'
  get '/salesByClient', to: 'clients#salesByClient'
  get '/lastSales', to: 'sales#lastSales'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
