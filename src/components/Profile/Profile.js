import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const allMissions = useSelector((state) => state.missions);
  const dragons = useSelector((state) => state.dragons);
  const bookedDragons = dragons.filter((dragons) => {
    if (dragons.reserved === true) {
      return dragons;
    }
    return null;
  });
  const allrockets = useSelector((state) => state.rockets);

  const missionsJoined = allMissions.filter((mission) => {
    if (mission.status === true) {
      return mission;
    }
    return null;
  });

  const rocketsReserved = allrockets.filter((rocket) => {
    if (rocket.reserved === true) {
      return rocket;
    }
    return null;
  });

  return (
    <div className="container">
      <div className="my-profile">
        <section>
          <h2>My Missions</h2>
          <ul>
            {
              missionsJoined.map((mission) => (
                <li key={mission.mission_id}>
                  {mission.mission_name}
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2>My Rockets</h2>
          <ul>
            {
              rocketsReserved.map((rocket) => (
                <li key={rocket.id}>
                  {rocket.rocket_name}
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2>My Dragons</h2>
          <ul>
            {
              bookedDragons.map((dragon) => (
                <li key={dragon.id}>
                  {dragon.name}
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
