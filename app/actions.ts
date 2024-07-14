"use server";

export async function getDataBuku(search: any) {
  const api = await fetch(
    `http://admin.smpnegeri1dobo.sch.id/api/books/${
      search === "" ? "list" : `search?search=${search}`
    }`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await api?.json();
  return response;
}

export async function getDataGuru(page: any) {
  const api = await fetch(
    `http://admin.smpnegeri1dobo.sch.id/teachers/list?limit=10&page=${
      page ?? "1"
    }`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await api?.json();
  return response;
}
