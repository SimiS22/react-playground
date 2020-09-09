import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { AppState } from '../../../store';

interface likeStatus {
  clicked: boolean;
}

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-tems: center;
  width: 100%;
  height: 100px;
  margin-top: 100px;
`;

const LikeButton = styled.button<likeStatus>`
  font-size: 40px;
  padding: 0px 40px;
  color: ${(props) => (props.clicked ? 'blue' : 'black')};
`;

const LikeCounter: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberofLikes] = useState(100);

  // const appName = useSelector((state: AppState) => state.appName);

  const handleLikes = () => {
    if (!liked) {
      setLiked(true);
      setNumberofLikes(numberOfLikes + 1);
    } else {
      setLiked(false);
      setNumberofLikes(numberOfLikes - 1);
    }
  };

  return (
    <Like>
      <LikeButton clicked={liked} onClick={handleLikes}>
        {`Like | `}
        <span>{numberOfLikes}</span>
      </LikeButton>
      {/* <h1>{appName}</h1> */}
    </Like>
  );
};
export default LikeCounter;
