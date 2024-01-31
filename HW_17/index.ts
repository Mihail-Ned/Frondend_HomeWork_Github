//* Задание 1 *дополнительно
// В отдельном файле ts создайте interface Airplane - самолет с полями:

// numberOfEngines - количество двигателей
// isJet - реактивный
// maxHeight - максимальная высота полета
// capacity - опциональное поле вместимость
// Создайте несколько переменных типа Airplane.


interface Airplane {
    numberOfEngines: number;
    isJet: boolean;
    maxHeight: number;
    capacity?: number;
  }
  
  // Примеры переменных типа Airplane
  const airplane1: Airplane = {
    numberOfEngines: 2,
    isJet: true,
    maxHeight: 40000,
    capacity: 200
  };
  
  const airplane2: Airplane = {
    numberOfEngines: 4,
    isJet: false,
    maxHeight: 35000
  };
  
  const airplane3: Airplane = {
    numberOfEngines: 1,
    isJet: true,
    maxHeight: 45000,
    capacity: 150
  };

  const airplaneArr: Airplane[] = [
    airplane1,
    airplane2,
    airplane3,
  ]

  console.log("airplane4", airplaneArr)


  //console.log( airplane1, airplane2, airplane3)
  
  