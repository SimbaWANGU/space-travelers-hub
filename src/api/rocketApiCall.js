const api = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const response = await fetch(api);
  const results = await response.json();
  const resData = [];
  results.forEach((result) => {
    resData.push({
      id: result.id,
      rocket_name: result.rocket_name,
      description: result.description,
      flickr_image: result.flickr_images[0],
      reserved: false,
    });
  });
  return resData;
};

export default fetchRockets;
