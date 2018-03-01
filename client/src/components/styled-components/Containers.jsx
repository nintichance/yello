import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFDD73;
    
`
export const DevelopmentContainer = Container.extend`
`
export const HomeContainer = Container.extend`
    background-color: #1b1b1b;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex: 1 0 auto;
`
export const LogOutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MapContainerStyle = styled.div`
    width: 400vw;
    height: 400vh;
    border-radius: 100%;
`
export const ParentsContainer = styled.div`
    margin: 10vh;
`

export const NavDiv = styled.div`
width: 100vw;
position: fixed;        
color: rgb(0, 0, 0);
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 7vh;
margin-bottom: 25px;
background-color: #1b1b1b;
a{
    text-decoration: none;
    color: white;
    margin: 10px;
    margin-right: 20px;
    font-size: 1.25em;
    text-shadow: 1px 1px rgba(0,0,0, 0.1);
}
`
export default {NavDiv, ParentsContainer, MapContainerStyle, HomeContainer, LogOutContainer, DevelopmentContainer }