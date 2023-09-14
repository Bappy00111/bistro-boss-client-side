import React from 'react';
import Section from '../../../component/Section/Section';
import featured from '../../../assets/home/featured.jpg'
import './Feature.css'

const Featured = () => {
    return (
        <div className='my-10 feature-item bg-fixed text-white pt-5'>
            <Section
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></Section>
            <div className='md:flex md:gap-10 items-center md:py-20 md:px-40 bg-slate-500
            opacity-80'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='space-y-2 md:block p-5'>
                    <h3 className='uppercase'>March 20, 2023 <br />
                    WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;