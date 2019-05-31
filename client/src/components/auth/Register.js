/**
 * Created by agros on 24.05.2019.
 */
import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth'
import PropTypes from 'prop-types';

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match');
            props.setAlert('Password don\'t match', 'danger');
        } else {
            props.register({name, email, password});
        }
    };

    if (props.isAuth) {
        return <Redirect to="/dashboard" />
    };

    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e=> onSubmitHandler(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        required
                        onChange={(e)=> onChangeHandler(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        required
                        onChange={(e)=> onChangeHandler(e)}
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={(e)=> onChangeHandler(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        value={password2}
                        onChange={(e)=> onChangeHandler(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
    )
};


Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {setAlert, register})(Register);