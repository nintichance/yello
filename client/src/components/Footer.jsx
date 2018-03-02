import React from 'react'
import { FooterStyle, RefreshButton, FooterSpace } from './styled-components/NavStyle'
import { Button } from 'react-materialize'
const Footer = () => {

    const refreshPage = () => {
        console.log("CADSHDJKHE")
        window.location.reload()
    }
    return(      
        <FooterStyle>
                        <FooterSpace></FooterSpace>

            <Button floating large className='red'  waves='light'  icon='refresh' margin-left="10px;" onClick={() => refreshPage()}>Refresh</Button>
        </FooterStyle>
    )
}



export default Footer