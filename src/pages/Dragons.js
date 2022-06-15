import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragonAction, reverseDragonAction } from '../redux/dragons/dragon';
import DragonContainer from '../components/DragonsContainer';
import fetchDragons from '../api/dragonAPI';

export default function Dragonsdisplay() {
  const dragons = useSelector((state) => state.dragons);
  console.log(dragons[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function data() {
      const dragons = await fetchDragons();
      dispatch(dragonAction(dragons));
    }
    data();
  }, []);
  const handleReserve = (id) => {
    dispatch(reverseDragonAction(id));
    console.log(id);
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
          />
        ))}
      </div>
    </div>

  );
}

// export Dragons;
