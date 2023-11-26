// Оголошення стрілочної функції getTotalBalanceByGender
const getTotalBalanceByGender = (users, gender) => {
  // Використання методу filter для відбору користувачів за статтю
  // Використання методу reduce для підрахунку загального балансу
  return users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

// Тестові дані
const allUsers = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

// Виклики функції з тестовими даними та виведення результату в консоль
console.log(getTotalBalanceByGender(allUsers, 'male')); // 12053

console.log(getTotalBalanceByGender(allUsers, 'female')); // 8863
