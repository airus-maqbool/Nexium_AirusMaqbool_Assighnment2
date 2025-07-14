# Blog Summariser – Assignment 2

A simple blog summariser built using **Next.js 14**.

### 🔗 Live App  
[Vercel Deployment](https://nexium-airus-maqbool-assighnment2-m0zxmkaaf.vercel.app)

### 🎥 Demo Video  
[Watch on Google Drive](https://drive.google.com/file/d/1BN1rEFerF17cytRpI_ftu0kofS3K1TkZ/view?usp=drive_link)

---

## ✅ Features

- Accepts blog URL (example: `https://marloesdevries.com/en/blog/jealousy-lessons/`)
- Simulates AI summary using static logic
- Translates summary to Urdu using a JS dictionary
- Saves:
  - Summary → Supabase
  - Full content → MongoDB
- Built with **ShadCN UI**
- Deployed on **Vercel**
- All code inside `/assighnment-2`

---

## ⚙️ Setup

1. Clone repo  
   `git clone https://github.com/airus-maqbool/Nexium_AirusMaqbool_Assighnment2.git`

2. Install dependencies  
   `pnpm install`

3. Add `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
MONGODB_URI=your_mongodb_uri
