const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {/* sew agrega async */
  try{ /* se añade try y catch */
    $n.textContent = 'cargando...';
  const response =  await fetch(`${usersEndpoint}/${username}`); 
  /*se define data   */
  const data = await response.json();
  console.log(data);
  $n.textContent = `${data.name}`;//cambio de comillas
  $b.textContent = `${data.blog}`; //cambio de comillas
  $l.textContent = `${data.location}`;//cambio de comillas
}catch (err) {
  handleError(err);
}

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
 $n.textContent = `Algo salió mal: ${err}`;//se coloca ; , y el $
}

displayUser('stolinski');
/* .catch(handleError) lo retiramos  */
