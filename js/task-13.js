function slugify(title) {
    // Пиши код ниже этой строки
    const array = title.toLowerCase().split(' ');
    
    return array.join('-');
   
    // Пиши код выше этой строки
  }

  console.log(slugify('Массивы для новичков'));
  console.log(slugify('Английский для разработчика'));
  console.log(slugify('Десять секретов JavaScript'));
  console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));