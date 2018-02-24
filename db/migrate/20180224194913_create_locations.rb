class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.references :bus, foreign_key: true
      t.integer :lat
      t.integer :lng
      t.string :address

      t.timestamps
    end
  end
end
