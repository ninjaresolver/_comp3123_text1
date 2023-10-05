const lowerCaseWords = (param) => {
    return new Promise((resolve, reject) => {
        if(Array.isArray(param)) {
            let result = param.filter(d => typeof d === 'string');
            resolve(result);
        } else {
            reject()
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
});