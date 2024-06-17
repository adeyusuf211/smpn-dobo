export async function getDataBuku() {
  try {
    // const response = await fetch(`${process.env.API_BASE_URL}/books/list`);
    const response = await fetch(
      `http://admin.smpnegeri1dobo.sch.id/api/books/list`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response?.json();
    return result;
  } catch (error) {
    console.log("Error: \n", error);
  }
}
