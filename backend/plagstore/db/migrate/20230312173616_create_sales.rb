class CreateSales < ActiveRecord::Migration[6.0]
  def change
    create_table :sales do |t|
      t.integer :client_id
      t.date :date
      t.integer :status

      t.timestamps
    end
  end
end
