import React from 'react'
import Buses from './Buses'
import NavBar from './NavBar'
import { BusShowContainer } from './styled-components/Containers'
import { InstructionsDiv } from './styled-components/BusPageStyle'
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
                     bus={bus}
                     key={index}
                     updateParentWithBus={props.updateParentWithBus}/>
        )
    })

    return(
        <div>
            <NavBar />
            <InstructionsDiv>Click a driver to view route!</InstructionsDiv>
        <BusShowContainer>
            {busesList}
        </BusShowContainer>
        </div>
    )

}

export default BusesList