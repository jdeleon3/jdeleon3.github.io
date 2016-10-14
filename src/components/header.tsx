import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "./link";
import * as Router from "react-router";

export interface HeaderProps{

}

export class Header extends React.Component<HeaderProps, any>{
    render(){
        return <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <Link Name='About' ClassName="active" Path="" /> 
                        <Link Name='Resume' ClassName='' Path="/resume" /> 
                        <Link Name='Projects' ClassName='' Path="/Projects" /> 
                        <Link Name='Contact Me' ClassName='' Path="/contactme"/>
                    </ul>
                </div>
               </nav>;
    }
}