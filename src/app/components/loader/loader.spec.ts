import { LoaderManager, LoaderController } from './loader.service';

describe('service LoaderManager', () => {
    let loaderManager: LoaderManager;
    let loaderController: LoaderController;

    beforeEach(angular.mock.module('movieSearch'));

    beforeEach(inject((LoaderManager: LoaderManager, $controller: angular.IControllerService) => {
        loaderManager = LoaderManager;
        loaderController = $controller('LoaderController');
    }));

    it('should be registered', inject(() => {
        expect(loaderManager).not.toEqual(null);
    }));

    it('should start hided', inject(() => {
        expect(loaderManager.isLoading()).toBeFalsy();
    }));

    it('should add and remove the loader', inject(() => {
        loaderManager.add();
        expect(loaderManager.isLoading()).toBeTruthy();
        loaderManager.remove();
        expect(loaderManager.isLoading()).toBeFalsy();
    }));

    it('should avoid to be negative', inject(() => {
        loaderManager.add();
        loaderManager.remove();
        loaderManager.remove();
        loaderManager.add();
        expect(loaderManager.isLoading()).toBeTruthy();
    }));
});
