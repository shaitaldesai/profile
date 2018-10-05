import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getKarma } from '../actions/index.js';
import { getProfile } from '../actions/index.js';
import { Link } from 'react-router-dom';
// import _ from 'lodash';
import Button from '@material-ui/core/Button';
import '../styles/style.css';

// import axios from 'axios';

class Profile extends Component {
  constructor (props) {
    super (props);
    this.state= {
      profile: {
        userId: '0000',
        firstName: 'Jim',
        lastName: 'Smith',
        email: 'john.smith@smith.com',
        street: 'Johnsmith dr.',
        city: 'Smithcity',
        userState: 'Bigstate',
        zipCode: '00000',
        karma: 10
      }
    };
  }

  componentDidMount () {
    // const request = axios.get('https://u0mxny2nq6.execute-api.us-east-2.amazonaws.com/default/karma-points_get?id=1234');
    // console.log('KARMA:', request);
    // this.props.getKarma('4321');
    this.props.getProfile(5678);
  }

  render () {
    // const { firstName, lastName, email, street, city, zipCode } = this.props.userProfile;
    return (
      <div>
        <Link to="/" >Edit Profile</Link>
        <ul>
            <li>
              {this.props.karma}
            </li> 
            <li>
              {this.props.firstName}
            </li>
            <li>
              {this.props.lastName}
            </li>
            <li>
              {this.props.email}
            </li>
            <li>
              {this.props.street}
            </li>
            <li>
              {this.props.city}
            </li>
            <li>
              {this.props.userState}
            </li> 
            <li>
              {this.props.zipCode}
            </li>
        </ul>
      </div>
    )
  }

}

function mapStateToProps (state) {
  //whatever is returned will show up as props inside of Profile
  return {
    userId: state.userProfile.userId,
    firstName: state.userProfile.firstName,
    lastName: state.userProfile.lastName,
    email: state.userProfile.email,
    street: state.userProfile.street,
    city: state.userProfile.city,
    userState: state.userProfile.userState,
    zipCode: state.userProfile.zipCode,
    karma: state.userProfile.karma
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({getProfile: getProfile}, dispatch);
}


export default connect (mapStateToProps, mapDispatchToProps) (Profile);

  // export default connect (null, {getProfile})(Profile);

// export default Profile;

//proptypes





