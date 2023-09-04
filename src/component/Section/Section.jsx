import React from 'react';

const Section = ({heading,subHeading}) => {
    return (
        <div className='mb-5 md:w-3/12 text-center mx-auto my-8'>
            <p className='text-[#D99904] mb-2'>{subHeading}</p>
            <h3 className='text-3xl border-y-4 py-4'>{heading}</h3>
        </div>
        
    );
};

export default Section;