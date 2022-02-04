export const urlIsAvailable = (path : string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(path)
      if (response.headers.get('content-type') === 'image/jpeg') {
        resolve(true);
      } else {
        reject(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};