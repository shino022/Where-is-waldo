import logo from '../images/wally-logo.png';
import odlaw from '../images/odlaw.png';
import wally from '../images/wally.png';
import whiteBeard from '../images/white-beard.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = styled.nav`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  text-align: center;
`
const Image = styled.img`
  width: 8em;
`;

const CharImage = styled.img`
  width: 5em;
`

const NavBarLink = styled(Link)`
  font-size: 2.4rem;  
  text-decoration: none;
  color: black;
`;

const Name = styled.h2`
  margin: 0;
`

const Header = () => {
  const [ playGame, setPlayGame ] = useState(true);
  return (
    <div>
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
        {playGame ? 
        <NavBarLink onClick={()=>{setPlayGame(false)}} to="leader">Leader Board</NavBarLink> : 
        <NavBarLink onClick={()=>{setPlayGame(true)}}  to="game">Play Game</NavBarLink>}
      </NavBar>      
    </div>
  );
};

export default Header;
