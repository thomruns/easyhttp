/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 1.0.0
 * @author T David
 * @license MIT
 * 
 * 
 **/

class EasyHTTP {
  // Make HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }); 
  }

  // Make HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }); 
  }
}