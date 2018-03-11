import styled from 'styled-components'

export const Container = styled.div `
position: relative;
margin-top: 10px;
margin-bottom: 10px;
width: 30vw;
a {
     width: 100%;
    }
  `
export const Text = styled.div`
  color: #F4C708;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`
  
export const Image = styled.a`
width: 100%;
`
  
export const Overlay = styled.div`
  
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    // background-color: rgba(27,27,27, 0.9);
    background-color: #1b1b1b;
    :hover {
    opacity: 1;
}
`

