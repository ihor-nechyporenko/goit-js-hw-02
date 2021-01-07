function findLongestWord(string) {
    // Пиши код ниже этой строки
    const arrayOfWords = string.split(' ');
    let longestWord = arrayOfWords[0];
    
    for (let i = 0; i < arrayOfWords.length; i += 1) {
        let array = arrayOfWords[i].split('');

        if (array.length > longestWord.length) {
           longestWord = arrayOfWords[i];
        }
      
        continue;
    }
    
    return longestWord;
    // Пиши код выше этой строки
  }
  
  console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'));
  console.log(findLongestWord('Google do a roll'));
  console.log(findLongestWord('May the force be with you'));