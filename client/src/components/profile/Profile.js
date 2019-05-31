/**
 * Created by agros on 30.05.2019.
 */
import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import {getProfileById} from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <Fragment>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to='/profiles' className='btn btn-light'>
                        Back To Profiles
                    </Link>
                    {auth.isAuth &&
                    auth.loading === false &&
                    auth.user._id === profile.user._id && (
                        <Link to='/edit-profile' className='btn btn-dark'>
                            Edit Profile
                        </Link>
                    )}
                    <div className="profile-grid my-1">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile}/>
                        <div className="profile-exp bg-white p-2">
                            <h2 className="text-primary">Experience</h2>
                            {profile.experience.length===0 ? (<h4>No experience added</h4>) : profile.experience.map(exp => {
                                return (
                                    <ProfileExperience experience={exp} key={exp._id}/>
                                );
                            })}
                        </div>
                        <div className="profile-edu bg-white p-2">
                            <h2 className="text-primary">Education</h2>
                            {profile.education.length===0 ? (<h4>No education added</h4>) : profile.education.map(edu => {
                                return (
                                    <ProfileEducation education={edu} key={edu._id}/>
                                );
                            })}
                        </div>
                        {profile.githubusername && (
                            <ProfileGithub username={profile.githubusername }/>
                            )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

Profile.propTypes ={
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getProfileById: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, {getProfileById})(Profile);