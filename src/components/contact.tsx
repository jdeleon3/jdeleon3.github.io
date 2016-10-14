import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./Header";

export interface ContactProps{

}

export class Contact extends React.Component<ContactProps, any>{
    render(){
        return <div><Header/><div>Contact Me</div></div>;
    }
}