export function formatDateIndonesian(dateString: string): any {
  if (dateString === "" || dateString === undefined) return;

  const date = new Date(dateString);

  // Opsi format untuk penanggalan Indonesia
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("id-ID", options);
  const formattedDate = formatter.format(date);

  return formattedDate;
}

export function getMonthYearFromDate(dateString: string): any {
  if (dateString === "" || dateString === undefined) return;

  const date = new Date(dateString);

  // Opsi format untuk mendapatkan bulan dan tahun
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("id-ID", options);
  const formattedMonthYear = formatter.format(date);

  return formattedMonthYear;
}

export function getDayFromDate(dateString: string): any {
  if (dateString === "" || dateString === undefined) return;

  const date = new Date(dateString);
  return date.getDate();
}
