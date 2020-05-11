import Character from '../app';

test('Верный ввод', () => {
  const received = new Character('Ron', 'Bowman');
  const expected = {
    name: 'Ron',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('R', 'Undead')).toThrow();
});

test('Не верный тип', () => {
  expect(() => new Character('Ron', 'Soldier')).toThrow();
});
