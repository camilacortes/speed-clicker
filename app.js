const button = document.getElementById('button');
let click = 0;
const p = document.createElement('p');

button.addEventListener('click', function(e) {
  p.innerHTML = click++;

  p.style.margin = '20px';
  p.style.color = 'red';

  document.getElementById('button-holder').appendChild(p);
});
