export function useLocalStorage() {
  function getItem(key) {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    } else {
      return null;
    }
  }

  function setItem(key, value) {
    const newValue = value;
    localStorage.setItem(key, newValue);
  }

  return {
    getItem,
    setItem,
  };
}
