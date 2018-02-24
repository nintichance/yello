class Parent < ApplicationRecord
        has_many :trips, dependent: :destroy
        has_many :buses, through: :trips
end
