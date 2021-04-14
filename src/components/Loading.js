import React, { PureComponent }            from "react";
import PropTypes                           from 'prop-types';
// import Typed                               from 'typed.js';


class Loading extends PureComponent {
    
    componentDidMount() {
        // const speed = this.props.speed || 90;
        // this.typed = new Typed(this.$loading, {
        //   strings: [this.props.message],
        //   typeSpeed: parseInt(speed)
        // });
        function fadeIn(el) {
            el.style.opacity = 0;
          
            var last = +new Date();
            var tick = function() {
              el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
              last = +new Date();
          
              if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
              }
            };
          
            tick();
          }
        fadeIn(this.$loading);
    }
    componentWillUnmount() {
        //this.typed.destroy();
    }
    render() {
        return (<div className="loader" ref={el => this.$loading = el} ></div>);
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired,
    speed: PropTypes.number
};

export default Loading;
