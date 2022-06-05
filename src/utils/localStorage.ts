export function localStorageGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e: any) {
    localStorage.removeItem(key);
  }
  return null;
}

export function localStorageSetItem(key: string, data: string): void {
  try {
    localStorage.setItem(key, data);
  } catch (e: any) {
    localStorage.removeItem(key);
  }
}

export function localStorageRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (e) {
  }
}
