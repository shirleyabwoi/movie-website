const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;
const apiKey = process.env.API_KEY;

export async function GET() {
    try {
        const response = await fetch(`${baseUrl}/popular?api_key=${apiKey}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error("Something went wrong: " + response.statusText);
        }
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status: 200,
        });
    } catch (error) {
        return new Response((error as Error).message, {
            status: 500,
        });
    }
}

