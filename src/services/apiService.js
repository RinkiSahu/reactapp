// src/services/apiService.js

const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const username = 'coalition';
const password = 'skills-test';

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export const fetchData = () => {
  return fetch(url, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data: ' + error.message);
      throw error;
    });
};
