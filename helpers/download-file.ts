interface handleDownloadFileProps {
  readonly filePath: string;
  readonly fileName: string;
}

export const handleDownloadFile = async ({
  filePath,
  fileName,
}: handleDownloadFileProps) => {
  if (!filePath) {
    console.error("PDF path is undefined.");
    return; // Menghentikan eksekusi fungsi jika pdfPath tidak valid
  }
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.pdf`; // Nama file yang diunduh
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading PDF:", error);
    // Handle error (misalnya, tampilkan pesan error ke pengguna)
  }
};
