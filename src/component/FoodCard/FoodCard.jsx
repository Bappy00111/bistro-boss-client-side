import React from 'react';

const FoodCard = ({item}) => {
    const {image,name,price,recipe} = item;
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-2xl my-5">
            <figure><img src={image} /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-[#F3F3F3] border-[#BB8506] border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;