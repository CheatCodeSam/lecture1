const createEnemy = (nameOfEnemy, healthOfEnemy) => {
  return { name: nameOfEnemy, health: healthOfEnemy };
};

const killEnemies = (list) => {
  listOfEnemies.forEach((enemy) => {
    enemy.health = 0;
  });
};
const listOfEnemies = [
  createEnemy("goblin", 100),
  createEnemy("troll", 20),
  createEnemy("bear", 200),
];

killEnemies(listOfEnemies);

console.log(listOfEnemies);
