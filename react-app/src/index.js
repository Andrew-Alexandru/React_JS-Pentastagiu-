import React from 'react';
import ReactDOM from 'react-dom';


function tick(){
 const date = new Date().toLocaleString();

 const dateElement = React.createElement('div', null, `Current date ${date}`,);
    const component = (
     <div>
        <div>Continut static</div>
        {dateElement}
     </div>
    );

    ReactDOM.render(component, document.getElementById("root"));

}

setInterval(tick, 1000);


