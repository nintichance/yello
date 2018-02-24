class Bus < ApplicationRecord
        has_many :locations, dependent: :destroy
        has_many :trips, dependent: :destroy
        has_many :parents, through: :trips
end
