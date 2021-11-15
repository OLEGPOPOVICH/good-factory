import { startCase } from 'lodash';
import $ from 'jquery';

export class Utils {
  static isString(val) {
    return typeof val == "string" || (typeof val == "object" && val.constructor === String);
  }

  static isArray(val) {
    return  Array.isArray(val);
  }

  static startCase(val) {
    return startCase(val);
  }

  static slideDown(selector) {
    $(selector).slideDown();
  }

  static slideUp(selector) {
    $(selector).slideUp();
  }
};