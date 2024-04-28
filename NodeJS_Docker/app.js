const axios = require('axios');

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=RSrz2gQmnI1oixIifY0ODeDJqx0ZLN6YzUf16fZy';

async function fetchImageOfTheDay() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function displayImageOfTheDay() {
  const data = await fetchImageOfTheDay();
  if (data) {
    console.log('NASA Astronomy Picture of the Day (APOD)');
    console.log('----------------------------------------');
    console.log('Title:', data.title);
    console.log('Date:', data.date);
    console.log('Explanation:', data.explanation);
    console.log('URL:', data.url);
  }
}

displayImageOfTheDay();
