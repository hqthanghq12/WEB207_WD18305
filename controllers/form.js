let app = angular.module("myApp", []);
app.controller("myController", function($scope){
    // $scope.hi = "Xin chào";
    // $scope.name = "Nguyễn Văn A";
    // Để mặc định dữ liệu checkbox là sai
    $scope.input = {
        danhSach:{
            All: false,
            A: false,
            B: false,
            C: false
        }
    }
    $scope.input.select = "1";
    // Mảng đối tượng danh mục
    $scope.danhMuc = [
        {
            id:"1",
            name:"Bia"
        },
        {
            id:"2",
            name:"Nước ngọt"
        },
        {
            id:"3",
            name:"Bánh"
        }
    ]
    $scope.dmID = "1";
    // $scope.danhMucID.id = 1;
    $scope.submit = function(){
        // console.log($scope.name);
        console.log($scope.input.name);
        // Nhập vào 2 số a,b 
        // Hiện ra tông hiệu tích thương=> tự làm
        // input radio
        console.log($scope.input.gender);
        console.log($scope.danhSach);
        console.log($scope.input.select);
        console.log($scope.input);
        console.log($scope.dmID);
        console.log($scope.danhMucID);
        console.log($scope.danhMucID.id);
    }
});