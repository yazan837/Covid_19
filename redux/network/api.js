import reactotron from 'reactotron-react-native';

export const URL = 'https://api.covid19api.com/';

const request = async (method,endpoint, body) => {
  const url = `${URL}${endpoint}`;

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
     
      return {
        networkSuccess: 200,
        data: res.Countries,
      };
    })
    .catch(e => ({networkSuccess: false}));
};

export {request};
