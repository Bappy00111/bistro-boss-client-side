import React, { useEffect, useState } from 'react';
import Section from '../../../component/Section/Section';
import MenuItem from '../../Sheared/MenuItem';
import useHooks from '../../../Hooks/UseHooks';

const Menu = () => {
  const [menu] = useHooks();
  console.log(menu)
  const popular = menu.filter( item => item.category === 'popular')
  // const [menu, setMenu] = useState([])
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       const popularItem = data.filter(item => item.category === "popular")
  //       setMenu(popularItem)
  //     })
  // }, [])
  return (
    <div className='md:px-[100px] my-10 md:block px-5'>
      <Section
        subHeading={'---Check it out---'}
        heading={'FROM OUR MENU'}
      ></Section>
      <div className='grid md:grid-cols-2 gap-10'>
        {
          popular.map(item => <MenuItem
            item={item}
            key={item._id}
          ></MenuItem>)
        }
      </div>
      <div className='text-center'>
        <button className="btn btn-outline border-0 border-b-4 black ">View Full  Menu</button>
      </div>

    </div>
  );
};

export default Menu;