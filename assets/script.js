async function maubucin(){
    await swals.fire({
        title: 
                '<strong>Mau bikin Script HTML Bucin seperti ini?</strong>',
        html:
                'Lihat tutorialnya di: ' +
                '<a href="https://youtu.be/FtFSAzrpFNc">Klik di Sini!</a> ' +
                '<br><br>' + 'Bisa diedit kata-kata sesukamu!',
        focusConfirm: false,
    });
}

function tunjukkan(){
    document.getElementById("sticky-ad").style = "bottom: 0px";
}

function hilangkan(){
    document.getElementById("sticky-ad").style = "bottom: -130px";
}

function showDiv(){
    Content.style = "opacity:1;margin-top:15vh;";
    ket.style="margin-top:30px";
}

function memulai(){
    suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";
    ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";
    setTimeout(pesan,300)
}

function kpemb() {
    suratin.style="display:none";ket.style="display:none";
    fotoakhir.style="display:inline-flex;transform:scale(1);";
    Content.style = "opacity:1;margin-top:2vh;";
    bq.style = "opacity:1;visibility:visible;margin-top:5px";
    setTimeout(ngetik,500)
}
  
function tombol(){
    Tombol.style="margin-top:15px;opacity:1;transform: scale(1);";
    ftom=1;
} ftom=0; 

function fakhiran(){
    document.getElementById("akhiran").style = "display:inline-flex";
}

const swals = Swal.mixin({
    allowOutsideClick: false, 
    cancelButtonColor: '#FF0040',
    imageWidth: 100,
    imageHeight: 100,
}); 

const swalst = Swal.mixin({
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    imageWidth: 100,
    imageHeight: 100,
});

const style = document.createElement('style');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;

function setel(){
    audio.play();
}

function setel2(){
    bgm.play();
}

function sjawab(){
    if(ftom==1){
        Tombol.style="display:none";jawab();
    }
}
  
var aa=0,katangetik;

function ngetik(){
    if(aa<katangetik.length){
        kalimat.innerHTML += katangetik.charAt(aa);aa++;setTimeout(ngetik,80);
    } if(aa==katangetik.length){
        kalimatc.style="margin-top:30px;margin-bottom:10px";setTimeout(ngetik2,500);
    }
}

var ai=0,katangetik2;

function ngetik2(){
    if(ai<katangetik2.length){
        kalimatc.innerHTML += katangetik2.charAt(ai);ai++;setTimeout(ngetik2,150);
    } if(ai==katangetik2.length){
        setTimeout(tombol,300);setTimeout(tunjukkan,2200);
    }
}

// For WhatsApp
async function jawab(){
    await swals.fire('Kirim pesan ke WhatsApp aku, ya...!');
    window.location = "https://wa.me/62895341341001?text=" + pesanwhatsapp;
}

// For Secreto
// async function jawab(){
//     await swals.fire('Isi Secreto ku yaa! 😉');
//     window.location = "https://secreto.site/aauki5";
// }

async function pertama(){
    audio = new Audio('https://feeldreams.github.io/almostday.mp3');
    setTimeout(showDiv,100);
}

pertama();
       
async function pesan(){
    await swalst.fire({
        title: 'Hai Kamu 🥰', 
        imageUrl: 'https://i.ibb.co/4VBkZwn/bunga.gif',
    });   	
        await swalst.fire({
        title: 'Semangat Jalani Harinya yaaa! 🤩',
        imageUrl: 'https://feeldreams.github.io/mndkat.gif',
    });
        await swalst.fire({
        title: 'Jaga Kesehatanmu! 😍',
        imageUrl: 'https://i.ibb.co/xGc2wBh/cartoons.gif',
    });
        await swalst.fire({
        title: 'Jangan Sampe Sakit! 😡',
        imageUrl: 'https://i.ibb.co/hBJWz6S/tinju.gif',
    });

    await swalst.fire({
        title: 'Aku Sayangkamu! 😘',
        imageUrl: 'https://feeldreams.github.io/peach12.gif',
    });
                  
    katangetik = "Makasih udah mau bukain yaaaa ><     ";
    katangetik2 = "❤️❤️❤️❤️❤️❤️ I LOVE YOU ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
                  
    pesanwhatsapp = "Hi kenalan yuk.....";
    setTimeout(kpemb,300);
}
