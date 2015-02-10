describe('测试todo controller', function() {
    beforeEach(module('todoApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    var $scope, controller;

    beforeEach(function() {
        $scope = {};
        controller = $controller('TodoController', { $scope: $scope });
    });

    describe('测试新增todo', function() {
        it('新增一个todo，文本框清除，列表长度为3', function() {
            $scope.todoText = 'learn gulp';
            $scope.addTodo();

            $scope.todoText.should.be.empty;
            $scope.todos.should.be.have.lengthOf(3);
        });
    });

    describe("测试剩余todo数量",function(){
        it('将$scope.todos设置为1个未完成，则当前剩余todo数量为1',function() {
            $scope.todos = [
                {text:'test use should.js', done:false}
            ];

            $scope.remaining().should.be.equal(1);
        })
    })

    describe("测试归档已完成的todo",function() {
        it("归档后当前剩余todo数量为1，text为build an angular app", function() {
            $scope.archive();
            $scope.todos.should.be.have.lengthOf(1);
            $scope.todos[0].should.be.have.property('text', 'build an angular app');
        })
    })
});