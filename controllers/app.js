// function myFuns($scope){
    // $scope sẽ luôn được xuất hiện
    // $scope.xinchao = "HI HI HA HA";
    // Sau scope thì sẽ khỏi tạo 1 biến để render ra dữ liệu
// }
// Khai báo angular js cùng với vùng mà mình sử dụng
var app = angular.module("myapp", []);
// map function  myFuns với vùng demoController
// để render dữ liệu
// app.controller("demoController", myFuns);
// viết tắt
app.controller("demoController", function($scope){
    $scope.xinchao = "HI HI HA HA";
    // hiển thị thông tinh sinh viên: ma, ten, namsinh
    $scope.maSV = "PH12345";
    $scope.tenSV = "Nguyễn Văn A";
    $scope.namSinh = 2004;
    // đối tương
    $scope.sinhVien = {
        maSV: "PH12345",
        tenSV: "Nguyễn Văn B",
        namSinh: 2000,
        tinhTrang: true
    }
    // mảng đối tượng
    $scope.sVien = [
        {
            maSV: "PH12345",
            tenSV: "Nguyễn Văn B",
            namSinh: 2000,
            tinhTrang: true 
        },
        {
            maSV: "PH12356",
            tenSV: "Nguyễn Văn C",
            namSinh: 2002,
            tinhTrang: false 
        }
    ]
})
// Khai bao 1 mang đối tượng công dân
// Ten, SDT, CMT, Nam sinh, gioitinh(1, nam ,0 nữ)
// Hiện nhưng thông tin sau
// Ten, SDT, CMT, tuoi, 
// DKNV: tuoi >= 18 và Nam => di nghia di