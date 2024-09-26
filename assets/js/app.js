const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//se cambian las referencias del query selector para que hagan rferencia a las clases existentes
//las variables se cambian por un nombre las significativo
const name = document.querySelector('.name');
const blogP = document.querySelector('.blog');
const locationP = document.querySelector('.location');
// se vuelve una async function para poder hacer uso de la funcion await
 async function displayUser(username) {
  // se cambian comillas simples por backticks
  
  nameP.textContent =`cargando...` ;
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nameP.textContent = `${data.name}`;
  blogP.textContent = `${data.blog}`;
  locationP.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //no existe variable n, se cambia por name
  nameP.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);