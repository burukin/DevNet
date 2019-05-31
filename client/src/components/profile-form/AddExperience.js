/**
 * Created by agros on 28.05.2019.
 */
import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {addExperience} from '../../actions/profile';

const AddExperience = ({addExperience, history}) => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [currentJob, setCurrentJob] = useState(false);
    
    let {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = formData;
    
    const onFormSubmit = e => {
        e.preventDefault();
        
        addExperience(formData, history);
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
                Add An Experience
            </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onFormSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="* Job Title" name="title" onChange={e => onInputChange(e)} value={title} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Company" name="company" onChange={e => onInputChange(e)} value={company} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" onChange={e => onInputChange(e)} value={location} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" onChange={e => onInputChange(e)} value={from} />
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="current" onChange={() => {
                    setCurrentJob(!currentJob);
                    setFormData({...formData, current: !current});
                    }}
                    value={current} />Current Job</p>
                </div>
                {!currentJob && toDate}
                <div className="form-group">
          <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              value={description}
              onChange={e => onInputChange(e)}
          ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    );
};

AddExperience.propTypes = {
    addExperience: Proptypes.func.isRequired
};

export default connect(null, {addExperience})(withRouter(AddExperience));