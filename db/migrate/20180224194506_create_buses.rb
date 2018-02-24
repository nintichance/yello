class CreateBuses < ActiveRecord::Migration[5.1]
  def change
    create_table :buses do |t|
      t.string :address
      t.integer :lat
      t.integer :lng
      t.string :img
      t.string :driver
      t.string :description

      t.timestamps
    end
  end
end
