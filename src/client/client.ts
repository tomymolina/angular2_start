// import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

import {App} from './app';

bootstrap(App, [
  ...ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue:'/'})
]);
