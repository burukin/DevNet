/**
 * Created by agros on 30.05.2019.
 */
import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {getProfiles} from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles  = ({getProfiles, profile:{profiles, loading}}) => {
    useEffect(()=>{
        getProfiles();
    }, [getProfiles]);

    const profilesList = profiles.map(profile => {
        return (
            <ProfileItem key={profile._id} profile={profile}/>
        )
    });

    const profilesContent = (
        <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
                <i className="fab fa-connectdevelop"></i> Browse and connect with developers
            </p>
            <div className="profiles">
                {profiles.length > 0 ? profilesList : <h4>No profiles found</h4>}
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            {loading? <Spinner/> : profilesContent}
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
};
export default connect(mapStateToProps, {getProfiles})(Profiles);