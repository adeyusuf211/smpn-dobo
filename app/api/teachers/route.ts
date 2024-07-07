export async function GET() {
  const api = await fetch(`${process.env.ROOT_API_URL}/teachers/list`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await api.json();

  return Response.json({ response });
}
