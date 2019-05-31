/**
 * Created by agros on 24.05.2019.
 */
import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';

const Login = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        props.login(email, password);
    };

    //Redirect if logged in
    if(props.isAuth) {
        return <Redirect to="/dashboard" />
    }

    return (
        <section className="container">
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" onSubmit={e=> onSubmitHandler(e)}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        required
                        onChange={(e)=> onChangeHandler(e)}
                    />
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
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </section>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuth: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {login})(Login);