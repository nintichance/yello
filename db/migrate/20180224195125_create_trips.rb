class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.references :bus, foreign_key: true
      t.references :parent, foreign_key: true

      t.timestamps
    end
  end
end
