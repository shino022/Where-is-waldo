import styled from 'styled-components';
import { getDocs, collection } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(222, 222, 222);
  width: 400px;
  padding: 10px;
  white-space: pre-wrap;
`;

const Name = styled.div`
  width:200px;
  text-align: start;
`;

const Score = styled.div`
  width:200px;
  text-align: start;
`;


const LeaderBoard = (props) => {
  const [ leaderData, setLeaderData ] = useState([]);
  let place = 0;
  const getLeaderBoard = async () => {
    const querySnapshot = await getDocs(collection(props.db, "LeaderBoard"));
    const buffer = [];

    querySnapshot.forEach((doc) => {
      buffer.push(doc.data());
    });
    buffer.sort((a, b)=>{return a.record-b.record });
    setLeaderData(buffer);
  };
  useEffect(()=>{
   getLeaderBoard()
   place = 0;
  },[])
  return (
    <Wrapper>
      <h1>Leader Board</h1>
      {leaderData.map( data => {
        return(
        <User key={data.name}>
          <div>{`${++place}. `}</div>
          <Name>Name: {data.name}</Name>
          <Score>Score: {data.record}s</Score>
        </User> );})}
    </Wrapper>
  );
}

export default LeaderBoard;
