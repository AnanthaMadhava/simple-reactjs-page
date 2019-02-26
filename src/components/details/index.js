import React from 'react';
import Header from '../Header/Header';
import LearnerData from './LearnerData';
import MentorData from './MentorData';

const Details = () => {
    return (
        <div>
            <Header /> 
             <LearnerData/> 
             <MentorData />
        </div>
    );
};

export default Details;