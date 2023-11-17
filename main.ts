import { Context, Hono } from "https://deno.land/x/hono@v3.10.1/mod.ts";
const app = new Hono();

interface User {
  name: string;
  password: string;
}


const user: User[] = [];

app.post("/signup", async (c: Context) => {
  const body = await c.req.json();
  const name = body.name;
  const password = body.password;
  user.push({ name: name, password: password });
  c.text(name, password);
});

app.get("/", (c: Context) => c.text("Welcome to Riasat API!"));

Deno.serve(app.fetch);
