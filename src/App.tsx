import React from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion.";
import OnOff from "./components/Buttons/Buttons";


function App() {
    return (
        <div>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            <OnOff />
            <OnOff />

            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            {/*/!*Article 2*!/*/}

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props:PageTitlePropsType) {
//     return <h1><b>{props.title}</b></h1>
// }

export default App;
