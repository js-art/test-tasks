import axios from 'axios';
export default async function generateImages() {
  try {
    const result = await axios.get(
      'https://api.thecatapi.com/v1/images/search?size=sm&mime_types=jpg&format=json&order=RANDOM&page=0&limit=1',
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'DEMO-API-KEY'
        }
      }
    );

    return result.data[0]?.url;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log('err');
    }
  }
}
