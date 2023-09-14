import React, { useState } from 'react';
import orderImg from '../../../assets/shop/order.jpg'
import Cover from '../../Sheared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHooks from '../../../Hooks/UseHooks';
import FoodCard from '../../../component/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categores = ['salad','dessert','pizza','soup','drinks']
    const {categore} = useParams();
    const initialIndex = categores.indexOf(categore)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useHooks();
    
  
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={orderImg} title={'ORDER FOOD'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab
                        item={salad}
                    ></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab
                        item={dessert}
                    ></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab
                        item={pizza}
                    ></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab
                        item={soup}
                    ></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab
                        item={drinks}
                    ></OrderTab>
                </TabPanel>

                
            </Tabs>
        </div>
    );
};

export default Order;