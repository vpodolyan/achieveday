import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const weekdaysLong = {
  // Make sure you start with the right day of the week!
  ru: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ],
  en: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
};

const weekdaysShort = {
  // Idem
  ru: ['По', 'Вт', 'Ср', 'Че', 'Пя', 'Су', 'Во'],
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
};

const months = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'ноябрь',
    'Декабрь'
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
};

const firstDayOfWeek = {
  ru: 1,
  en: 0
};

export const localeUtils = {
  formatDay: (d, locale = 'ru') =>
    `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${
      months[locale][d.getMonth()]
    } ${d.getFullYear()}`,
  formatWeekdayShort: (index, locale = 'ru') => weekdaysShort[locale][index],
  formatWeekdayLong: (index, locale = 'ru') => weekdaysLong[locale][index],
  getFirstDayOfWeek: (locale) => firstDayOfWeek[locale],
  getMonths: (locale) => months[locale],
  formatMonthTitle: (d, locale) =>
    `${months[locale][d.getMonth()]} ${d.getFullYear()}`
};

// Localizations are split into namespaces for futher using as backend loaded
const translation = require('../../assets/locales/en/translation.json');
const common = require('../../assets/locales/en/common.json');
const achievements = require('../../assets/locales/en/achievements.json');
const favouriteQuotes = require('../../assets/locales/en/favouriteQuotes.json');

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation,
      common,
      achievements,
      favouriteQuotes
    }
  },
  react: {
    wait: true,
    useSuspense: false
  }
});

export default i18n;
