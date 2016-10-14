import * as React from "react";
import * as ReactDOM from "react-dom";
import {Header} from "./Header";

export interface ProjectsProps{

}

export class Projects extends React.Component<ProjectsProps, any>{
    render(){
        return <div><Header/><div>Projects here.</div></div>;
    }
}