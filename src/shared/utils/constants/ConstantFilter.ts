export class ConstantFilter {
  static LIMIT_KEY: string = 'limit';
  static DEFAULT_LIMIT: number = 10;
  static PAGE_KEY: string = 'page';
  static DEFAULT_PAGE: number = 0;

  static SORT_KEY: string = 'sort';
  static DEFAULT_SORT: string = '';

  static EQUAL_KEY: string = 'equal';
  static DEFAULT_EQUAL: null = null;

  static IN_KEY: string = 'in';
  static DEFAULT_IN: null = null;

  static DATE_KEY: string = 'date';
  static DEFAULT_DATE: null = null;

  static DOT: string = '.';
  static DATE_FORMAT: string = 'yyyy-MM-dd';
  static DATE_FORMAT_INSTANT: string = 'yyyy-MM-dd HH:mm:ss z';
}
