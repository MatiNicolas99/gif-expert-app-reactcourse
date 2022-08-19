
export const getGifs = async(category) => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const api_key = 'wVixt7n7BDbdaasWkk6EgTHqCnZ2E5wt';

    const api_fetch = await fetch(`${url}?api_key=${api_key}&q=${ category }&limit=20`)
    const { data } = await api_fetch.json() 

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(gifs)
    return gifs;
  };
