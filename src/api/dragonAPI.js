const DRAGON_BASE_URL = 'https://api.spacexdata.com/v3/dragons';

const fetchDragons = async () => {
  const res = await fetch(DRAGON_BASE_URL);
  const data = await res.json();
  const dragons = [];
  data.forEach((dragon) => dragons.push(
    {
      id: dragon.id,
      name: dragon.name,
      description: dragon.description,
      type: dragon.type,
      flickr_image: dragon.flickr_images[0],
      reserved: false,
    },
  ));
  return dragons;
};

export default fetchDragons;
