export async function GET(request: Request) {
  const response = await fetch("https://zenquotes.io/api/random");

  if (!response.ok) {
    throw new Error("API error");
  }

  const data = await response.json();

  return Response.json(data);
}
