class ChangeLatitudeInBuses < ActiveRecord::Migration[5.1]
  def change
    change_column :buses, :lat, :string
    change_column :buses, :lng, :string
  end
end
