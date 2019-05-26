// eslint-disable-next-line import/extensions
import checkHealth from '../src/js/task.js';

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Петя', health: 90 });

  expect(result).toBe('Петя is healthy');
});

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Вася', health: 50 });

  expect(result).toBe('Вася is wounded');
});

test('checkHealth ', () => {
  const result = checkHealth({ name: 'Анаксимандр', health: 10 });

  expect(result).toBe('Анаксимандр is critical');
});
