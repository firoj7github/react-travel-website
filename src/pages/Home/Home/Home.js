import React from 'react';
import Banner from '../Banner/Banner';
import Detail from '../Detail/Detail';
import Main from '../Main/Main';
import Package from '../Package/Package';
import Service from '../Service/Service';
import Show from '../Show/Show';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Main></Main>
            <Detail></Detail>
            <Show></Show>
            <Service></Service>
            <Package></Package>
          
        </div>
    );
};

export default Home;