import React from 'react';

const ReactFormLabel = (props) => (
    <label htmlFor={props.htmlFor} style={{color:'grey',fontWeight:'600', textTransform:'uppercase', fontSize:'.8em'}}>{props.title}</label>
)

export default ReactFormLabel;