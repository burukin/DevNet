/**
 * Created by agros on 24.05.2019.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({alerts}) => {
    let alertArr = null;
    if(alerts !== null && alerts.length >0) {
        alertArr = alerts.map(alert => {
            return (
                <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                    {alert.msg}
                </div>
            )
        })
    }
    return alertArr;
};

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        alerts: state.alert
    }
};

export default connect(mapStateToProps)(Alert);