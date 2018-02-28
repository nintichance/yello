import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'
import { MapContainerStyle } from './styled-components/Containers'
class ParentShow extends Component {
    state={
        parent: {
            buses: []
        }
    }
    componentWillMount(){
        this.getOneParent()
    }
    
    async getOneParent(){
        console.log("CALLEDD")
       
        try{
          const res = await axios.get(`/api/parents/${this.props.match.params.parent_id}`)
          console.log("YOOOO", this.props.match.params.parent_id)
          const parent = res.data
          console.log("HELLO", parent)
          this.setState({parent: parent})
        }
        catch(error){
          console.log(error)
        }
      }
render(){
   console.log("WOOOO", this.state.parent.buses)
    return(
        <div>
            <h1>{this.state.parent.name}</h1>
            {this.state.parent.buses.map((bus, index)=>{
                return(
                    <div>
                        <h1>{bus.id}</h1>
                        <MapContainerStyle>
                            <MapContainer lat={bus.lat} lng={bus.lng}/>
                        </MapContainerStyle>
                    <div>{bus.driver}</div>
                    <div>{bus.address}</div>
                    </div>
                    
                )
                
            })}
        </div>
    )
    }
}
export default ParentShow