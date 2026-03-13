addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(JSON.stringify({ message: "Hello from Cloudflare Worker!" }), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" // This allows your HTML to read the data
    }
  });
}