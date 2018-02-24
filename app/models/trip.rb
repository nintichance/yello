class Trip < ApplicationRecord
  belongs_to :bus
  belongs_to :parent
end
