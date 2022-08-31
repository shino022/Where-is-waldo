import styled from 'styled-components';

import { doc, getDoc } from "firebase/firestore"; 


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
  //-------------------------------------------------
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

  
  //---------------------------------------------------------


  const handleCharClicked = async (e) => {
    const charName = e.target.textContent;
    const correctLoc = await getCoordinate(charName);
    console.log(validate(correctLoc));
    console.log(e.target.textContent, "is clicked");
    console.log(props.relCoordinate.x, props.relCoordinate.y);
  }

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
        <Char onClick={handleCharClicked}>Wally</Char>
        <Char onClick={handleCharClicked}>Odlaw</Char>
        <Char onClick={handleCharClicked}>White beard</Char>
      </List>
    </div>
  );
}

export default DropDown;