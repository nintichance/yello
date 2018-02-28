class Parent < ApplicationRecord
        has_many :trips, dependent: :destroy
        has_many :buses, through: :trips
        validates_uniqueness_of :username
end
