const textarea = document.querySelector('#the-textarea');
const button = document.querySelector('#the-button');
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

button.addEventListener('click', function (e) {
  const json = JSON.parse(textarea.value);
  // console.log(json.daily.map(e => e.dew_point));
  // console.log(json.daily.map(e => e.pressure));
  // console.log(json.daily.map(e => e.humidity));
  // console.log(json.daily.map(e => e.wind_speed));
  // console.log(json.daily.map(e => e.wind_deg));
  // console.log(json.daily.map(e => e.temp.day));
  // console.log(json.hourly.length);

  task1.innerHTML = json.daily.find(d => d.wind_deg>135 && d.wind_deg<225 && d.weather[0].main === "Clouds")?.dt;
  task2.innerHTML = Math.min(...json.daily.map(d => d.temp.max));
  task3.innerHTML = json.daily.every(d => d.pressure > 1010);
  task4.innerHTML = json.daily.reduce((s, d) => s + d.feels_like.day, 0) / json.daily.length;
  task5.innerHTML = json.hourly.filter(h => h.wind_speed > 3).length;
})