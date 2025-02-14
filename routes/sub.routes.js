import { Router } from "express";

const subRouter = Router();

subRouter.get("/", (req, res) => {
  res.send("GET all subs");
});
subRouter.get("/:id", (req, res) => {
  res.send("GET all sub details");
});
subRouter.post("/", (req, res) => {
  res.send("add new sub");
});
subRouter.put("/:id", (req, res) => {
  res.send("upates sub");
});
subRouter.delete("/:id", (req, res) => {
  res.send("delete a sub");
});
subRouter.post("/user/:id", (req, res) => {
  res.send("GET all user subs");
});
subRouter.put("/:id/cancel", (req, res) => {
  res.send("cancel subs");
});
subRouter.get("/upcomming-renewals", (req, res) => {
  res.send("GET upcomming renewals");
});
export default subRouter;
