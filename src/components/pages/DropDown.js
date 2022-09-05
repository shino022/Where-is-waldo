import styled from 'styled-components';
import { doc, getDoc } from "firebase/firestore"; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const boxSize = 40;

const List = styled.ul`
  background-color: white;
  list-style: none;
  position: absolute;
  margin: 0;
  padding: 4px;
`;

const Char = styled.li`
`
const TargBox = styled.div`
  position: absolute; 
  width: ${boxSize}px;
  height: ${boxSize}px;
  border: 2px dotted black;
  background-color: rgba(254, 110, 110, 0.368);
`


const DropDown = (props) => {

  const getCoordinate = async (char) => {
    const docRef = doc(props.db, "characters", `${char}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  const validate = ({x, y}) => {
    console.log(x,y,props.relCoordinate.x,props.relCoordinate.y)
    if(props.relCoordinate.x < x - 1 || props.relCoordinate.x > x + 1) {
      return false;
    } else if(props.relCoordinate.y < y - 2 || props.relCoordinate.y > y + 2) {
      return false;
    } else {
      return true;
    }
  }

  const handleCharClicked = async (e) => {
    const charName = e.target.textContent;
    const correctLoc = await getCoordinate(charName);
    if(validate(correctLoc)) {
      props.deleteChar(charName);
    }
    console.log(e.target.textContent, "is clicked");
    console.log(props.relCoordinate.x, props.relCoordinate.y);
  }

  let navigate = useNavigate();
  useEffect(()=>{
    if(!props.charList.length) {
      props.setPlayGame(false);
      navigate("/leader");
    }
  },[props.charList])

  return (
    <div>
      <TargBox
        style={{
          top: `${props.absCoordinate.y-(boxSize/2)}px`,
          left: `${props.absCoordinate.x-(boxSize/2)}px`
      }} />
      <List
        style={{
          top: `${props.absCoordinate.y-(boxSize/2)}px`,
          left: `${props.absCoordinate.x+(boxSize/2)+4}px`
      }}>
        {props.charList.map((char)=> <Char key={char} onClick={handleCharClicked}>{char}</Char>)}

      </List>
    </div>
  );
}

export default DropDown;