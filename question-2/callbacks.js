const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' }
        console.log(success)
    }, 500);
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.log(e)
        }
    }, 500);
}


delayedSuccess();
delayedException();

const resolvePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
        resolve();
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error('error: delayed exception!');
        } catch (e) {
          reject(e); // Pass the error object to the reject function
        }
      }, 500);
    });
  };
  
  resolvePromise();
  rejectedPromise();