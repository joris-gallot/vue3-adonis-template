import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { App } from 'vue';

export default (app: App<Element>): void => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
};
