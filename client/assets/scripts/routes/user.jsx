import React from "react";
import { Link } from "react-router-dom";

import Header from "../react-components/header.jsx";
import Footer from "../react-components/footer.jsx";

class User extends React.Component {
	render() {
		return (
			<div>
				<Header></Header>
				<h1>User: { this.props.match !== undefined ? this.props.match.params.user : null }</h1>
				<ul>
					<li><a><Link to="/user/zico">Zico</Link></a></li>
					<li><a><Link to="/user/daniel">Daniel</Link></a></li>
				</ul>
				<Footer></Footer>
			</div>
		)
	}
}

export default User;