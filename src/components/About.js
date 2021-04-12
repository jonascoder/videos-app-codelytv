import {Component}         from "react";
import PropTypes           from 'prop-types';


class About extends Component{
	render(){
		return ('Esta Application forma parte de la genial formación que estoy recibiendo en CodelyTv, mi nombre és Jonàs Rodon y me apasiona en desarrollo web :-)');
	}
}

About.propTypes = {
	data: PropTypes.object.isRequired
};

export default About;