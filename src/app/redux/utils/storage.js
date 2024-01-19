import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const isServer = typeof window !== "undefined";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = isServer ? createWebStorage("local") : createNoopStorage();

export default storage;
