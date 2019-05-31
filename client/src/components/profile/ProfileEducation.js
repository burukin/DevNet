/**
 * Created by agros on 31.05.2019.
 */
/**
 * Created by agros on 31.05.2019.
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({education}) => {
    return (
        <div>
            <h3 className="text-dark">{education.school}</h3>
            <p>{<Moment format="DD/MM/YYYY">{education.from}</Moment>} - {education.to ? <Moment format="DD/MM/YYYY">{education.to}</Moment> : 'current'}</p>
            <p><strong>Degree: </strong>{education.degree}</p>
            {education.fieldofstudy && <p><strong>Field Of Study: </strong>{education.fieldofstudy}</p>}
            {education.description && (
                <Fragment>
                    <p>
                        <strong>Description: </strong>
                        {education.description}
                    </p>
                </Fragment>
            )}
        </div>
    );
};

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
};

export default ProfileEducation;