import styled from 'styled-components'

export const Header = styled.h1`
    margin-top: 100px;
`

export const ParentShowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ParentPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default { ParentPageContainer, ParentShowContainer, Header }