class ParentSerializer < ActiveModel::Serializer
  attributes :username, :id, :name, :img, :address, :lat, :lng, :buses

end
