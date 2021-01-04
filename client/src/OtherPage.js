import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
    return (
        <>
            I am other page!
            <Link to="/">Go back home</Link>
        </>
    );
};

export default OtherPage;
