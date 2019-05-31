/**
 * Created by agros on 27.05.2019.
 */
import React, {Fragment} from 'react';
import spinner from './spinner.gif'

export default () => (
    <Fragment>
        <img
            src={spinner}
            style={{width: '200px', margin: 'auto', display: 'block'}}
            alt='Loading...'
        />
    </Fragment>
);