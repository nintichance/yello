class BusSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :address, :driver, :img, :description, :parents
end
