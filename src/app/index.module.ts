/// <reference path="../../typings/index.d.ts" />
declare var angular: any;

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './pages/main/main.controller';
import { DetailController } from './pages/detail/detail.controller';
import { LoaderDirective, LoaderManager, LoaderController } from './components/loader/loader.service';
import { SearchDirective, SearchController } from './components/search/search';
import { MovieService } from '../app/components/movie/movie';

declare var malarkey: any;

module movieSearch {
  'use strict';

  angular.module('movieSearch', ['ngAnimate', 'ngMessages', 'ui.router', 'ngMaterial', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('DetailController', DetailController)
    .controller('SearchController', SearchController)
    .controller('LoaderController', LoaderController)
    .service('MovieService', MovieService)
    .service('LoaderManager', LoaderManager)
    .directive('loader', LoaderDirective)
    .directive('search', SearchDirective);
}
