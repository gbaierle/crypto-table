import axios from 'axios';

var config = {
  method: 'get',
  url: 'https://api.coinstats.app/public/v1/coins?skip=0',
  headers: {}
};

const http = axios.create({});

class CoinService {
  getCoins() {
    return http.get(config.url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default new CoinService();
