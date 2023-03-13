class CreateSalesProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :sales_products do |t|
      t.integer :sale_id
      t.integer :product_id
      t.integer :quantity

      t.timestamps
    end
  end
end
