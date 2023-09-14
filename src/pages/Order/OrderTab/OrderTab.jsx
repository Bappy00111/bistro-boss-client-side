import React from 'react';
import FoodCard from '../../../component/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;