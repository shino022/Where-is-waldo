import logo from '../images/wally-logo.png';
import odlaw from '../images/odlaw.png';
import wally from '../images/wally.png';
import whiteBeard from '../images/white-beard.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: skyblue;
`;

const NavBar = styled.nav`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
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
const Main = () => {
  const [ playGame, setPlayGame ] = useState(true);
  return (
    <div>
      <NavBar>
        <ImageWrapper>
          <Image src={logo} alt="Logo" />
        </ImageWrapper>
        <CharImage src={wally} alt="Wally" />
        <CharImage src={odlaw} alt="Odlaw" />
        <CharImage src={whiteBeard} alt="White beard" />
        {playGame ? 
        <NavBarLink onClick={()=>{setPlayGame(false)}} to="leader">Leader Board</NavBarLink> : 
        <NavBarLink onClick={()=>{setPlayGame(true)}}  to="/">Play Game</NavBarLink>}
      </NavBar>      
    </div>
  );
};



export default Main;
