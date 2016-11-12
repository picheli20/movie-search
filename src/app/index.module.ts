/// <reference path="../../typings/index.d.ts" />
declare var angular: any;

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';
import { MovieService } from '../app/components/movie/movie';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module movieSearch {
  'use strict';

  angular.module('movieSearch', ['ngAnimate', 'ngMessages', 'ui.router', 'ngMaterial', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .service('MovieService', MovieService)
    .directive('acmeMalarkey', acmeMalarkey);
}
