/**
 * Created by agros on 28.05.2019.
 */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {deleteEducation} from '../../actions/profile';


const Education = ({education, deleteEducation}) => {
    const educations = education.map(edu => {
        return (
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td >{edu.degree}</td>
                <td className="hide-sm">{edu.fieldofstudy}</td>
                <td>
                    <Moment format="YYYY/MM/DD">
                        {edu.from}
                    </Moment>
                    - {' '}
                    { edu.to === null
                        ? ('Now')
                        : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)
                    }
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=> deleteEducation(edu._id)}>Delete</button>
                </td>
            </tr>
        )
    });
    return (
        <Fragment>
            <h2 className="my-2">Education credentials</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>School</th>
                    <th>Degree</th>
                    <th className="hide-sm">Field Of Study</th>
                    <th className="hide-sm">Years</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                {educations}
                </tbody>
            </table>
        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        education: state.profile.profile.education
    }
};

export default connect(mapStateToProps, {deleteEducation})(Education);