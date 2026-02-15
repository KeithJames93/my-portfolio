Role: You are a professional career branding expert, web content writer, and UX designer.
Task: Create complete, polished content for a professional online web portfolio based on the information I provide below. 
•	The tone should be professional, confident, and clear.
•	Use concise paragraphs and bullet points where appropriate.
•	Assume this content will be published on a personal website.
________________________________________
🎨 VISUAL DESIGN & BRANDING INPUT
Color Scheme
•	Primary Color: Gray
•	Secondary / Accent Color: forest green
•	Light or Dark Theme Preference: Dark
Theme & Mood
•	Overall style (choose or describe): clean & minimal
Layout Preference
•	Layout type: single-page scroll
Target Audience
•	Who is this portfolio for? employers & clients
________________________________________
👤 ABOUT ME / GOALS SECTION
Background
•	Current role or focus: Industrial machinery mechanic
•	Field(s) of interest: Software development
Goals
•	Short-term professional goal: Graduate college
•	Long-term career goal: Work for a well-known tech company building programs and software for equipment
Prompt Instruction: Write a compelling “About Me” section that introduces who I am, what I’m working toward, and what motivates me professionally.
________________________________________
🎓 EDUCATION SECTION
For each education entry, provide:
•	Degree / Program Name: BS in Computer Programming
•	Institution Name: DeVry University
•	Completion Date (or expected): 2028
Prompt Instruction: Format this as a professional Education section suitable for a portfolio website.
________________________________________
📜 CERTIFICATIONS SECTION
For each certification, provide:
•	Certification Name: Engineer Technician Certification
•	Issuing Organization: Warren County Community College
•	Year Earned: 2021
Prompt Instruction: Create a concise Certifications section highlighting credibility and continuous learning.
________________________________________
💼 WORK HISTORY / EXPERIENCE SECTION
For each role (or project-based experience), provide:
•	Job Title / Role: industrial machinery mechanic
•	Organization / Company: Norwalt Design
•	Dates of Involvement: January 2026 – present
•	Key Responsibilities: Completing sub-assemblies to build packaging machinery for Procter and Gamble.
Prompt Instruction: Write this section to emphasize transferable skills, impact, and accomplishments. If experience is limited, frame academic or project work professionally.
🧠 SKILLS SECTION
List skills under the following categories:
Technical Skills
•	Reading blueprints and schematics, operating hand/power tools, and understanding mechanical components.
Tools & Technologies
•	AutoCAD, SolidWorks, digital calipers, material handling, 
Professional / Soft Skills
•	Attention to detail, dependability, teamwork, problem solving, and time management.
Prompt Instruction: Organize skills clearly using bullet points or grouped categories for quick scanning.
________________________________________
🔗 CONTACT & LINKS SECTION
Provide:
•	Professional Email: kgiordano2@my.devry.edu
•	Phone Number: (862) 599-4122
Prompt Instruction: Create a clear, professional Contact section encouraging connection and collaboration.
________________________________________
✅ FINAL OUTPUT REQUIREMENTS
•	Use clear section headers
•	Write in first person
•	Keep tone professional and confident
•	Ensure content is web-ready
•	Do NOT include placeholder text in the final output
---

## 🔥 Firebase Setup & Deployment

### Prerequisites
- A Google account and Firebase project ([Create one here](https://console.firebase.google.com))
- Node.js installed locally

### 1. Get Your Firebase Config
1. Go to your [Firebase Console](https://console.firebase.google.com)
2. Select your project → **Project Settings** (gear icon)
3. Copy your Web app config object (contains `apiKey`, `projectId`, etc.)

### 2. Configure Locally
Copy `public/firebase-config.example.js` to `public/firebase-config.js` and fill in your values:
```js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
```

**⚠️ Important:** Add `firebase-config.js` to `.gitignore` to keep credentials private.

### 3. Install Firebase CLI & Deploy
```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```

Your portfolio will be live at `https://YOUR_PROJECT_ID.web.app`

### File Structure
- `public/firebase-init.js` — Firebase SDK loader
- `public/script.module.js` — Main scripts + auto-init
- `public/firebase-config.example.js` — Config template (copy & customize)
- `public/firebase-config.js` — Your actual config (git-ignored)