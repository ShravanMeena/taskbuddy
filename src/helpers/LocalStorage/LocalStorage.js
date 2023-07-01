// import AsyncStorage from '@react-native-async-storage/async-storage';

// /**
//  * Deals with the local storage of Data into AsyncStorage
//  *
//  * @class LocalStorage
//  */
// class LocalStorageHelper {
//   /**
//    * Get a single item
//    *
//    * @param {string} key
//    * @returns {Promise<String>}
//    * @memberof LocalStorage
//    */
//   async getItem(key) {
//     return AsyncStorage.getItem(`${key}`);
//   }

//   /**
//    * Save a single item
//    *
//    * @param {string} value
//    * @returns {Promise<void>}
//    * @memberof LocalStorage
//    */
//   async setItem(key, value) {
//     return AsyncStorage.setItem(`${key}`, value);
//   }

//   /**
//    * Deletes a single item
//    *
//    * @returns {Promise<void>}
//    * @memberof LocalStorage
//    */
//   async deleteItem(key) {
//     return AsyncStorage.removeItem(`${key}`);
//   }

//   /**
//    * Delete all the items(Clear local store)
//    *
//    * @returns {Promise<void>}
//    * @memberof LocalStorage
//    */
//   async clear() {
//     return AsyncStorage.getAllKeys().then(keys => {
//       AsyncStorage.multiRemove(keys);
//     });
//   }
// }

// const LocalStorage = new LocalStorageHelper();
// export default LocalStorage;
