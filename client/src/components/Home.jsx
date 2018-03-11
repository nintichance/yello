import React from 'react'
import { TrackBuses, InfoContainer, HomeContainer, IntroDiv, FooterDiv } from './styled-components/Containers'
import HomeNav from './HomeNav'
import { Link, Redirect } from 'react-router-dom'
import { BusImage, PostIcon, TrackBusesImage } from './styled-components/Images'
const Home = () => {
    return (
        <div>
            <HomeNav />
            <HomeContainer> 
                {/* <Link to="/parents">Parents</Link> */}
                <TrackBuses>
                    <p>Click Map to Track Buses</p>
                <Link to="/buses">
                <TrackBusesImage src="https://i.imgur.com/zdlF7rB.png"/>
                </Link>
                </TrackBuses>
            </HomeContainer>
            <InfoContainer>
                < BusImage src="https://i.imgur.com/nuztiM2.png" />
                <div>
                <p>Mission Statement:</p>
                <p>We are as concerned with
                the safety and schedule
                 of your kids as you are!
                 Add your children's buses
                 to your profile to track where
                 your child's schoolbus is.
                 You no longer have to wait at
                 the bus stop for 30 minutes as the
                 bus sits in traffic nor do you need
                to send your children out in the cold
                too early in the morning because you'll
                    always know where the bus is!</p>
                    </div>
            </InfoContainer>
            <IntroDiv>

            </IntroDiv>
            <FooterDiv>
                <p>Meet the Developer:</p>
                <div>
                <a href="https://www.linkedin.com/in/ninti-chance-13a15a122/" target="_blank">
                <PostIcon src="https://i.imgur.com/Nj376OA.png" />
                </a>
                <a href="https://github.com/nintichance" target="_blank">
                <PostIcon src="https://i.imgur.com/IhzKl4j.png" />
                </a>
                <a href="https://www.instagram.com/ninti.wav/" target="_blank">
                <PostIcon src="https://i.imgur.com/1DFHLqt.png" />
                </a>
                </div>
                <p>
                    Design with &#10084; by Ninti
                </p>
            </FooterDiv>
        </div>
    )
}


export default Home