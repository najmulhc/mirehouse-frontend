import React from 'react';
import notFound from '../../img/404.png'
const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;