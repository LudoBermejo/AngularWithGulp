describe('Hello World example', function() {

	beforeEach(module('boilerApp'));

	var HelloWorldController,
		scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		HelloWorldController = $controller('SampleController', {
			$scope: scope
		});
	}));
	it('Test must get a done', function () {
		expect(scope.test).toEqual("Done!");
	});

});
