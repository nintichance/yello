import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
// import ReactDOM from 'react-dom'

class MapContainer extends Component {

  // options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // }

// getGeoCode = async() => {
//   const geoCode = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//     params:{
//         address: location,
//         key: 'AIzaSyBU-RjDxbXLDWS1tApwM7RVdC3uCEgsITI'
//     }
//   }
//   try{
//     const geoCodeInfo = geoCode.data.results[0].formatted_address
//   }
//   catch(err){
//     console.log(err)
//   }
// }
  // success = (pos) => {
  //   const crd = pos.coords

  //   console.log('Your current position is:')
  //   console.log(pos)
  //   console.log(`Latitude : ${crd.latitude}`)
  //   console.log(`Longitude: ${crd.longitude}`)
  //   console.log(`More or less ${crd.accuracy} meters.`)

  //   this.setState({lat:crd.latitude, lng:crd.longitude})
  // }

  // error = (err) => {
  //   console.log(`ERROR(${err.code}): ${err.message}`)
  // }
  // getLocation = async() => {

  //   const location = await navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
  //   try {
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  componentWillMount() {
    // navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
  }

  render() {
    if (this.props.lat === "" || this.props.lng === "") {
      console.log("Not loaded")
      return (
        <div>Not loaded yet</div>
      )
    }
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map google={this.props.google} zoom={14} style={style}
        initialCenter={{
          lat: parseFloat(this.props.lat),
          lng: parseFloat(this.props.lng),
          icon: "https://i.imgur.com/FuM0Drp.png"
          // lat:parseFloat("33.878755"),
          // lng:parseFloat("-84.5060817")
          
        }}
        zoom={20}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} 
          />

      </Map>

    )

  }
}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-rlQ66IBXabgS9qBZyuWqRLlfoecdH0M'
})(MapContainer)