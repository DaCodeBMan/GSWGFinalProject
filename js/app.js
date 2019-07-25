import React from 'react';
import {render} from 'react-dom';
import NameCloud from './components/NameCloud';
import DevGatheringLogo from '../imgs/TDG_White.png';
import * as names from './names';
import '../scss/style.scss';


const App = () => {
    return (
        <div>
            <img id="TheDevGatheringLogo" src={DevGatheringLogo} alt="The DevGathering Logo"/>
            <NameCloud names={Object.values(names)}/>
            <footer id="SiteFooter"></footer>
        </div>
    );
}

render(<App/>, document.getElementById('root'));
