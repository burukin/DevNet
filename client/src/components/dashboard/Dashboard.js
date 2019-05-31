/**
 * Created by agros on 26.05.2019.
 */
import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import Spinner from '../../components/layout/Spinner';
import {Link} from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import {deleteAccount} from '../../actions/profile';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Welcome {user && user.name}
            </p>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />
                    <Experience />
                    <Education />

                    <div className='my-2'>
                        <button className='btn btn-danger' onClick={(history) => deleteAccount()}>
                            <i className='fas fa-user-minus' /> Delete My Account
                        </button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        Create Profile
                    </Link>
                </Fragment>
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        profile: state.profile
    }
};

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);