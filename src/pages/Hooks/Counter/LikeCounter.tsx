import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../../../store';

interface likeStatus {
  clicked: boolean;
}

const Like = styled.div`
  display: flex;
  padding: '100px';
  width: '100%';
`;

const LikeButton = styled.button<likeStatus>`
  font-size: 1rem;
  padding: 5px 10px;
  color: ${(props) => (props.clicked ? 'blue' : 'black')};
`;

const LikeCounter: React.FC= () => {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberofLikes] = useState(100);

  const appName = useSelector((state: AppState) => state.appName);

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
      <div>
        <LikeButton clicked={liked}>
          <button onClick={handleLikes}>
            {`Like | `}
            <span>{numberOfLikes}</span>
          </button>
        </LikeButton>
        <h1>{appName}</h1>
      </div>
    </Like>
  );
};
export default LikeCounter;
