export const urlIsAvailable = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path)
    if (response.headers.get('content-type') === 'image/jpeg') {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (err) {
    return false;
  }
}
