/**
 * Created by agros on 31.05.2019.
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {addPost, addComment} from '../../actions/post';
import {connect} from 'react-redux';

const PostForm = ({addPost, addComment, isPost, id}) => {
    const [formData, setFormData] = useState({
        text: ''
    });

    const onChangeHandler = e => {
        setFormData({text: e.target.value});
    };

    const onFormSubmit = e => {
        e.preventDefault();
        isPost ? addPost(formData) : addComment(id, formData);
        setFormData({...formData, text: ''});
    };
    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <form className="form my-1" onSubmit={ (e)=> onFormSubmit(e)}>
                          <textarea
                              name="text"
                              cols="30"
                              rows="5"
                              placeholder={`Create a ${isPost ? 'post' : 'comment'}`}
                              onChange={(e) => onChangeHandler(e)}
                              required
                          ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    );
};

PostForm.defaultProps = {
    isPost: true
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    isPost: PropTypes.bool
};

export default connect(null, {addPost, addComment})(PostForm);