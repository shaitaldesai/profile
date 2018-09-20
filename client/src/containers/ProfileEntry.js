import React from 'react';

export default ProfilePage = (props) => {
  return (
    <div>
      {props.profileKey}
      <li>
        {props.profileValue}
      </li>
    </div>
  )
}

//proptypes