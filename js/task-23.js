function filterArray(numbers, value) {
    // Пиши код ниже этой строки
    const resultArray = [];
    
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
        resultArray.push(numbers[i]); 
      }
      
      continue;
    }
  
      return resultArray;
    // Пиши код выше этой строки
  }
  
  console.log(filterArray([1, 2, 3, 4, 5], 3));
  console.log(filterArray([1, 2, 3, 4, 5], 4));
  console.log(filterArray([1, 2, 3, 4, 5], 5));
  console.log(filterArray([12, 24, 8, 41, 76], 38));
  console.log(filterArray([12, 24, 8, 41, 76], 20));