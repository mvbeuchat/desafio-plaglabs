class Sale < ApplicationRecord
    belongs_to :client
    has_many :sales_products
end
