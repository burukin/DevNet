/**
 * Created by agros on 03.06.2019.
 */
import React, {useEffect, useState} from 'react';

const asyncComponent = importComponent => {
    return (props) => {
        const [C, setComponent] = useState(null);

        useEffect( ()=> {
            importComponent()
                .then(cmp => {
                    setComponent(cmp.default);
            });
        }, []);

        return C ? <C {...props} /> : null;
    }
};

export default asyncComponent;