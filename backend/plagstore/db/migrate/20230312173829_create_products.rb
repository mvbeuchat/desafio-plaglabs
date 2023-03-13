class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.integer :category_id
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
