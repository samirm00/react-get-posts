import './Post.css';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

export default Post;
