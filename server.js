import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// 🔥 mock data (เดี๋ยวค่อย upgrade เป็น scrape จริง)
let data = [
  { date: "2026-01-01", last3: "482" },
  { date: "2026-01-02", last3: "915" },
  { date: "2026-01-03", last3: "120" },
  { date: "2026-01-04", last3: "334" },
  { date: "2026-01-05", last3: "778" }
];

// API
app.get("/api/lotto", (req, res) => {
  res.json({
    success: true,
    data
  });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🔥 Render AI Server running on", PORT);
});
