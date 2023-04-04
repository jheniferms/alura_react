import React from "react";
import style from './button.module.scss';

class Button extends React.Component<{label:string}> {
    render() {
        return (
            <button className={style.botao}>{this.props.label}</button>
        )
    }
}

export default Button;