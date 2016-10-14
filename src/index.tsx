import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route,IndexRoute} from "react-router";
import * as ReactRouter from "react-router";

import {Main} from "./components/Main";
import {Resume} from "./components/resume";
import {Projects} from "./components/projects";
import {Contact} from "./components/contact";
import { createHashHistory } from "history";

var browserHistory = ReactRouter.browserHistory;
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main} />        
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contactme" component={Contact}/>
    </Router>, 
    document.getElementById('root')
    );