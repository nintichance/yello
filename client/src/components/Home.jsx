import React from 'react'
import { ThreeInfo, MissionStatement, SplashImageDiv, TrackBuses, InfoContainer, HomeContainer, IntroDiv, FooterDiv } from './styled-components/Containers'
import HomeNav from './HomeNav'
import { Link, Redirect } from 'react-router-dom'
import { SplashImage, BusImage, PostIcon, TrackBusesImage } from './styled-components/Images'
const Home = () => {
    return (
        <div>
            <HomeNav />
            <SplashImageDiv>
                <MissionStatement>
                <p>Our Mission:</p>
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
                    </MissionStatement>
                </SplashImageDiv>

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
                {/* < BusImage src="https://i.imgur.com/nuztiM2.png" /> */}
                <ThreeInfo>
                <p>Track Buses:</p>
                <p>Keep up with your kids as they ride through time to get to school or home. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </ThreeInfo>
                    <ThreeInfo>
                <p>Know Your Driver:</p>
                <p>Get to know your driver's past history to be sure your kids are safe. Lorem ipsum dolor ssi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    </ThreeInfo>
                    <ThreeInfo>
                <p>Schedule Your Day:</p>
                <p>You'll be able to know where your bus is, so never send your children out too early or arrive to the bus stop too late!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </ThreeInfo>
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