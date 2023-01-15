import './style.css'
import  store from './reducer';

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const value = document.getElementById('value');

nextButton?.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

prevButton?.addEventListener('click', () => {
  store.dispatch({ type: 'PREV_COLOR' });
});

const render = () => {
  const { colors, index } = store.getState();
  document.body.style.backgroundColor = colors[index];
  if(value) value.textContent = colors[index];
};

store.subscribe(render);
