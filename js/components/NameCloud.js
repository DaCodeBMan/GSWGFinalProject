// __ _____  _______      _______ _______ _______      _______ _______ _____  _______ _______ ___ ___ __
// |  |     \|       |    |    |  |       |_     _|    |   |   |       |     \|_     _|    ___|   |   |  |
// |__|  --  |   -   |    |       |   -   | |   |      |       |   -   |  --  |_|   |_|    ___|\     /|__|
// |__|_____/|_______|    |__|____|_______| |___|      |__|_|__|_______|_____/|_______|___|     |___| |__|
// If you're seeing this far either you're very curious or very lost.. You won't need to modify
// this file to complete the exercise, return to greener-pastures (a.k.a `names.js`) 👋
import React, {useLayoutEffect, useRef} from 'react';

// const renderImgToContext = (imgURL) => (context2D, _width, _height, centerX, centerY) => {
//         let img = document.createElement('img');
//         img.src = imgURL
//         context2D.setTransform(1, 0, 0, 1, 0, 0);
//         context2D.drawImage(img, centerX - 75, centerY - 25, 150, 50);
// }

/**
 * NameTag
 */
export const NameTag = ({name}) => {
    return  <li className="js-name-tag"><a href="#">{name}</a></li>
};

/**
 *  NameCloud: A component that leverages TagCanvas to generate
 *  a neat data-viz.
 */
const NameCloud = ({names}) => {
    let nameCloudContainer = useRef(null);
    useLayoutEffect(() => {
        try {
            TagCanvas.Start('NameCloudCanvas', 'NameTags', {
                textColour: '#fff',
                outlineColour: 'rgba(0,0,0,0)',
                reverse: true,
                depth: 1,
                maxSpeed: 0.05
            });
            VanillaTilt.init(nameCloudContainer.current, {
                max: 10,
                speed: 400,
                scale: 1.2,
                glare: true,
            });
        } catch(e) {
            console.error(e);
        }

    }, names);
    let NameTags = names.map((name,i) => <NameTag name={name} key={`${name}-${i}`}/>);
    return (
        <div id="NameCloudContainer">
            <canvas id="NameCloudCanvas" width="500px" height="325px" ref={nameCloudContainer}></canvas>
            <ul id="NameTags">
                {NameTags}
            </ul>
        </div>
    );
}

export default NameCloud;
