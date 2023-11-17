import { Context, Hono } from "https://deno.land/x/hono@v3.10.1/mod.ts";

const app = new Hono();

app.get("/", (c:Context) => c.text("Welcome to Riasat API!"));


Deno.serve(app.fetch);
