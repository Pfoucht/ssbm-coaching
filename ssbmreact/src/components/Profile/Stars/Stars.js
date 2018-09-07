import React from 'react';
import { FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const stars = (props) => (
    <IconContext.Provider value={{color: '#550fff', size: '.85rem'}}>
        <div>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
    </IconContext.Provider>
);

export default stars;