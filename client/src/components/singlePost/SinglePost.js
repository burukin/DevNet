/**
 * Created by agros on 31.05.2019.
 */
import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../../components/layout/Spinner';
import {getSinglePost} from '../../actions/post';
import PostItem from '../posts/PostItem';
import PostForm from '../posts/PostForm';
import CommentItem from '../singlePost/CommentItem';

const SinglePost = ({getSinglePost, post:{singlePost, loading}, match}) => {
    useEffect(() => {
        getSinglePost(match.params.id)
    }, [getSinglePost]);

    return (
        loading || singlePost === null ? <Spinner/> : (
            <Fragment>
                <Link className="btn btn-light my-1" to='/posts'>Go Back</Link>
                <PostItem post={singlePost} showActions={false}/>
                <PostForm isPost={false} id={singlePost._id}/>
                <div className="comments">
                    {singlePost.comments.map(comment => {
                        return (
                            <CommentItem comment={comment} postId={singlePost._id} key={comment._id}/>
                        );
                    })}
                </div>
            </Fragment>
        )
    );
};

SinglePost.propTypes = {
    getSinglePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        post: state.post
    }
};

export default connect(mapStateToProps, {getSinglePost})(SinglePost);