# Trading Platform Pro v1.0

A professional, full-featured trading platform with three paper trading accounts, AI auto-investor, 90-day game mode simulation, and educational content.

**Live Demo:** [chigmcbig.vercel.app/portfolio-tracker](https://chigmcbig.vercel.app/portfolio-tracker)

---

## 🚀 Features

### Three Trading Accounts
1. **Manual Trader** - £10,000 starting capital
   - Real-time buy/sell interface
   - Professional portfolio tracking
   - Risk warnings (concentration alerts >20%)
   - Sector breakdown visualization
   - Complete trade history & analytics

2. **AI Auto-Trader** - £50,000 starting capital
   - Auto-invested in top 5 stocks (NVDA, MSFT, AAPL, V, GOOGL)
   - Equal allocation strategy
   - Read-only portfolio tracking
   - Real-time performance metrics

3. **Game Mode** - £10,000 starting capital
   - 90-day historical simulation
   - Time controls (+1 Day, +1 Week, +1 Month, End Game)
   - Full buy/sell trading interface
   - Portfolio performance chart
   - Win rate & trade analytics

### Professional Tools
- **Dashboard** - Compare all 3 traders, performance charts, sector breakdown
- **Screener** - Top gainers/losers with add-to-watchlist
- **Watchlist** - Track unlimited stocks without owning
- **Position Calculator** - 2% risk rule sizing tool
- **Education** - 6 interactive lessons (Candlesticks, RSI, MAs, Selling, Risk Mgmt, Emotions)
- **Leaderboard** - Real-time rankings by return %
- **Journal** - Trade history with P&L, win rate, best/worst trades

### Technical Highlights
- **Real-time Prices** - Update every 5 seconds with realistic market movement
- **Data Persistence** - All data saved to localStorage (survives page refresh)
- **Form Validation** - Prevents negative numbers, insufficient cash, over-concentration
- **Toast Notifications** - Success/error feedback on every action
- **Responsive Design** - Works on desktop (mobile optimization pending v2)

---

## 📊 Stock Universe (10 Tickers)

| Ticker | Company | Sector | Price |
|--------|---------|--------|-------|
| AAPL | Apple | Tech | £150 |
| MSFT | Microsoft | Tech | £280 |
| NVDA | NVIDIA | Tech | £140 |
| GOOGL | Google | Tech | £120 |
| AMZN | Amazon | Consumer | £160 |
| TSLA | Tesla | Auto | £200 |
| META | Meta | Tech | £250 |
| JPM | JPMorgan | Finance | £180 |
| V | Visa | Finance | £220 |
| WMT | Walmart | Retail | £85 |

---

## 🛠 Tech Stack

- **Frontend:** React 18 (via CDN)
- **Charts:** Recharts (via CDN)
- **Data:** localStorage (client-side)
- **API:** Finnhub (live prices)
- **Hosting:** Vercel
- **Node:** 18.x

---

## 📝 Project Structure

```
portfolio-tracker/
├── public/
│   └── index.html              # Main React app (single file)
├── api/
│   └── price.js                # Finnhub API proxy (serverless)
├── package.json                # Dependencies & scripts
├── vercel.json                 # Vercel configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

---

## 🚀 Deployment to Vercel (Step-by-Step)

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Trading Platform v1.0"

# Create new repo on github.com/chigmcbig/portfolio-tracker
# Then push:
git remote add origin https://github.com/chigmcbig/portfolio-tracker.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Connect GitHub account (if not already)
# - Select your repository
# - Confirm project settings
# - Deploy!
```

#### Option B: Via Web Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects static site (no build needed)
5. Click "Deploy"

### 3. Set Environment Variable

**CRITICAL:** Your Finnhub API key must be added to Vercel environment variables.

#### Via Dashboard:
1. Go to your Vercel project
2. Settings → Environment Variables
3. Add: `FINNHUB_KEY` = `your_finnhub_api_key`
4. Redeploy

#### Via CLI:
```bash
vercel env add FINNHUB_KEY
# Paste your key when prompted
vercel --prod
```

### 4. Verify Deployment

Your site is now live at: `https://portfolio-tracker-yourusername.vercel.app`

Test it:
- Open the live URL
- Buy/sell stocks (Manual Trader)
- Start Game Mode
- Check prices update every 5 seconds

---

## 🔑 Getting Your Finnhub API Key

1. Go to [finnhub.io](https://finnhub.io/)
2. Sign up (free tier works fine)
3. Copy your API key from dashboard
4. Add to Vercel environment variables (see step 3 above)

**Note:** The app still works without the key (uses simulated prices), but live prices require it.

---

## 💾 Data Persistence

All user data is stored in browser localStorage:

```javascript
// Automatically saved:
- manualCash, manualPositions, manualTrades
- aiCash, aiPositions, aiInitialized
- gameStarted, gameDay, gameCash, gamePositions, gameTrades, gameChartData
- watchlist
```

**Data survives:**
- ✅ Page refresh
- ✅ Browser close/reopen
- ✅ Tab changes

**Data is lost:**
- ❌ Clear browser cache
- ❌ Incognito/private browsing (each session separate)
- ❌ Different browser or device

---

## 🎮 How to Use

### Manual Trader
1. Go to "Manual Trader" tab
2. Click "Buy Stock"
3. Select a stock from dropdown
4. Enter number of shares
5. Click "Buy" (checks cash, validates shares)
6. See confirmation toast
7. To sell: Select position → Enter shares → "Sell"

### AI Trader
- Auto-invests on first load with £50,000
- Updates with real-time prices
- Read-only (for observation)
- Good for comparing your strategy vs automated

### Game Mode
1. Click "Start Game"
2. Buy/sell with £10,000
3. Use time controls to advance
4. Portfolio value chart updates as you trade
5. Win rate & analytics calculate from your trades
6. Game ends at day 89 (90 days = 0-89)

### Watchlist
1. Go to "Screener" tab
2. Click `+` button on any stock
3. View in "Watchlist" tab
4. Shows live price and 7-day % change
5. Click "Remove" to delete

### Position Calculator
1. Go to "Calculator" tab
2. Enter account size (£)
3. Enter entry price (where you'll buy)
4. Enter stop loss price (where you'll exit if wrong)
5. See max shares to buy (2% risk rule)
6. Example: £10k account, buy at £150, stop at £140 = 20 shares max

### Learn
- 6 lessons on trading fundamentals
- Click to expand each lesson
- Topics: Candlesticks, RSI, Moving Averages, Selling, Risk Management, Emotions

---

## 📈 Analytics & Reporting

### Journal Tab Shows:
- **Total Trades:** Count of all buys + sells
- **Win Rate:** % of sell trades that were profitable
- **Best Trade:** Largest single profit
- **Worst Trade:** Largest single loss
- **Recent Trades:** Last 15 trades with P&L

### Leaderboard:
- Ranks all 3 traders by return %
- Shows £ profit and % gain
- Updates in real-time as you trade

---

## ⚙️ Configuration

### Edit Stock List
In `index.html`, modify the `STOCKS` array:

```javascript
const STOCKS = [
  { ticker: "AAPL", name: "Apple", sector: "Tech", basePrice: 150 },
  // Add or change stocks here
];
```

### Change Starting Capital
In `index.html`, find localStorage initializers:

```javascript
// Manual Trader default
const [manualCash, setManualCash] = useState(() => 
  JSON.parse(localStorage.getItem("manualCash") || "10000")
);

// Change "10000" to your desired amount
```

### Adjust Price Update Interval
```javascript
const interval = setInterval(() => {
  // Updates every 5000ms (5 seconds)
}, 5000);

// Change 5000 to your desired milliseconds
```

---

## 🐛 Troubleshooting

### Prices Not Updating
- Check Finnhub API key is set in Vercel environment variables
- Check if using free tier (has rate limits)
- Wait a moment - updates happen every 5 seconds

### Data Lost After Refresh
- You're probably using Incognito/Private mode
- localStorage doesn't persist in private browsing
- Use normal browsing mode

### Game Mode Time Not Advancing
- Click time buttons ("+1 Day", "+1 Week", etc.)
- Chart updates after each time advance
- Game ends automatically at day 89

### Deployment Issues
- Ensure `index.html` is in root `/public` folder
- Ensure `api/price.js` is in `/api` folder
- Check Vercel build logs for errors
- Verify FINNHUB_KEY environment variable is set

---

## 🚀 Future Enhancements (v2.0)

- [ ] Candlestick charts with technical indicators
- [ ] RSI & Moving Average overlays
- [ ] Backtesting engine
- [ ] Dark mode
- [ ] Mobile optimization
- [ ] Social sharing leaderboards
- [ ] Real news API integration
- [ ] Options/futures trading
- [ ] Advanced filtering & screeners
- [ ] Portfolio export (PDF)

---

## 📄 License

MIT License - Free to use, modify, distribute

---

## 👤 Author

Built by **chigmcbig** | Age 17 | 2026

---

## 📞 Support

For issues or suggestions:
- Check the troubleshooting section above
- Review browser console (F12) for errors
- Verify all files are in correct directories
- Ensure Finnhub API key is valid

---

## ✨ Key Highlights

✅ **100% Complete** - All features working  
✅ **Production-Ready** - Live on Vercel  
✅ **No Database** - Fully client-side with localStorage  
✅ **Free Hosting** - Vercel free tier  
✅ **Professional Design** - Clean, responsive UI  
✅ **Educational** - Built-in trading lessons  
✅ **Real Data** - Finnhub live prices  
✅ **Data Persistence** - Survives page refresh  

---

**Last Updated:** July 2026 | v1.0.0
