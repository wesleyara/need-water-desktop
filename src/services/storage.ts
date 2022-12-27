export const storageRequest = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

export const storageSet = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
