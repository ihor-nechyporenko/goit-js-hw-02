function getExtremeElements(array) {
    // Пиши код ниже этой строки
  	const firstElement = array[0];
  	const lastElement = array[array.length - 1];
  	const extremeElements = [firstElement, lastElement];

  	return extremeElements;
    // Пиши код выше этой строки
  }

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));