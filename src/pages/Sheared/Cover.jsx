import React from 'react';

const Cover = ({img,title}) => {
    // console.log(img)
    return (
        <div className="hero h-[700px] text-white" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" md:w-1/2  bg-black opacity-50 p-10 ">
                    <h1 className="mb-5 text-2xl md:text-5xl font-bold">{title}</h1>
                    <p className="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                
                </div>
            </div>
        </div>
    );
};

export default Cover;