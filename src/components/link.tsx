import * as React from "react";
import * as ReactDOM from "react-dom";

export interface LinkProps{
    Name: string;
    ClassName: string;
    Path: string;
}

export class Link extends React.Component<LinkProps, any>{
    constructor(props:LinkProps){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.ClassName = 'Active';
    }

    render(){
        return <li role="presentation" className='{this.props.ClassName}'><a href={this.props.Path} onClick={this.handleClick}>{this.props.Name}</a></li>
    }
}