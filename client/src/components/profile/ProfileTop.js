/**
 * Created by agros on 30.05.2019.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({profile}) => {
    let socialLinks = [];
    if (profile.social) {
        for (let socialLink in profile.social) {
            socialLinks.push(socialLink);
        }
    }

    return (
        <div className="profile-top bg-primary p-2">
            <img
                className="round-img my-1"
                src={profile.user.avatar}
                alt={profile.user.name}
            />
            <h1 className="large">{profile.user.name}</h1>
            <p className="lead">{profile.status} {profile.company && <span>at {profile.company}</span>}</p>
            <p>{profile.location && profile.location}</p>
            <div className="icons my-1">
                {
                    profile.website && (
                        <a href={profile.website} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-globe fa-2x"></i>
                        </a>
                    )
                }
                {socialLinks.map((link, index) => {
                    return (
                        <a href={profile.social[link]} target="_blank" rel="noopener noreferrer" key={index}>
                            <i className={`fab fa-${link} fa-2x`}></i>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileTop;