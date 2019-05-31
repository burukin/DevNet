/**
 * Created by agros on 28.05.2019.
 */
import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {addEducation} from '../../actions/profile';

const AddEducation = ({addEducation, history}) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [currentSchool, setCurrentSchool] = useState(false);

    let {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = formData;

    const onFormSubmit = e => {
        e.preventDefault();

        addEducation(formData, history);
    };

    const onInputChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const toDate = (
        <div className="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" onChange={e => onInputChange(e)} value={to} />
        </div>
    );

    return (
        <Fragment>
            <h1 className="large text-primary">
                Add Your Education
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any school, bootcamp, etc that
                you have attended
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onFormSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* School or Bootcamp" name="school" onChange={e => onInputChange(e)} value={school} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Degree or Certificate" name="degree" onChange={e => onInputChange(e)} value={degree} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Field Of Study" name="fieldofstudy" onChange={e => onInputChange(e)} value={fieldofstudy} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" onChange={e => onInputChange(e)} value={from} />
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="current" onChange={() => {
                    setCurrentSchool(!currentSchool);
                    setFormData({...formData, current: !current});
                    }}
                              value={current} />  Current School or Bootcamp</p>
                </div>
                {!currentSchool && toDate}
                <div className="form-group">
          <textarea name="description" cols="30" rows="5" placeholder="Program Description" value={description} onChange={e => onInputChange(e)}></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    );
};

AddEducation.propTypes = {
    addEducation: Proptypes.func.isRequired
};

export default connect(null, {addEducation})(withRouter(AddEducation));