# 🚀 Deployment Checklist - Trading Platform v1.0

Follow this checklist to deploy your trading platform to production in ~10 minutes.

---

## ✅ Pre-Deployment (Do Once)

- [ ] Finnhub API key obtained from [finnhub.io](https://finnhub.io/)
- [ ] GitHub account created
- [ ] Vercel account created (free tier)
- [ ] Vercel CLI installed: `npm i -g vercel`

---

## 📁 Step 1: Organize Files (2 minutes)

Ensure your GitHub repo has this structure:

```
portfolio-tracker/
├── index.html              (in root or public/)
├── api/
│   └── price.js
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

**Files you have:**
- ✅ `index.html` - Complete React app
- ✅ `api/price.js` - Finnhub proxy
- ✅ `package.json` - Dependencies
- ✅ `vercel.json` - Vercel config
- ✅ `.gitignore` - Git ignore
- ✅ `README.md` - Documentation

---

## 🔧 Step 2: Create GitHub Repository (3 minutes)

### Option A: Command Line
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: Trading Platform v1.0"

# Create new repo at github.com (empty, no README)
# Then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-tracker.git
git branch -M main
git push -u origin main
```

### Option B: GitHub Desktop
1. Open GitHub Desktop
2. File → Add Local Repository
3. Click "Create Repository"
4. Publish to GitHub

**Result:** Repo at `github.com/YOUR_USERNAME/portfolio-tracker`

---

## 🌐 Step 3: Deploy to Vercel (3 minutes)

### Via CLI (Recommended)
```bash
vercel

# Follow prompts:
# ✓ Set up and deploy? → Yes
# ✓ Which scope? → Your account
# ✓ Link to existing project? → No
# ✓ What's your project's name? → portfolio-tracker
# ✓ In which directory is your code? → ./
# ✓ Want to override the settings? → No
# ✓ Deploy? → Yes

# Wait ~30 seconds for deployment
```

### Via Web
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repo
4. Click "Import"
5. Vercel detects static site (no build needed)
6. Click "Deploy"

**Result:** Live URL appears (something like `portfolio-tracker-abc123.vercel.app`)

---

## 🔑 Step 4: Add API Key to Vercel (2 minutes)

### Via Dashboard (Easiest)
1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add new variable:
   - Name: `FINNHUB_KEY`
   - Value: `your_finnhub_api_key_here`
4. Click "Save"
5. Redeploy: Click "Deployments" → Latest → "..." → "Redeploy"

### Via CLI
```bash
vercel env add FINNHUB_KEY
# Paste your key when prompted
vercel --prod
```

**Result:** API key securely stored, prices update live

---

## ✅ Step 5: Verify Deployment (1 minute)

Test your live site:

1. **Open Live URL**
   - Go to your Vercel deployment URL
   - Should load instantly

2. **Test Manual Trader**
   - Click "Manual Trader" tab
   - Select a stock
   - Enter 10 shares
   - Click "Buy"
   - See toast notification "✓ Bought 10 AAPL..."

3. **Test Game Mode**
   - Click "Game Mode" tab
   - Click "Start Game"
   - See "Start Trading Simulation" disappear
   - Buy/sell works

4. **Test Prices Update**
   - Open Manual Trader
   - Watch prices change every 5 seconds
   - Confirm real-time updates working

5. **Test Data Persistence**
   - Make some trades
   - Refresh page (F5)
   - See trades still there!

---

## 🎉 Done!

Your trading platform is now **LIVE** at:

```
https://portfolio-tracker-{your-id}.vercel.app
```

---

## 📱 What to Share

Send people to:
- **Live Link:** `https://portfolio-tracker-{your-id}.vercel.app`
- **GitHub Repo:** `https://github.com/{username}/portfolio-tracker`
- **Description:** "Paper trading platform with AI auto-investor and 90-day game mode"

---

## 🆘 Troubleshooting

### "API key not working"
- Verify key in Vercel environment variables
- Redeploy after adding key
- Check Finnhub account is active

### "Prices not updating"
- Prices update every 5 seconds
- Wait a moment
- Check browser console (F12) for errors

### "Data disappeared"
- You're in incognito/private mode
- localStorage doesn't work there
- Use normal browsing

### "Deploy failed"
- Check file paths are correct
- `index.html` in root
- `api/price.js` in `/api` folder
- Check Vercel build logs

### "Page loads but nothing appears"
- Check browser console (F12)
- Look for JavaScript errors
- Verify CDN links (React, Recharts) are loading

---

## 📞 Quick Reference

| Thing | Where |
|------|-------|
| API Key | Vercel → Project Settings → Environment Variables |
| Deployment Status | Vercel → Deployments |
| Live URL | Vercel → Project → Domains |
| Redeploy | Vercel → Deployments → Latest → Redeploy |
| Git Push | `git push origin main` |
| View Logs | Vercel → Deployments → Function Logs |

---

## 🎯 Next Steps (After Launch)

1. **Share with Friends**
   - Send them your live URL
   - They can trade without installing anything

2. **Add More Stocks** (Optional)
   - Edit `STOCKS` array in `index.html`
   - Commit & push: `git push origin main`
   - Vercel auto-deploys!

3. **Monitor Usage**
   - Check Vercel analytics
   - Monitor Finnhub API calls

4. **Plan v2.0**
   - Dark mode
   - Mobile optimization
   - More indicators
   - Social features

---

**Total Time:** ~10 minutes  
**Cost:** FREE (Vercel free tier + Finnhub free tier)  
**Status:** Production-Ready ✅

Good luck! 🚀
