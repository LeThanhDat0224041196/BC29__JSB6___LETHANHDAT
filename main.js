
// Bài 1:
document.getElementById("btnSoND").onclick = function(){
    var S = 0;
    var n = 0;
    var z = "Số nguyên dương nhỏ nhất là: ";

    while(S<10000){
        n++;
        S = S+n;
    }

    document.getElementById("thongBao").innerHTML = z+n;
}

// Bài 2:
document.getElementById("tinhTong").onclick = function(){
    var x = document.getElementById("btnX").value*1;
    var n = document.getElementById("btnN").value*1;
    var t = 1;
    var s = 0;

    for(var i = 1; i<=n; i++){
        t= t * x;
        s= t + s;
    }

document.getElementById("btnThongBao").innerHTML = s;
}

// Bài 3:
document.getElementById("tinhGT").onclick = function(){
    var N = document.getElementById("btnSo").value*1;
    var T = 1;
    for(var I = 1; I<=N; I++){
        T= T*I;
    }
document.getElementById("btnThongBao1").innerHTML = T;
}