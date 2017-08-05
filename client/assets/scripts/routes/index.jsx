import React from "react";
import {Link} from "react-router-dom";

import Header from "../react-components/header.jsx";
import Footer from "../react-components/footer.jsx";

class Index extends React.Component {
	render() {
		return (
			<div>
				<Header></Header>
				<h1>Home</h1>
				<ul>
					<li><a><Link to="/user">User</Link></a></li>
					<li><a><Link to="/404">404</Link></a></li>
					<li><a><Link to="/foo">Foo</Link></a></li>
				</ul>
				<Footer></Footer>
			</div>
		)
	}
}

export default Index;