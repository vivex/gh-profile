import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


import Tabs from '../Common/Tabs';
import ProjectCard from "./ProjectCard";
import ProfileCard from './ProfileCard';

const Profile = (props) => {
  let { userName } = useParams();
  const [userProfile, setUserProfile] = useState({status: 'PENDING', data: null});

  useEffect(async () => {
    try {
      let response = await fetch(`https://api.github.com/users/${userName}`);
      let user = await response.json();
      console.log('user', user);
      setUserProfile({status: 'SUCCESS', data: user});
    } catch (e) {
      setUserProfile({status: 'ERROR', data: e});
    }
  }, [userName]);
  const tabs = [{name: 'OverView'}, {name: 'Repositories'}, {name: 'Projects'}]
  return (
    <div className="container container--fluid">
      {
        userProfile.status === 'SUCCESS' ?
          (
            <div className="container__row">
              <div className="container__col-md-3 container__col-sm-12">
                <ProfileCard {...userProfile.data}/>
              </div>
              <div className="container__col-md-9 container__col-sm-12">
                <div className="u-spacer--5x">
                  <Tabs
                    tabs = {tabs}
                  />
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                </div>
              </div>
            </div>
          ) : <p>Loading....</p>
      }

    </div>
  )
};

export default Profile;
