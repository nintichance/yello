import React from 'react'
import Parents from './Parents'
import NavBar from './NavBar'
const ParentsList = (props) => {

    const parentsList = props.parents.map((parent, index)=>{
        return(
            <Parents name={parent.name}
                     img={parent.img}
                     address={parent.address}
                     lat={parent.lat}
                     lng={parent.lng}
                     parent_id={parent.id}
                     key={index}/>
        )
    })

    return(
        <div>
            <NavBar />
            {parentsList}
        </div>
    )

}

export default ParentsList