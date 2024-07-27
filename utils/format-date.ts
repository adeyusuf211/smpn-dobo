export function formatDateIndonesian(dateString: string): string {
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
