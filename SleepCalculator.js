const getSleepHours = day => {
  switch (day) {
    case 'Lunes':
    return 8;
    case 'Martes':
    return 6;
    case 'Miercoles':
    return 7;
    case 'Jueves':
    return 7;
    case 'Viernes':
    return 6;
    case 'Sabado':
    return 7;
    case 'Domingo':
    return 6;

  }
};

/**
 * en la parte de abajo se puede obviar escribir todos los dias y poner directamente las horas que se esta durmiendo cada dia como por ejemplo => 7 + 8 + 5 + 6 + 8 + 7 + 6;  con eso se obvio las horas que se escribio arriba y solo agarra las que se esta poniendo actualmente
 */


const getActualSleepHours = () => {
return getSleepHours('Lunes') + getSleepHours('Martes') + getSleepHours('Miercoles') + getSleepHours('Jueves') + getSleepHours('Viernes') + getSleepHours('Sabado') + getSleepHours('Domingo');
};

/**
 * Tambien se puede hacer de esta forma const getIdealSleepHours = idealHours => idealHours * 7  ( con eso ya no se tiene que escribir todo el return 
 * como esta abajo
 */

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

/**
 * en la parte de arriba de idealHours = 8; se puede dejar vacio y se pondria las 8 horas o diferente hora ideal para dormir diariamente en la parte de abajo como por ejemplo 
 * const idealSleepHours = getIdealSleepHours(8);
 * pero todo esta adentro de la const calculateSleepDebt con {};
 */

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours == idealSleepHours)
  {
    console.log("Has dormido la cantidad adecuada!");
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log("Estas durmiendo demasiado, aprovecha mas el tiempo");
  }
  else if(actualSleepHours < idealSleepHours) {
    console.log(`Te falta ${idealSleepHours - actualSleepHours} horas de sueno acumulado de la semana, Deberias de tomar un descanso`);
  }
  else {
    console.log("Error! Escribe correctamente");
  }
};

calculateSleepDebt();
