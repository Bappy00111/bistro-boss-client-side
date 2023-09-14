import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className=' md:px-[100px] my-10'>
            <div className='flex justify-center items-center'>
                <img className='relative' src={img} alt="" />
                <div className='md:block hidden text-center w-[150px] md:w-1/3 md:p-10 bg-white absolute'>
                    <h3 className='md:text-4xl uppercase mb-2'>Bistro Boss</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>

        </div>
    );
};

export default BistroBoss;