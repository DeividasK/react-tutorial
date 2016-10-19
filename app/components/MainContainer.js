var React = require('react');
var styles = require('../styles');

// THIS IS: Functional State Component

function MainContainer(props) {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        {props.children}
      </div>
    )
}

module.exports = MainContainer;