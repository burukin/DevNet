/**
 * Created by agros on 31.05.2019.
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({experience}) => {
    return (
        <div>
            <h3 className="text-dark">{experience.company}</h3>
            <p>{<Moment format="DD/MM/YYYY">{experience.from}</Moment>} - {experience.to ? <Moment format="DD/MM/YYYY">{experience.to}</Moment> : 'current'}</p>
            <p><strong>Position: </strong>{experience.title}</p>
                {experience.description && (
                    <Fragment>
                        <p>
                            <strong>Description: </strong>
                            {experience.description}
                        </p>
                    </Fragment>
                )}
        </div>
    );
};

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
};

export default ProfileExperience;