export function sliceText(text: string, maxLength: number) {
  if (text === undefined) return;

  // Jika panjang teks lebih pendek dari atau sama dengan maxLength, kembalikan teks asli
  if (text.length <= maxLength) {
    return text;
  }

  // Potong teks hingga batas yang ditentukan dan tambahkan "..."
  return text?.slice(0, maxLength - 3) + "...";
}
