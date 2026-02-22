# ACE — Women in Leadership Landing Page

Next.js landing page for the ACE (Association for CX Excellence) Women in Leadership event.

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Google Cloud Run

### Prerequisites
- Google Cloud SDK installed and authenticated
- A GCP project with Cloud Run and Artifact Registry enabled

### 1. Set your project
```bash
export PROJECT_ID=your-gcp-project-id
export REGION=us-central1  # or northamerica-northeast1 for Canada
export SERVICE_NAME=ace-landing
```

### 2. Build & push the container image

Using Google Cloud Build (recommended):
```bash
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME
```

Or build locally and push:
```bash
docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME .
docker push gcr.io/$PROJECT_ID/$SERVICE_NAME
```

### 3. Deploy to Cloud Run
```bash
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000 \
  --memory 512Mi \
  --cpu 1
```

### 4. Get the service URL
```bash
gcloud run services describe $SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --format 'value(status.url)'
```

## Deploying via AI Studio (as intended)

1. Zip the entire project folder: `ace-landing.zip`
2. Upload to Google AI Studio
3. Use the Cloud Run deployment workflow in AI Studio
4. Set environment: Node.js 20, port 3000

## Project Structure

```
ace-landing/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles & animations
├── components/
│   ├── AceLogoIcon.tsx  # Reusable ACE logo SVG
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Hero.tsx         # Hero section with registration card
│   ├── EventStrip.tsx   # Teal event details strip
│   ├── Agenda.tsx       # Timeline agenda section
│   ├── AboutAce.tsx     # About ACE dark section
│   ├── Charities.tsx    # Charities section
│   └── Footer.tsx       # Footer
├── public/
│   └── ace-logo.png     # ACE logo asset
├── Dockerfile           # Cloud Run optimized multi-stage build
├── next.config.js       # Next.js config (standalone output)
└── README.md
```

## Brand Colors

| Name   | Hex       |
|--------|-----------|
| Navy   | `#0A1A2F` |
| Teal   | `#00A6A6` |
| Amber  | `#FFB84D` |
| Slate  | `#4A5A6A` |
| Sand   | `#F5F7FA` |

## Fonts
- **Outfit** (headings, wordmarks) — Google Fonts
- **Manrope** (body, UI) — Google Fonts
