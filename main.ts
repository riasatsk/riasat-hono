import { Context, Hono } from "https://deno.land/x/hono@v3.10.1/mod.ts";
import { auth } from "./routes/auth.ts";

const app = new Hono();

app.get("/", (c: Context) => c.text("Welcome to Riasat API!"));
app.use(auth);

Deno.serve(app.fetch);
