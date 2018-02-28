class ChangeLngInBuses < ActiveRecord::Migration[5.1]
  def change
    change_column :buses, :lng, :decimal
  end
end
