import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Routes
import Index from "./routes/index.jsx";
import User from "./routes/user.jsx";
import NotFound from "./routes/not-found.jsx";

// Instead of rendering the component directly, we can use React router to
// render different components based on URL path.
// ReactDOM.render(<Index />, document.getElementById("app"));

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* exact means path needs to match the location.pathname exactly. */}
                    <Route exact path="/" component={ Index } />

                    <Route exact path="/user" component={ User } />
                    <Route exact path="/user/:user" component={ User } />

                    <Route exact path="/404" component={ NotFound } />

                    {/* A Route with no path always matches. */}
                    <Route component={ NotFound } />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
