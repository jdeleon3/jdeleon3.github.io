import * as React from "react";
import * as ReactDOM from "react-dom";

export interface LinkProps{
    Name: string;
    ClassName: string;
}

export class Link extends React.Component<LinkProps, any>{
    constructor(props:LinkProps){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert('Hello, ' + this.props.Name + '!');
    }

    render(){
        return <li role="presentation" className='{this.props.ClassName}'><a href='javascript:void(0);' onClick={this.handleClick}>{this.props.Name}</a></li>
    }
}