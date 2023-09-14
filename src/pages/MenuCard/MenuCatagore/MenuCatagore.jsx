import React from 'react';
import MenuItem from '../../Sheared/MenuItem';
import Cover from '../../Sheared/Cover';
import { Link } from 'react-router-dom';

const MenuCatagore = ({ item, title, img }) => {
    return (
        <div className='my-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-16 md:px-[200px]'>
                {
                    item.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 text-black">Order Now</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCatagore;