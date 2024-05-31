import { Colors, Theme } from '../hooks/useStyles';
import deepMerge, { DeepPartial } from './deepMerge';
import Store from './store';

type Config = {
  themes: Record<string, Theme>;
  colors: Colors;
  onChangeTheme?: (theme:string)=> void;
};
//Create a deep partial type

class ConfigClass {
  private _store: Store = new Store('expo-helpers-config-store');
  private config: Config = {
    themes: {
      light: {
        isDark: false,
        text: '#000',
        card: '#f5f5f7',
        background: '#FFFFFF',
        border: '#efeff4',
      },
      dark: {
        isDark: true,
        text: '#fff',
        card: '#000000',
        background: '#161618',
        border: '#212124',
      },
      fancy: {
        isDark: false,
        text: 'green',
        card: 'yellow',
        background: 'blue',
        border: 'tomato',
        primary: 'gray',
      },
    },
    colors: {
      primary: '#0074E4',
      secondary: '#7D53DE',
      success: '#4cd964',
      danger: '#FF3B30',
      info: '#006ee6',
      link: '#0000EE',
      warning: '#ffcc00',
      gray: '#9C9C9C',
    },
  };
  constructor() {}
  public getProperty<K extends keyof Config>(key: K): Config[K] {
    if (typeof this.config[key] === 'undefined') {
      throw Error('Key not exists');
    }

    return this.config[key];
  }
  public init(config: DeepPartial<Config>) {
    this.config = deepMerge(this.config, config);
  }
  get store() {
    return this._store;
  }
}

const config = new ConfigClass();

export default config;
