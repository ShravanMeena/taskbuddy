export default class LogHelper {
  /**
   * log
   */
  static log(...data) {
    if (__DEV__) {
      console.log(data);
    }
  }
}
