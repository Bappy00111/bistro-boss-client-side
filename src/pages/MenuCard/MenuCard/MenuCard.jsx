import React from 'react';
import Cover from '../../Sheared/Cover';
import menuImg from '../../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useHooks from '../../../Hooks/UseHooks';
import Section from '../../../component/Section/Section';
import MenuCatagore from '../MenuCatagore/MenuCatagore';



const MenuCard = () => {
    const [menu] = useHooks();
    console.log(menu)
    const dessert = menu.filter( item => item.category === 'dessert')
    const salad = menu.filter( item => item.category === 'salad')
    const pizza = menu.filter( item => item.category === 'pizza')
    const soup = menu.filter( item => item.category === 'soup')
    const offered = menu.filter( item => item.category === 'offered')
    return (
        <div>
           <Cover img={menuImg} title="OUR MENU"></Cover>
           {/* main cover */}
            <Section
            subHeading="---Don't miss---"
            heading={"TODAY'S OFFER"}
            ></Section>
            {/* offer menu */}
            <MenuCatagore item={offered}></MenuCatagore>
            {/* desert cover */}
            <MenuCatagore
            item={dessert}
            title="dessert"
            img={dessertImg}
            ></MenuCatagore>

            {/* PIZZA section */}
            <MenuCatagore
            item={pizza}
            title="PIZZA"
            img={pizzaImg}
            ></MenuCatagore>

            {/* salad section */}
            <MenuCatagore
            item={salad}
            title="SALADS"
            img={saladImg}
            ></MenuCatagore>

            {/* sub section */}
            <MenuCatagore
            item={soup}
            title="SOUP"
            img={soupImg}
            ></MenuCatagore>
            
        </div>
    );
};

export default MenuCard;