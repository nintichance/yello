import React from 'react'
import { FooterStyle, RefreshButton, FooterSpace, RefreshImage} from './styled-components/NavStyle'
const Footer = () => {

    const refreshPage = () => {
        console.log("CADSHDJKHE")
        window.location.reload()
    }
    return (
        <FooterStyle>
            <FooterSpace></FooterSpace>
            <RefreshButton onClick={() => refreshPage()}><RefreshImage src="https://i.imgur.com/PgtFTgP.png"/></RefreshButton>
        </FooterStyle>
    )
}



export default Footer