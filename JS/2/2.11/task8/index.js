if (-1 || 0) alert('first'); // Выполнится -1 || 0 = -1, true
if (-1 && 0) alert('second'); //Не выполнится -1 && 0 = 0, false
if (null || -1 && 1) alert('third'); // Выполнится null || -1 && 1  ->  null || 1  ->  1

