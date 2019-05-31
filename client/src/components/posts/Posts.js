/**
 * Created by agros on 31.05.2019.
 */
import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({post:{posts, loading}, getPosts}) => {
    useEffect(()=> {
        getPosts();
    }, [getPosts]);

    return (
        loading ? <Spinner /> : (
            <Fragment>
                
                <h1 className="large text-primary">Posts</h1>
                <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>
                <PostForm />
                {posts.map(post => {
                    return <PostItem key={post._id} post={post} showActions/>
                })}
            </Fragment>
        )
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    post: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);