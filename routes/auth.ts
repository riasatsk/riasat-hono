import { Context, Hono } from "https://deno.land/x/hono@v3.10.1/mod.ts";
interface User {
  name: string;
  password: string;
}

const user: User[] = [];
export const auth = new Hono();

auth.post("/signup", async (c: Context) => {
  const body = await c.req.json();
  const name = body.name;
  const password = body.password;
  user.push({ name: name, password: password });
  c.text(JSON.stringify(user));
});
