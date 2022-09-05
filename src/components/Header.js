import logo from '../images/wally-logo.png';
import odlaw from '../images/odlaw.png';
import wally from '../images/wally.png';
import whiteBeard from '../images/white-beard.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = styled.nav`
  padding: 10px;
  height: 100px;
  display: flex;
  width: 98%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: white;
  top: 3px;
`;

const Div = styled.div`
  height: 100px;  
`

const ImageWrapper = styled.div`
  text-align: center;
`
const Image = styled.img`
  width: 7em;
`;

const CharImage = styled.img`
  width: 4em;
`

const NavBarLink = styled(Link)`
  font-size: 2rem;  
  text-decoration: none;
  color: black;
`;

const Timer = styled.div`
  font-size: 2rem;  
  text-decoration: none;
  color: black;
`;

const TimerWrapper = styled.div`
`

const Name = styled.h2`
  font-size: 1.4rem;
  margin: 0;
`

const Header = (props) => {
  return (
    
    <div>
      <Div />
      <NavBar>
        <Image src={logo} alt="Logo" />
        <ImageWrapper>
          <CharImage src={wally} alt="Wally" />
          <Name>Wally</Name>
        </ImageWrapper>
        <ImageWrapper>
          <CharImage src={odlaw} alt="Odlaw" />
          <Name>Odlaw</Name>
        </ImageWrapper>
        <ImageWrapper>
          <CharImage src={whiteBeard} alt="White beard" />
          <Name>White beard</Name>
        </ImageWrapper>
        {props.playGame ?
        <TimerWrapper>
          <Timer>{props.timeTaken} seconds</Timer>
          <NavBarLink onClick={()=>{props.setPlayGame(false)}} to="leader">Leader Board</NavBarLink>
        </TimerWrapper> :
        <NavBarLink onClick={()=>{props.setPlayGame(true)}}  to="game">Play Game</NavBarLink>}
      </NavBar>
    </div>     
  );
};

export default Header;

