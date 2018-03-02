import styled from 'styled-components'

export const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 10vh;
z-index: 1;
background-color: #f9f9f9;
position: fixed;
box-shadow: 0 1px 0 0 #dcdcdc;
    a{
        text-decoration: none;
        color: #1b1b1b;
        font-size: 1.25em;
        text-shadow: 1px 1px rgba(0,0,0, 0.1);
        @media only screen and (max-width: 787px){
            font-size: 1em
        
        }
    
        @media only screen and (max-width: 600px){
            font-size: 1em
        
        }
    
    }
`
export const NavItems = styled.div`
  
`

export const FooterStyle = styled.div`
    width: 100vw;
    z-index: 1;
    height: 10vh;
    margin-top: 80vh;
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
  border: 0;
  background-color: blue;
  cursor: pointer;
  color: white;
  height: 10vh;
  width: 15vw;
  font-size: 20px;
  font-weight: 400;
  margin-left: 5vw;
  @media only screen and (max-width: 600px){
    margin-left: 20vw;
    height: 10vh;
    width: 25vw;
}

`

export default {
    RefreshButton, FooterStyle, Nav, NavItems
}