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
  img: "https://i.imgur.com/pXbZOGG.jpg?1",
  description: "Has been performing exceptionally."
  )

bus_two = Bus.create(
  lat: "33.7538829",
  lng: "-84.3641986",
  address: "16 Krog St NE, Atlanta, GA 30307, USA",
  driver: "Heyo Rivier",
  driver_username: "heyorivier",
  img:"https://i.imgur.com/Etaoghi.jpg?1",
  description: "Has as great interpersonal skills as driving."
  )

bus_three = Bus.create(
  lat: "33.8787257",
  lng: "-84.5060014",
  address: "1630 Mosaic Way, Smyrna, GA 30080, USA",
  driver: "Adam Michaelson",
  driver_username: "rocks",
  img: "https://i.imgur.com/54UEgsG.jpg?1",
  description: "What a wonderful person and driver."
  )

  bus_four = Bus.create(
  lat: "33.7562474",
  lng: "-84.301143",
  address: "173 Spring St, Decatur, GA 30030, USA",
  driver: "Ngazi Obunko",
  driver_username: "ngazio",
  img: "https://i.imgur.com/WBXzxcm.jpg?1",
  description: "New driver, but great with kids."
  )

  bus_five = Bus.create(
  lat: "33.7491288",
  lng: "-84.361924",
  address: "200 Pearl St SE, Atlanta, GA 30316, USA",
  driver: "Ana Elsin",
  driver_username: "frozen",
  img: "https://i.imgur.com/pGy3MEs.jpg?1",
  description: "Silly personality, but serious on the road."
  )

bus_six = Bus.create(
  lat: "33.7538829",
  lng: "-84.3641986",
  address: "16 Krog St NE, Atlanta, GA 30307, USA",
  driver: "Jose Sanchez",
  driver_username: "sanchez",
  img:"https://i.imgur.com/8fLaZJw.jpg?1",
  description: "Always on time."
  )

bus_seven = Bus.create(
  lat: "33.8787257",
  lng: "-84.5060014",
  address: "1630 Mosaic Way, Smyrna, GA 30080, USA",
  driver: "Imelia Bak",
  driver_username: "imelia",
  img: "https://i.imgur.com/Inis55T.jpg?1",
  description: "Never met a better driver."
  )

  bus_eight = Bus.create(
  lat: "33.7562474",
  lng: "-84.301143",
  address: "173 Spring St, Decatur, GA 30030, USA",
  driver: "Luna Stri",
  driver_username: "themoon",
  img: "https://i.imgur.com/D1aqF2V.jpg?1",
  description: "What a great human being and driver."
  )

bus_nine = Bus.create(
  lat: "33.7491288",
  lng: "-84.361924",
  address: "200 Pearl St SE, Atlanta, GA 30316, USA",
  driver: "Cormack McLaggen",
  driver_username: "mclag",
  img: "https://i.imgur.com/vRoG5GH.jpg?1",
  description: "I wish she could stay forever."
  )

bus_ten = Bus.create(
  lat: "33.7538829",
  lng: "-84.3641986",
  address: "16 Krog St NE, Atlanta, GA 30307, USA",
  driver: "O. Jane",
  driver_username: "ojane",
  img:"https://i.imgur.com/N18bDfp.jpg?1",
  description: "Honestly, should lead everyone."
  )

bus_eleven = Bus.create(
  lat: "33.8787257",
  lng: "-84.5060014",
  address: "1630 Mosaic Way, Smyrna, GA 30080, USA",
  driver: "Simeon Mimms",
  driver_username: "mimmeon",
  img: "https://i.imgur.com/czJ1qLI.jpg?1",
  description: "One of the best."
  )

  bus_twelve= Bus.create(
  lat: "33.8787257",
  lng: "-84.5060014",
  address: "1630 Mosaic Way, Smyrna, GA 30080, USA",
  driver: "Shulamith Firestone",
  driver_username: "feminixhim",
  img: "https://i.imgur.com/4xBPXz2.jpg?2",
  description: "Loks forward to interacting with the kids everyday."
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