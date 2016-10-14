import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./Header";
export interface ResumeProps{

}

export class Resume extends React.Component<ResumeProps, any>{
    render(){
        return <div><Header/><div>Resume here!</div></div>;
    }
}