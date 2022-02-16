import { App } from 'vue';
import fontAwesome from './font-awesome';
import globalComponents from './global-components';

export default {
  init: (app: App<Element>): void => {
    fontAwesome();
    globalComponents(app);
  },
};
