import styled from 'styled-components'

export const PeopleImages = styled.img `
width: 35vw;
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
    width: 4.5vw;
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



export default { PeopleImages, CityImage, LogoImage, PostIcon, TrashIcon }