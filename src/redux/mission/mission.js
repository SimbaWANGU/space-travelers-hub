import axios from 'axios';

const MISSION_ADDED = 'react-app/redux/MISSION_ADDED';
const MISSION_FAILURE = 'react-app/redux/MISSION_FAILURE';

const AddMission = (mission) => ({
  type: MISSION_ADDED,
  payload: mission,
});

export const fetchMission = () => (dispatch) => axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => {
    console.log(response.data);
    return dispatch(AddMission(response.data));
  })
  .catch((err) => dispatch({ type: MISSION_FAILURE, err }));

const InitialState = { missions: [] };

const MissionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case MISSION_ADDED:
      return { ...state, missions: action.payload };
    default:
      return state;
  }
};

export default MissionReducer;
