import styled from 'styled-components'

export const Nav = styled.div`
    width: 100vw;
    position: fixed;        
    color: rgb(0, 0, 0);
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    align-items: center;
    height: 10vh;
    margin-bottom: 25px;
    a{
        text-decoration: none;
        color: white;
        margin: 10px;
        margin-right: 20px;
        font-size: 1.25em;
        text-shadow: 1px 1px rgba(0,0,0, 0.1);
        @media only screen and (max-width: 787px){
            font-size: 1em
        
        }
    
        @media only screen and (max-width: 600px){
            font-size: .75em
        
        }
    
    }
`
export const NavItems = styled.div`
    margin-right: 25px;
    a {
        margin: 10px;
    }
`
export const Footers = styled.div`
    width: 100vw;
    background-color: white;
    z-index: 1;
    height: 7vh;
    margin-top: 93vh;
`
export const FooterStyle = styled.div`
    width: 100vw;
    background-color: white;
    z-index: 1;
    height: 7vh;
    margin-top: 93vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    margin-bottom: 25px;
    align-self: flex-end;
    a{
        text-decoration: none;
        color: white;
        margin: 10px;
        margin-right: 20px;
        font-size: 1.25em;
        text-shadow: 1px 1px rgba(0,0,0, 0.1);
        @media only screen and (max-width: 787px){
            font-size: 1em
        
        }

        @media only screen and (max-width: 600px){
            font-size: .75em
        
        }

}
`

export default {
    Footers, FooterStyle, Nav, NavItems
}