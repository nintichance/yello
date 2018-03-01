import React from 'react'
import { FooterStyle } from './styled-components/NavStyle'

const Footer = () => {
    const refreshPage = () => {
        console.log("CADSHDJKHE")
        window.location.reload()
    }
    return(

      
        <FooterStyle>
            <button onClick={() => refreshPage()}>Refresh</button>
        </FooterStyle>
    )
}



export default Footer