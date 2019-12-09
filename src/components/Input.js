import React from 'react';


function Input (props)
{
    return (
        <form className="form" onSubmit={props.handleExpression}>
            <input className="form__input" name="exp" type="text" placeholder={"Exp: " + props.value}></input>
            <button className="button" type="submit">Evaluate</button>
        </form>
    );
}
Input.defaultProps = {
    value: "2 3 1 * + 9 -"
}

export default Input;