import { Router } from "express";
const router = Router();

router.post("/chat", (req, res) => {
  res.json({ message: "Le chat est désactivé en local." });
});

export default router;