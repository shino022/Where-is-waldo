import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
`;

const NavBarLink = styled(Link)`
  font-size: 2.4rem;  
  text-decoration: none;
  color: black;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <ButtonContainer>
      <Button>
        <NavBarLink to="game">Play Game</NavBarLink>
      </Button>
    </ButtonContainer>
  )
}

export default Home;
