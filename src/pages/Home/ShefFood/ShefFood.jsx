import React, { useEffect, useState } from 'react';
import Section from '../../../component/Section/Section';
import Food from './Food';

const ShefFood = () => {
    const [food,setFood] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const shefFood = data.filter(item => item.category === "salad" )
            setFood(shefFood)
        })
    },[])
    return (
        <div className='md:px-[100px]'>
            <Section
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></Section>
            <div className='grid md:grid-cols-3 gap-10 my-10'>
                {
                    food.slice(0,3).map(item =><Food
                    key={item._id}
                    item={item}
                    >
                    </Food>)
                }
            </div>
        </div>
    );
};

export default ShefFood;