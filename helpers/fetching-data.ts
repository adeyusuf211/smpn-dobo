import axios from "axios";

export async function getDataBuku() {
  try {
    const response = await axios.get(
      `http://admin.smpnegeri1dobo.sch.id/api/books/list`
    );
    return response;
  } catch (error) {
    console.log("Error: \n", error);
  }
}
