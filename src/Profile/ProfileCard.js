import React from 'react';

const ProfileCard = ({avatar_url, name, login}) => {
  return (
    <div className="u-spacer--5x c-profile-card">
      <img className="c-profile--avatar" src={avatar_url} />
      <h2 className="u-spacer--4x-v">{name}</h2>
      <h3 className="u-text__gray c-profile-card__sub_heading">{login}</h3>
      <button className="c-profile-card__large_btn u-spacer--4x-v"> Edit Profile</button>
    </div>
  );
}

export default ProfileCard;
