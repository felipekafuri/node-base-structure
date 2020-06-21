import express from "express";
import UsersControllers from "@controllers/UsersControllers";

const app = express();

app.get("/", (request, response) => {
  return response.json({ ok: true });
});

app.listen(3333);
