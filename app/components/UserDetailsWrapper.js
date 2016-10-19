var React = require('react');
var PropTypes = React.PropTypes;

// THIS IS: Functional State Component

function UserDetailsWrapper(props) {
    return (
      <div className="col-sm-6">
        <p className='lead'>{props.header}</p>
        {props.children}
      </div>
    )
}

UserDetailsWrapper.propTyps = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = UserDetailsWrapper;