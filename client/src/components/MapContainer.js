import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import ReactDOM from 'react-dom'

class MapContainer extends Component {

  state = {
    lat: "",
    lng: ""
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

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
  success = (pos) => {
    const crd = pos.coords

    console.log('Your current position is:')
    console.log(pos)
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)

    this.setState({lat:crd.latitude, lng:crd.longitude})
  }

  error = (err) => {
    console.log(`ERROR(${err.code}): ${err.message}`)
  }
  getLocation = async() => {

    const location = await navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
    try {
    } catch (error) {
      
    }
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
  }

  render() {
    console.log(this.state.lat, this.state.lng)
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map google={this.props.google} zoom={14} style={style}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng
          // lat:33.878755,
          // lng:-84.5060817
        }}
        zoom={15}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

      </Map>
    )

  }
}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-rlQ66IBXabgS9qBZyuWqRLlfoecdH0M'
})(MapContainer)