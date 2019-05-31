/**
 * Created by agros on 31.05.2019.
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {addLike, removeLike, deletePost, removeComment} from '../../actions/post';

const PostItem = ({post, auth, addLike, removeLike, deletePost, showActions}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${post.user}`}>
                    <img
                        className="round-img"
                        src={post.avatar}
                        alt=""
                    />
                    <h4>{post.name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {post.text}
                </p>
                <p className="post-date">
                    <Moment format="DD/MM/YYYY">{post.date}</Moment>
                </p>

                {showActions && (
                    <Fragment>
                        <button type="button" className="btn btn-light" onClick={()=>addLike(post._id)}>
                            <i className="fas fa-thumbs-up"></i>
                            <span> {post.likes.length>0 && post.likes.length}</span>
                        </button>
                        <button type="button" className="btn btn-light" onClick={()=>removeLike(post._id)}>
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                        <Link to={`/posts/${post._id}`} className="btn btn-primary">
                            Discussion {post.comments.length>0 && <span className='comment-count'>{post.comments.length}</span>}
                        </Link>
                        {!auth.loading && post.user===auth.user._id && (
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={()=> deletePost(post._id)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        )}        
                    </Fragment>
                )}

            </div>
        </div>
    );
};

PostItem.defaultProps = {
    showActions : true,
    isPost: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions : PropTypes.bool
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {addLike, removeLike, deletePost, removeComment})(PostItem);
