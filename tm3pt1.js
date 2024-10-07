let siswa1 = {
    nama: "Tono",
    usia: 20,
    nilai: [90, 85, 88]
  };
  
  let siswa2 = {
    nama: "Tini",
    usia: 22,
    nilai: [78, 82, 85]
  };
  
  let rataRataUsia = (siswa1.usia + siswa2.usia) / 2;
  
  let mergedStudent = {
    nama: `${siswa1.nama} & ${siswa2.nama}`,
    usia: rataRataUsia, 
    nilai: [...siswa1.nilai, ...siswa2.nilai] 
  };
  
  console.log(mergedStudent);
  