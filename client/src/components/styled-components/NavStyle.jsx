import styled from 'styled-components'

export const NavDiv = styled.div`
width: 100vw;
// position: fixed;  
color: #f9f9f9;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
margin-bottom: 25px;
background-color: #1b1b1b;
// box-shadow: 0 1px 0 0 #1b1b1b;
box-shadow: 0 0 5px 0 gray;
z-index: 1;
a{
    text-decoration: none;
    color: #f9f9f9;
    margin: 10px;
    margin-right: 20px;
    font-size: 1.25em;
    text-shadow: 1px 1px rgba(0,0,0, 0.1);
}
`
export const HomeNavDiv = styled.div`
width: 100vw;
position: fixed;  
color: #f9f9f9;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
margin-bottom: 25px;
background-color: #1b1b1b;
box-shadow: 0 0 15px 0 black;
z-index: 1;
a{
    text-decoration: none;
    color: #f9f9f9;
    margin: 10px;
    margin-right: 20px;
    font-size: 1.25em;
    text-shadow: 1px 1px rgba(0,0,0, 0.1);
}
`

export const NavItems = styled.div`
  
`

export const FooterSpace = styled.div`
    margin: 25px;
    z-index: 1;
    @media only screen and (max-width: 600px){
        margin: 15px;
    
    }
`

export const FooterStyle = styled.div`
    width: 100vw;
    z-index: 1;
    height: 10vh;
    margin-top: 85vh;
    display: flex;
    background-color: rgba(0,0,0,0.001);
    height: 10vh;
    box-shadow: 1px 0 0 0 #dcdcdc;
    align-self: flex-end;
    a{
        text-decoration: none;
        color: #1b1b1b;
        font-size: 2em;
        text-shadow: 1px 1px rgba(0,0,0, 0.1);
        @media only screen and (max-width: 787px){
            font-size: 1em
        
        }

        @media only screen and (max-width: 600px){
            font-size: .75em
        
        }

}
`
export const RefreshButton = styled.button`
    background-color: rgba(0, 0, 0, 0.001);
    border-color: rgba(0, 0, 0, 0.001);
    z-index: 1;
    `
export const RefreshImage = styled.img`
    width: 60px;
    @media only screen and (max-width: 600px){
        width: 80px;
    }
`
export default {
    HomeNavDiv, NavDiv, FooterSpace, FooterStyle, NavItems
}