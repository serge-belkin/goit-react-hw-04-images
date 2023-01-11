import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImage = async (inputValue, pageNr) => {
  const response = await axios.get(`/?q=${inputValue}&page=${pageNr}&key=31325871-0cde844d39520f6c11f9b55e1&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};

