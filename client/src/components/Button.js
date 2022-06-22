import React from 'react';


const Button = (props) => {
    
    // const onclick = (e) => { //e parameter gets position of the element and many other properties
    //     console.log(e)
    // }

    return <div>
             <button onClick={props.Click} style={{backgroundColor:props.color}}>
              {props.text}
             </button>
           </div>
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button;