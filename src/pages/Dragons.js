import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { cancelReservation, reverseDragonAction } from '../redux/dragons/dragon';
import DragonContainer from '../components/DragonsContainer';

export default function Dragonsdisplay() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  const toastDisplay = (message) => {
    toast.success(message, {
      style: {
        border: '1px solid blue',
        padding: '16px',
        color: 'blue',
      },
      iconTheme: {
        primary: 'blue',
        secondary: '#FFFAEE',
      },
    });
  };

  const handleReserve = (id, name) => {
    dispatch(reverseDragonAction(id));
    toastDisplay(`${name} has been reserved`);
  };

  const handleCancel = (id, name) => {
    dispatch(cancelReservation(id));
    toastDisplay(`${name} reservation has been Cancelled`);
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
            handleReserve={() => handleReserve(dragon.id, dragon.name)}
            handleCancel={() => handleCancel(dragon.id, dragon.name)}
            reserved={dragon.reserved}
            toastDisplay={toastDisplay}
          />
        ))}
      </div>
    </div>

  );
}
