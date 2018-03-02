import React from 'react'
import { FooterStyle, RefreshButton } from './styled-components/NavStyle'
import { Button } from 'react-materialize'
const Footer = () => {

    const refreshPage = () => {
        console.log("CADSHDJKHE")
        window.location.reload()
    }
    return(      
        <FooterStyle>
            <Button floating large className='red'  waves='light'  icon='refresh' onClick={() => refreshPage()}>Refresh</Button>
        </FooterStyle>
    )
}



export default Footer