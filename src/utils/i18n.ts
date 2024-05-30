import { storage } from './store';

type Translation = Record<string, any>;
type Translations = Record<string, Translation>;

type Options =
  | {
    count?: number;
  }
  | Record<string, any>;

class I18n {
  public translations: Translations = {};
  //public locale: string = "en";
  private _locale: string = storage.get('locale') || 'en';
  private _translation: Translation = {};
  constructor(translations: Translations) {
    this.translations = translations;
  }

  set locale(value: string) {
    this._locale = value;

    // const uid = firebaseAuth().currentUser.uid;
    // firestore().doc(`users/${uid}`).update({locale:value});

    storage.set('locale', value);
  }

  get locale(): string {
    if (typeof this._locale === 'undefined') return 'en';
    return this._locale;
  }

  public t(key: string, options: Options = {}) {
    if (typeof key !== 'string') return '';
    if (typeof this.translations[this.locale] === 'undefined') {
      return key;
    }
    const formattedString= this.findFormattedString(key, options);
    if(formattedString === null){
      return key;

    }

    return this.sub(formattedString, options);
  }

  get locales() {
    const locales = Object.keys(this.translations);

    return locales;
  }

  private sub(str: string, options: Options = {}) {
    return str.replace(/%\{(\w+)\}/g, (match, key: keyof Options) => {
      if (key in options) {
        return options[key];
      }
      return match;
    });
  }
  private findFormattedString(
    key: string,
    options: Options = {}
  ): string | null {
    let formattedString: any = null;

    if (key.includes('.')) {
      const splitted = key
        .split('.')
        .filter((str) => typeof str === 'string' && str.length > 0);

      if (
        typeof splitted[0] !== 'undefined' &&
        this._translation[splitted[0]]
      ) {
        formattedString = this._translation[splitted[0]];
      }

      for (let i = 1; i < splitted.length; i++) {
        if (typeof formattedString === 'string') break;

        if (
          typeof formattedString === 'object' &&
          !Array.isArray(formattedString)
        ) {
          //Se è oggetto e NON è un array
          const splittedKey = splitted[i];

          if (
            typeof splittedKey !== 'undefined' &&
            formattedString[splittedKey]
          ) {
            formattedString = formattedString[splittedKey];
          }
        }
      }
    }

    if (typeof formattedString === 'string') {
      return formattedString;
    }

    if (
      typeof formattedString === 'object' &&
      !Array.isArray(formattedString)
    ) {
      //check for count option
    }

    if (formattedString === null) {
      if (typeof this._translation[key] === 'undefined') {
        return null;
      }

      formattedString = this._translation[key];

      if (typeof formattedString === 'object') {
        if (typeof options.count === 'number') {
          if (
            options.count === 0 &&
            typeof formattedString.zero !== 'undefined'
          ) {
            return formattedString.zero;
          }

          if (
            options.count === 1 &&
            typeof formattedString.one !== 'undefined'
          ) {
            return formattedString.one;
          }

          if (typeof formattedString.other !== 'undefined') {
            return formattedString.other;
          }
        }
      }
    }

    return formattedString;
  }
}
const i18n = new I18n({});
/* const i18n = new I18n({
      en: require("./languages/en.json"),
      it: require("./languages/it.json"),
    }); */

export default i18n;
