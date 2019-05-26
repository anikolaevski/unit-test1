// eslint-disable-next-line import/extensions
import checkHealth from './task.js';

const Petya = { name: 'Петя', health: 90 };
const Vasya = { name: 'Вася', health: 50 };
const Alex = { name: 'Анаксимандр', health: 10 };

// eslint-disable-next-line no-console
console.log('app.js bundled');
// eslint-disable-next-line no-console
console.log(checkHealth(Petya));
// eslint-disable-next-line no-console
console.log(checkHealth(Vasya));
// eslint-disable-next-line no-console
console.log(checkHealth(Alex));
