function calculateTotal(number) {
    // Пиши код ниже этой строки
    let sum = 0;
    
    for (let i = 0; i <= number; i += 1) {
        sum += i
    }
  
    return sum;
    // Пиши код выше этой строки
  }
  
  console.log(calculateTotal(1));
  console.log(calculateTotal(3));
  console.log(calculateTotal(7));
  console.log(calculateTotal(18));
  console.log(calculateTotal(24));
  