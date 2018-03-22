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
    flex-wrap: wrap;
    justify-content: space-around;
  
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
export const ParentShowBus = styled.div`
    display: flex;
    flex-direction: column;
    width: 31vw;
    margin: 1vw;
    justify-content: center;
    align-items: center;
    background-color: #1b1b1b;
    color: white;
    padding: 25px;

    @media only screen and (max-width: 800px) {
        width: 45vw;
    }
    
    @media only screen and (max-width: 450px) {
        width: 80vw;
    }
`

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const SplashImageDiv = styled.div`
    width: 100vw;
    height: 80vh;
    background: url("https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-0.3.5&s=4044d76d9f2de01fd10ddd409543bc7a&auto=format&fit=crop&w=804&q=80");
    background-size: cover;
    background-position: bottom; 
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    @media only screen and (max-width: 350px){
        height: 100vh;
     }
`
export const MissionStatement = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border radius: 4px;
    background-color: rgba(0, 0, 0, 0.25);
    p{
        margin: 30px;
        font-size: 1.5em;
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }

@media only screen and (max-width: 600px){
   flex-direction: column;
}

`
export default {  MissionStatement, SplashImageDiv, ButtonDiv, ParentShowBus, InfoContainer, IntroDiv, BusShowContainer, ParentsContainer, MapContainerStyle, HomeContainer, LogOutContainer, DevelopmentContainer }