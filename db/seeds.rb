# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bus.destroy_all
Parent.destroy_all
Trip.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end 

bus_one = Bus.create(
  lat: "33.7491288",
  lng: "-84.361924",
  address: "200 Pearl St SE, Atlanta, GA 30316, USA",
  driver: "Cindy Mayweather",
  driver_username: "android",
  img: "https://i.imgur.com/KQm21ye.jpg",
  description: "Has been driving for five years. Background clean."
  )

bus_two = Bus.create(
  lat: "33.7491288",
  lng: "-84.361924",
  address: "200 Pearl St SE, Atlanta, GA 30316, USA",
  driver: "Heyo Rivier",
  driver_username: "heyorivier",
  img:"https://i.imgur.com/QKCVUFz.jpg?3",
  description: "Has been driving for five years. Background clean."
  )

bus_three = Bus.create(
  lat: "33.7491288",
  lng: "-84.361924",
  address: "200 Pearl St SE, Atlanta, GA 30316, USA",
  driver: "Marco Smarco",
  driver_username: "rocks",
  img: "https://i.imgur.com/V8Jxe3D.jpg",
  description: "Has been driving for five years. Background clean."
  )

micah = Parent.create(
    name: "Micah Michaels",
    img: "https://i.imgur.com/KQm21ye.jpg",
    address: "675 Ponce De Leon Ave NE, Atlanta, GA 30308",
    lat: 33.7725173,
    lng: -84.3659673,
    username: "micmic"
  )

lula = Parent.create(
    name: "Lula Mim",
    img: "https://i.imgur.com/QKCVUFz.jpg?3",
    address: "675 Ponce De Leon Ave NE, Atlanta, GA 30308",
    lat: 33.7725173,
    lng: -84.3659673,
    username: "tallulah"
  )

anderson = Parent.create(
    name: "Anderson Cooper",
    img: "https://i.imgur.com/AqQrCXI.jpg?1",
    address: "675 Ponce De Leon Ave NE, Atlanta, GA 30308",
    lat: 33.7725173,
    lng: -84.3659673,
    username: "andycoops"
  )


  Trip.create(bus: bus_one, parent: micah)
  Trip.create(bus: bus_two, parent: micah)
  Trip.create(bus: bus_two, parent: lula)
  Trip.create(bus: bus_three, parent: anderson)