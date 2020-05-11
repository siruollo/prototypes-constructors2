function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Ошибка. Допускаются только имена длиной от 2 символов и не более 10');
  } else if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
    throw new Error('Ошибка. Допускаются только персонажи типа: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  } else {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman' || type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}

export default Character;
