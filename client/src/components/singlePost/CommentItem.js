/**
 * Created by agros on 31.05.2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeComment} from '../../actions/post';

const CommentItem = ({comment, removeComment, auth:{user, loading}, postId}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${comment.user}`}>
                    <img
                        className="round-img"
                        src={comment.avatar}
                        alt=""
                    />
                    <h4>{comment.name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {comment.text}
                </p>
                <p className="post-date">
                    <Moment format="DD/MM/YYYY">{comment.date}</Moment>
                </p>
                {!loading && comment.user === user._id && (
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={()=> removeComment(postId, comment._id)}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>

        </div>
    );
};

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
};

const mapStateToProps = state=> {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, {removeComment})(CommentItem);