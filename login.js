function admin(){
    let nama = document.getElementById("nama").value
    
    let pw = document.getElementById("pw").value
    
    if(nama == "admin" &&  pw == "123" ) {
        alert("selamat berhasil Login");
        window.location = "index.html";
        
    }
    else{
        alert("anda gagal");
    }
}
  document.getElementById("login1").addEventListener("button",function(event){
    event.preventDefault();
    admin();
});