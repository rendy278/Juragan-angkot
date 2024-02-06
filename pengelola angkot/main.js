const penumpang = [];
const tambahPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log("nama penumpang inisudah ada didalam angkot");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};
// hapus penumpang
const hapusPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length == 0) {
    console.log("masih kosong");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang.splice(i, 1);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada di dalam angkot`);
        return penumpang;
      }
    }
  }
};
tambahPenumpang("rendy", penumpang);
tambahPenumpang("jihyo", penumpang);
tambahPenumpang("tzuyu", penumpang);
tambahPenumpang("yoshizawa", penumpang);
hapusPenumpang("jihyo", penumpang);
console.log(penumpang);
