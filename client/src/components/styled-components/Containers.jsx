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
    background-color: #f9a825;
    display: flex;
    width: 100vw;
    height: 80vh;
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


export const BusShowContainer = styled.div`
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
`

export const IntroDiv = styled.div`
    height: 70vh;
    width: 100vw;
    background-color: #f9a825;
`

export const InfoContainer = styled.div`
    height: 40vh;
    width: 100vw;
    background-color: #1b1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: 30px;
        font-size: 1em;
       color: #f9a825;

    }

@media only screen and (max-width: 600px){
   height: 60vh;
   flex-direction: column;
}
`

export const FooterDiv = styled.div`
    height: 30vh;
    width: 100vw;
    background-color: #1b1b1b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        color: #fafafa;
    }
`

export const TrackBuses = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default { InfoContainer, IntroDiv, BusShowContainer, ParentsContainer, MapContainerStyle, HomeContainer, LogOutContainer, DevelopmentContainer }