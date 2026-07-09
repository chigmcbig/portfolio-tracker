export default async function handler(req, res) {
  const { symbol } = req.query;
  
  if (!symbol) {
    return res.status(400).json({ error: "No symbol provided" });
  }
  
  const key = process.env.FINNHUB_KEY;
  if (!key) {
    return res.status(500).json({ error: "Server missing API key" });
  }
  
  try {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${key}`);
    const data = await response.json();
    
    if (data && typeof data.c === "number" && data.c > 0) {
      return res.status(200).json({ symbol, price: data.c });
    }
    
    return res.status(404).json({ error: "No price found for " + symbol });
  } catch (err) {
    return res.status(500).json({ error: "Fetch failed" });
  }
}
