export async function getDataBuku() {
  try {
    const response = await fetch(
      `http://admin.smpnegeri1dobo.sch.id/api/books/list`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
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