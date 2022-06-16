import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reverseDragonAction } from '../redux/dragons/dragon';
import DragonContainer from '../components/DragonsContainer';

export default function Dragonsdisplay() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reverseDragonAction(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
    <div>
      <div className="dragons-container">
        {dragons.map((dragon) => (
          <DragonContainer
            id={dragon.id}
            name={dragon.name}
            description={dragon.description}
            type={dragon.type}
            image={dragon.flickr_image}
            key={dragon.id}
            handleReserve={() => handleReserve(dragon.id)}
            handleCancel={() => handleCancel(dragon.id)}
            reserved={dragon.reserved}
          />
        ))}
      </div>
    </div>

  );
}
