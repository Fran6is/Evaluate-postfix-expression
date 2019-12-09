import React from 'react';

function DisplayResult(props)
{
    return (<div >
                <textarea className="display" defaultValue={props.answer} disabled={true}></textarea>
            </div>);
}

export default DisplayResult;