export function formatDate(inputDate: any) {
  const date = new Date(inputDate);

  // Daftar nama bulan
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Ambil hari, bulan, dan tahun
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Gabungkan hasil
  return `${day} ${month} ${year}`;
}
