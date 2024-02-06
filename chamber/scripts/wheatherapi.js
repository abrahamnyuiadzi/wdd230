const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

const myKey ="649c3f5f1138c0cfaec49401979f1746"
const myLat ="6.138282"
const myLong ="1.253895"

const myURL =  '//api.openweathermap.org/data/2.5/weather?lat{myLat}&lon=${myLong}&appid=${myKey}$units=imperial '   
  



async function apiFetch(myURL) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      // displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
function displayResults(data){
  console.log('hello')
  myTown.innerHTLM =data.name 
  myDescription.innerHTML= data.weather[0].myDescription
  myTemperature.innerHTML='${data.main.temp}$deg;F'
  const iconsrc= 'https://api.openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'
  myGraphic.setAttribute('SRC', iconsrc);
  myGraphic.setAttribute('alt',data.weather[0].description)
}

apiFetch();