import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  if (!url) return res.status(400).send("Missing file URL");

  try {
    const response = await axios.get(url as string, { responseType: "arraybuffer" });
    res.setHeader("Content-Type", "application/pdf");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Failed to load file");
  }
}
