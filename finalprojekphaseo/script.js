
var dataAntrian = [];
const antrianke = document.getElementById("antrianke");
const loketSatu = document.getElementById("loketSatu");
const loketDua = document.getElementById("loketDua")
const satu = document.getElementById("satu");
const dua = document.getElementById("dua");
const tiga = document.getElementById("tiga");
const empat = document.getElementById("empat");
const lima = document.getElementById("lima");
const enam = document.getElementById("enam");
const tujuh = document.getElementById("tujuh");
const delapan = document.getElementById("delapan");
const sembilan = document.getElementById("sembilan");
const sepuluh = document.getElementById("sepuluh");
const sebelas = document.getElementById("sebelas")
const audio = [antrianke, satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan, sepuluh, sebelas];

function ambilNoAntrian() {
  document.getElementById("namaNamaYangAntri").innerHTML = '';
  if (nama.value === '') {
    alert('nama masih kosong')
  } else if (nohp.value === '') {
    alert('NO HP masih kosong')
  } else if (kota.value === '') {
    alert('Kota Masih Kosong')
  } else {
    let nama = document.getElementById("nama");
    let noHp = document.getElementById("nohp");
    let kota = document.getElementById("kota");
    let nilaiawal = document.getElementById("nomorAntrian");
    let angka = Number(nilaiawal.innerText);
    let namaYangAntri = document.getElementById('namaYangAntri')
    let nilaiTotalAntrian = document.getElementById('nilaiTotalAntrian')
    angka++;
    nilaiawal.innerText = angka;
    namaYangAntri.innerText = nama.value;
    dataAntrian.push(`${angka}. ${nama.value}`);
    for (let i = 0; i < dataAntrian.length; i++) {
      let tempatNama = document.createElement('p');
      let nama = document.createTextNode(dataAntrian[i]);
      tempatNama.appendChild(nama);
      namaNamaYangAntri.appendChild(tempatNama);
    }
    nilaiTotalAntrian.innerText = dataAntrian.length;
    document.getElementById('nama').focus
    nama.value = '';
    noHp.value = '';
    kota.value = '';
  }
}

function resetNoAntrian() {
  document.getElementById("nomorAntrian").innerText = 0;
  document.getElementById('namaYangAntri').innerText = '';
  dataAntrian = [];
  console.log(dataAntrian);
  document.getElementById("nilaiTotalAntrian").innerHTML = 0;
  document.getElementById("namaNamaYangAntri").innerHTML = '';
  document.getElementById("nomorDiLoketSatu").innerText = "";
  document.getElementById("namaYangSedangDiLayaniDiLoketSatu").innerText = "";
  document.getElementById("nomorDiLoketDua").innerText = "";
  document.getElementById("namaYangSedangDiLayaniDiLoketDua").innerText = "";
}

function panggilAntrianLoketSatu() {
  if (dataAntrian.length === 0) {
    alert("ANTRIAN SUDAH HABIS");
  } else {
    document.getElementById("namaNamaYangAntri").innerHTML = '';
    let panggil = [];
    let dataYangSedangDiLayani = dataAntrian.shift();
    let temp = '';
    for (let i = 0; i <= dataYangSedangDiLayani.length; i++) {    //ngambil nama yang mau dilayani
      if (dataYangSedangDiLayani[i] === '.' || i === dataYangSedangDiLayani.length) {
        panggil.push(temp);
        temp = '';
      } else if (dataYangSedangDiLayani[i] === ' ') {

      } else {
        temp += dataYangSedangDiLayani[i];
      }
    }
    let panggilNomor = Number(panggil[0])
    audio[0].play();
    setTimeout(function () {
      audio[panggilNomor].play();
    }, 1500);
    setTimeout(function () {
      loketSatu.play()
    }, 2500);
    console.log(panggilNomor)
    document.getElementById("namaYangSedangDiLayaniDiLoketSatu").innerText = panggil[1];
    document.getElementById("nomorDiLoketSatu").innerText = panggil[0];
    nilaiTotalAntrian.innerText = dataAntrian.length;
    for (let i = 0; i < dataAntrian.length; i++) {
      let tempatNama = document.createElement('p');
      let nama = document.createTextNode(dataAntrian[i])
      tempatNama.appendChild(nama)
      namaNamaYangAntri.appendChild(tempatNama)
    }
  }
}

function panggilAntrianLoketDua() {
  if (dataAntrian.length === 0) {
    alert("ANTRIAN SUDAH HABIS");
  } else {
    document.getElementById("namaNamaYangAntri").innerHTML = '';
    let panggil = [];
    let dataYangSedangDiLayani = dataAntrian.shift();
    let nomorNya;
    let namaNya;
    let temp = '';
    for (let i = 0; i <= dataYangSedangDiLayani.length; i++) {    //ngambil nama yang mau dilayani
      if (dataYangSedangDiLayani[i] === '.' || i === dataYangSedangDiLayani.length) {
        panggil.push(temp);
        temp = '';
      } else if (dataYangSedangDiLayani[i] === ' ') {

      } else {
        temp += dataYangSedangDiLayani[i];
      }
    }
    let panggilNomor = Number(panggil[0])
    audio[0].play();
    setTimeout(function () {
      audio[panggilNomor].play();
    }, 1500);
    setTimeout(function () {
      loketDua.play()
    }, 2500);
    console.log(panggilNomor)
    document.getElementById("namaYangSedangDiLayaniDiLoketDua").innerText = panggil[1];
    document.getElementById("nomorDiLoketDua").innerText = panggil[0];
    nilaiTotalAntrian.innerText = dataAntrian.length;
    for (let i = 0; i < dataAntrian.length; i++) {
      let tempatNama = document.createElement('p');
      let nama = document.createTextNode(dataAntrian[i])
      tempatNama.appendChild(nama)
      namaNamaYangAntri.appendChild(tempatNama)
    }
  }
}