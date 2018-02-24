class CreateParents < ActiveRecord::Migration[5.1]
  def change
    create_table :parents do |t|
      t.string :name
      t.string :img
      t.integer :lat
      t.integer :lng
      t.string :address

      t.timestamps
    end
  end
end
