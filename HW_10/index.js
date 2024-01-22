//? У нас есть массив объектов:

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

//!  Task_01
//* Создайте на основе старого массива новый массив объектов по образу: \
//* [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const nonPriceCars = cars.map(({ brand, isDiesel }) => ({ brand, isDiesel }));

console.log(nonPriceCars);

//! Task_02
//* Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselCars = cars.filter((car) => car.isDiesel);

console.log(dieselCars);

//! Task_03
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const nonDieselCars = cars.filter((car) => !car.isDiesel);

console.log(nonDieselCars);

//! Task_04
//* Посчитайте общую стоимость всех машин не с дизельным двигателем.

const priceNonDieselCars = nonDieselCars.reduce(
  (total, car) => total + car.price,
  0
);

console.log(priceNonDieselCars);

//! Task_05
//* Повысьте цену всех машин в массиве на 20%.

const increasedPrices = cars.map((car) => ({ ...car, price: car.price * 1.2 }));

console.log(increasedPrices);

//! Task_06
//* Создайте новый массив, где все дизельные машины заменены на
//* { brand: "Tesla", price: 25000, isDiesel: false }

const updatedCars = cars.map((car) =>
  car.isDiesel
    ? {
        brand: "Tesla",
        price: 25000,
        isDiesel: false,
      }
    : cars
);

console.log(updatedCars);

//! Task_07
//* Управление списком задач

// У вас есть список задач, и вы хотите добавить, удалить и извлечь задачи из этого списка с использованием методов splice() и slice().
// Создайте начальный массив toDoList, который будет содержать несколько задач.
// Используя метод splice(), добавьте новую задачу в середину списка (воспользуйтесь третьим опциональным параметром) mdn
// С помощью метода slice(), создайте копию списка задач на определенный период времени (например, "Сегодняшние задачи").
// Используя метод splice(), удалите одну из задач из списка.
// Выведите в консоль исходный список задач и результаты изменений.


// Создаем начальный массив toDoList
const toDoList = [
    "Покупки в магазине",
    "Запись видеоурока",
    "Прогулка в парке",
    "Заправить машину",
    "повторить пройденный материал",
    "выполнить домашнее задание",
    "Чтение книги",
];

// Используем метод splice() для добавления новой задачи в середину списка
toDoList.splice(Math.floor(toDoList.length / 2), 0, "Новая задача");

// Используем метод slice() для создания копии списка задач
const todayTasks = toDoList.slice();

// Используем метод splice() для удаления одной задачи из списка
toDoList.splice(1, 1); // Удаляем вторую задачу (индекс 1)

// Выводим результаты в консоль
console.log("Исходный список задач:", toDoList);
console.log("результаты изменений", todayTasks);
