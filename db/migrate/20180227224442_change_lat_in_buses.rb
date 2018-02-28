class ChangeLatInBuses < ActiveRecord::Migration[5.1]
  def change
    change_column :buses, :lat, :decimal
  end
end
