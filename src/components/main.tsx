import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./Header";
export interface MainProps{

}

export class Main extends React.Component<MainProps, any>{
    render(){
        return <div><Header/><div>About me!</div></div>;
    }
}