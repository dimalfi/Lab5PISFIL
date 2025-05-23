const apiKey = '91df94ee0cbc295d4f9a49a26b74628a';

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Місто не знайдено');
      }
      return response.json();
    })
    .then(data => {
      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Температура: ${data.main.temp}°C</p>
        <p>Погода: ${data.weather[0].description}</p>
      `;
      document.getElementById('result').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('result').innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
