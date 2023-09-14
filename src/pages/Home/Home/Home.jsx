import React from 'react';
import Banner from '../Banner/Banner';
import Catagore from '../Catagore/Catagore';
import BistroBoss from '../BistroBoss/BistroBoss';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import ShefFood from '../ShefFood/ShefFood';
import Featured from '../Featured/Featured';
import Testimoneals from '../Testimoneals/Testimoneals';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagore></Catagore>
            <BistroBoss></BistroBoss>
            <Menu></Menu>
            <Contact></Contact>
            <ShefFood></ShefFood>
            <Featured></Featured>
            <Testimoneals></Testimoneals>
        </div>
    );
};

export default Home;