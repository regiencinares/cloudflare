export default {
  async fetch(request, env, ctx) {
    return new Response(JSON.stringify({ 
      message: "Hello from Cloudflare Worker!",
      status: "Build Successful"
    }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      }
    });
  },
};
