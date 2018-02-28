import React from 'react'
import Buses from './Buses'
import NavBar from './NavBar'
const BusesList = (props) => {

    const busesList = props.buses.map((bus, index)=>{
        return(
            <Buses name={bus.name}
                     img={bus.img}
                     address={bus.address}
                     lat={bus.lat}
                     lng={bus.lng}
                     bus_id={bus.id}
                     driver={bus.driver}
                     description={bus.description}
                     key={index}/>
        )
    })

    return(
        <div>
            <NavBar />
            {busesList}
        </div>
    )

}

export default BusesList