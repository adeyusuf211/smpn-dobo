export async function getDataPosts() {
  let allData: any = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `https://admin.smpnegeri1dobo.sch.id/api/get-posts?limit=1000000`
    );
    const result = await response.json();
    allData = [...allData, ...result.data];
    hasMore = result?.hasMore; // Pastikan ini sesuai dengan API Anda
    page++;
  }

  return allData;
}
