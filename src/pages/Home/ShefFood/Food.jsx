import React from 'react';

const Food = ({ item }) => {
    console.log(item)
    const { category, image, recipe } = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-10">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center px-10">
                <h2 className="card-title text-3xl">{category}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn bg-[#1F2937] text-white uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Food;