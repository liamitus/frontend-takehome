describe('a sun-mon calendar with events on each day', function() {

  beforeEach(angular.mock.module(
    // ADD CALENDAR MODULES HERE
  ));

  var $scope, $compile;
  beforeEach(angular.mock.inject(function($rootScope, _$compile_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  afterEach(function() {
    $scope.$destroy();
  });

  var element;

  function compileElement() {
    // ADD DIRECTIVE HTML HERE
    var html = "";
    element = $compile(angular.element(html))($scope);
    element.appendTo(document.body);
    $scope.$digest();
  }

  it('should have a working test runner', function() {
    // Sanity check, feel free to remove this test
    expect(2).toEqual(2);
  });

  it('should render 4 weeks for the month feb/2015', function() {

  });

  it('should render 5 weeks for the month march/2016', function() {

  });

  it('should render 6 weeks for the month dec/2017', function() {

  });

  it('should render 31 days for the month march/2016', function() {

  });

  it('should render 1 event on 1/march/2016', function() {

  });

  it('should render 3 events on 13/march/2016 in start order', function() {

  });
});