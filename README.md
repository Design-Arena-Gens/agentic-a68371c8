## Nur Al-Amira · Digital Abaya Atelier

Nur Al-Amira is a bespoke abaya brand experience that blends couture storytelling with an intelligent stylist named **Amira**. The site highlights signature capsule pieces, the atelier journey, editorial storytelling, and an interactive concierge that responds to guest prompts in real time.

### Features
- **Hero narrative** introducing the brand ethos, atelier pillars, and ritual-focused call-to-actions.
- **Signature Capsule** cards with palette swatches, fabrication notes, investment information, and atelier highlights.
- **Experience Journey** describing the three-step couture ritual from discovery to finishing.
- **Amira Concierge** conversational agent with curated responses, quick prompts, and trend highlights.
- **Editorial Dispatch** showcasing journal entries and brand storytelling, plus an appointment-focused footer.

### Tech Stack
- [Next.js 16](https://nextjs.org/) App Router with TypeScript
- Tailwind CSS v4 (inline theme tokens)
- Server-rendered marketing sections + client-side chat experience

### Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to explore the experience locally.

### Quality Commands
```bash
npm run lint   # ESLint
npm run build  # Production build check
```

### Production Deployment
The app is configured for Vercel. Deployments can be triggered with:
```bash
npx vercel deploy --prod --yes --token $VERCEL_TOKEN
```
