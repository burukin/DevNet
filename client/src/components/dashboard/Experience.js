/**
 * Created by agros on 28.05.2019.
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {deleteExperience} from '../../actions/profile';


const Experience = ({experience, deleteExperience}) => {
    const experiences = experience.map(exp => {
        return (
            <tr key={exp._id}>
                <td>{exp.title}</td>
                <td>{exp.company}</td>
                <td>
                    <Moment format="YYYY/MM/DD">
                        {exp.from}
                    </Moment>
                    - {' '}
                    { exp.to === null
                        ? ('Now')
                        : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)
                    }
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=> deleteExperience(exp._id)}>Delete</button>
                </td>
            </tr>
        )
    });
    return (
        <Fragment>
            <h2 className="my-2">Experience credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {experiences}
                </tbody>
            </table>
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        experience: state.profile.profile.experience
    }
};

export default connect(mapStateToProps, {deleteExperience})(Experience);