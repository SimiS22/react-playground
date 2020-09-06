import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCount: 100,
            liked: false,
        }
    }

    handleLikeClick = () => {
        const { likesCount, liked } = this.state;
        this.setState({
            liked: !liked,
            likesCount: liked ? likesCount - 1 : likesCount + 1
        });
    }

    render() {
        const { likesCount, liked } = this.state;
        return (
            <>
                <div>
                    <button className={cx('like-button', { 'liked': liked })} onClick={this.handleLikeClick}>
                        {`Like | `}
                        <span className="likes-counter">{likesCount}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
