import styled from 'styled-components'

export const PeopleImages = styled.img `
width: 30vw;
`
export const CityImage = styled.img`
    width: 24.75vw;
    height: 286.86px;

   
    
    @media only screen and (max-width: 1280px){
        width: 33vw;
        height: 286.86px;
    
    }
 
    @media only screen and (max-width: 1000px){
        width: 49.75vw;
        height: 60vh;
    
    }
    @media only screen and (max-width: 830px){
        width: 100vw;
        height: 90vh;
    
    }


    @media only screen and (max-width: 787px){
        width: 100%;
        height: auto;
    
    }

`
export const LogoImage = styled.img`
    margin-left: 15px;
    width: 4vw;

    @media only screen and (max-width: 600px){
       width: 10vw;
    
    }
`
export const BusImage = styled.img`
    width: 20vw;
`

export const PostIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    
`
export const TrashIcon = styled.img`
    width: 15px;
    height: 15px;
    margin: 0 10px 0 10px;
`

export const EditIcon = TrashIcon.extend`

`

export const TrackBusesImage = styled.img`
    width: 50vw;
    @media only screen and (min-width: 600px){
        width: 25vw;
     }
`




export default { TrackBusesImage, BusImage, PeopleImages, CityImage, LogoImage, PostIcon, TrashIcon }