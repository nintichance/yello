import React from 'react'
import Parents from './Parents'

const ParentsList = (props) => {

    const parentsList = props.parents.map((parent, index)=>{
        return(
            <Parents name={parent.name}
                     img={parent.img}
                     address={parent.address}
                     lat={parent.lat}
                     lng={parent.lng}
                     parent_id={parent.id}
                     getOneParent={props.getOneParent}
                     key={index}/>
        )
    })

    return(
        <div>
            {parentsList}
        </div>
    )

}

export default ParentsList