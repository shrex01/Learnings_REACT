import React from 'react';
import ReactDOM from 'react-dom/client';

//using JSX to render
const heading = <h1>Namaste React 🚀</h1> 
//Babel will convert jsx to React.creatElement (ECMA SCRIPT) so that JS engine can understand it



const Heading2 = <h1>namaste React2</h1> //REACT ELEMENT

const Heading3 =()=>{  //REACT FUNCTIONAL COMPONENT
    return(
        <h1>namaste React2</h1>
    );
}

//ACHIEVING NESTING INSIDE REACT FUNCTIONAL COMPONENTS
const Title =()=>{                             //REACT COMPONENT (functional)
    return( <h1>TITLE</h1>);
}

const Element = <h1>react element rendered</h1> //REACT ELEMENT 

const Body1 = () =>{
    //COMPONENT COMPOSITION: 
    //(Components composing of eachother || components inside one another || components containing other components)
    return(
    <div>
        {Element} {/*Rendering react element*/}

        {/* the below 3 all mean the same */}
            {Title()}
            <Title/>
            <Title></Title> {/*Rendering React components */}
        {/* --------------------------------- */}
        <h1>Body of Body1</h1>
    </div>);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body1/>) //babel understands rendering components as a tag not as function name
