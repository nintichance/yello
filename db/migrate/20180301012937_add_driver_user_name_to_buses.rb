class AddDriverUserNameToBuses < ActiveRecord::Migration[5.1]
  def change
    add_column :buses, :driver_username, :string
  end
end
