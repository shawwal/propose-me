# ProposeMe - Feature Documentation

## Overview
ProposeMe is an AI-powered B2B sales proposal generator for Brinc. It provides a clean, efficient interface for creating branded proposals with Google Drive integration.

## Pages & Features

### 1. Login Page (`/components/LoginPage.tsx`)
**Purpose**: Secure authentication for Brinc employees

**Features**:
- Email/password authentication
- Mock authentication (accepts any @brinc.io email)
- Demo account quick login
- Responsive design with Brinc branding

**Demo Credentials**:
- Email: `demo@brinc.io`
- Password: `demo123`

---

### 2. Dashboard (`/components/DashboardPage.tsx`)
**Purpose**: Main landing page showing proposal history and statistics

**Features**:
- **Statistics Cards**: Total proposals, monthly count, active partners with trend indicators
- **Recent Proposals**: List of previously generated proposals
- **Quick Actions**: 
  - Create new proposal
  - Preview existing proposals
  - Open proposals in Google Drive
- **User Menu**: Settings, logout, and help
- **Welcome Tutorial**: First-time user onboarding (shown once)

**Components**:
- Avatar with user initials
- Dropdown menu for account actions
- Help button for tutorial access
- Proposal cards with metadata (date, deck length, status)

---

### 3. Proposal Creation Form (`/components/ProposalForm.tsx`)
**Purpose**: Input form for creating new proposals

**Form Fields**:
1. **Partner Company Name** (required)
2. **Website / LinkedIn** (optional URL)
3. **Key Opportunity/Problem** (required, textarea)
4. **Brinc's Potential Role** (required, textarea)
5. **Desired Next Step** (optional)

**Additional Options**:
- **Deck Length Selector**: Short (3-5 slides), Medium (6-10 slides), Long (11-20 slides)
- **File Upload**: Drag-and-drop zone for logos, PDFs, screenshots
- **Knowledge Base Checkbox**: Option to save context for future use

**Validation**:
- Required fields enforced
- Submit button disabled until valid
- URL validation for website field

---

### 4. Generation Progress (`/components/GenerationProgress.tsx`)
**Purpose**: Loading state with real-time status updates

**Features**:
- Animated progress bar (0-100%)
- Three distinct stages:
  1. **Analyzing inputs...** (FileText icon)
  2. **Generating slides...** (Sparkles icon)
  3. **Saving to Drive...** (Cloud icon)
- Stage indicators showing current step
- Animated icons and loading spinner
- Mock 8-second generation time

---

### 5. Success Screen (`/components/SuccessScreen.tsx`)
**Purpose**: Confirmation and next steps after proposal generation

**Features**:
- Success message with checkmark animation
- **Primary Actions**:
  - **Preview Proposal**: Opens preview dialog
  - **Open in Google Drive**: External link to Drive folder
  - **Create Another Proposal**: Reset form
- **What's Next** section with guidance
- Passes company name to preview

---

### 6. Preview Dialog (`/components/PreviewDialog.tsx`)
**Purpose**: Interactive preview of generated proposals

**Features**:
- **Dual View Modes** (Tabs):
  - **Slides Preview**: Interactive slide deck with navigation
  - **PDF Preview**: Document-style preview
  
**Slides Preview**:
- Full slide viewer with mock content
- Navigation buttons (previous/next)
- Thumbnail strip at bottom
- 8 mock slides with realistic content
- Slide counter (e.g., "Slide 1 of 8")
- Company name integration
- Brinc branding throughout

**PDF Preview**:
- Document layout with header
- Executive summary
- Partnership model outline
- Next steps section
- Page counter

**Actions**:
- Download PDF button
- Close preview
- Fullscreen recommendation

---

### 7. Settings Page (`/components/SettingsPage.tsx`)
**Purpose**: User preferences and account management

**Settings Categories**:

**Profile**:
- Full name (editable)
- Email address (read-only, managed by IT)

**Notifications**:
- Email notifications toggle
- Receive updates when proposals are generated

**AI & Data**:
- Auto-save to knowledge base toggle
- Long-term memory toggle for AI

**Appearance**:
- Dark mode toggle (disabled, coming soon)

**Actions**:
- Save changes button
- Success confirmation alert
- Back to dashboard navigation

---

### 8. Welcome Dialog (`/components/WelcomeDialog.tsx`)
**Purpose**: First-time user onboarding and help

**Tutorial Steps**:

**Step 1 - Welcome**:
- Overview of ProposeMe
- Three-step process visualization
- Feature cards (Fill Form, AI Generation, Save & Share)

**Step 2 - Key Features**:
- AI-powered content generation
- Live preview capability
- Google Drive integration
- Smart memory system

**Step 3 - Best Practices**:
- Be specific with context
- Define clear objectives
- Add context files
- Review & customize

**Features**:
- Progress dots showing current step
- Previous/Next navigation
- Skip option
- Shown once per user (localStorage)
- Accessible via help button in dashboard

---

### 9. File Upload Component (`/components/FileUpload.tsx`)
**Purpose**: Drag-and-drop file uploader

**Features**:
- Click to browse or drag-and-drop
- Multiple file support
- File type icons (image/document)
- File size display
- Remove file button
- Accepted formats: images, PDF, DOC, DOCX
- 10MB per file limit (displayed)

---

## User Flow

### Complete User Journey:

1. **Login** → Enter credentials or use demo account
2. **Dashboard** → View statistics and recent proposals
   - *First-time users see Welcome Dialog*
3. **Create Proposal** → Click "New Proposal"
4. **Fill Form** → Enter partner details
   - Company name, opportunity, Brinc's role
   - Select deck length
   - Upload files (optional)
   - Enable knowledge base (optional)
5. **Generation** → Watch progress with status updates
6. **Success** → View confirmation
   - Preview proposal
   - Open in Google Drive
   - Create another
7. **Preview** → Review slides and PDF
   - Navigate through slides
   - Switch between Slides/PDF view
   - Download PDF
8. **Dashboard** → Return to see proposal in history

### Settings Flow:
- Dashboard → User Menu → Settings
- Update preferences
- Save changes
- Return to dashboard

---

## Mock Data

### Proposal History (Dashboard):
1. TechCorp Industries - Medium (8 slides) - Oct 18, 2025
2. Global Innovations Ltd - Long (15 slides) - Oct 15, 2025
3. StartUp Accelerate - Short (5 slides) - Oct 12, 2025

### Statistics:
- Total Proposals: 24 (+12% vs last month)
- This Month: 8 (+25% vs last month)
- Active Partners: 18 (+8% vs last month)

### Mock Slides (Preview):
1. Cover Slide - Partnership Proposal
2. Problem Statement - Key Challenges & Opportunities
3. Our Solution - Brinc's Approach
4. Value Proposition - What We Bring to the Table
5. Timeline & Roadmap - Implementation Plan
6. Case Studies - Success Stories
7. Investment & ROI - Financial Overview
8. Next Steps - Moving Forward Together

---

## Technical Implementation

### State Management:
- **App-level state**: Authentication, navigation, form data
- **Component-level state**: Form inputs, dialogs, preferences
- **Local storage**: Welcome dialog seen flag

### Key Technologies:
- React with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- Lucide React for icons
- Radix UI primitives

### Components Used:
- Button, Input, Textarea, Label
- Card, Dialog, Tabs
- RadioGroup, Checkbox, Switch
- Progress, Badge, Avatar
- DropdownMenu, Alert, Separator

---

## Future Enhancements

### Supabase Integration:
- Real Google Drive/Slides API integration
- Actual proposal generation with AI
- User authentication and session management
- Proposal storage and retrieval
- Knowledge base implementation

### Additional Features:
- Dark mode support
- Proposal templates
- Collaboration features
- Analytics and insights
- Export to multiple formats
- Email proposal directly
- Proposal versioning
- Team sharing

---

## Navigation Map

```
Login
  ├─→ Dashboard
  │    ├─→ New Proposal → Form → Generating → Success → Preview
  │    ├─→ View Existing Proposal → Preview
  │    ├─→ Settings → Dashboard
  │    ├─→ Help → Welcome Dialog
  │    └─→ Logout → Login
  └─→ Demo Login → Dashboard
```

---

## Brand Guidelines

### Colors:
- Primary: `#030213` (Dark blue/black)
- Primary Foreground: White
- Muted: `#ececf0` (Light gray)
- Muted Foreground: `#717182` (Medium gray)
- Destructive: `#d4183d` (Red for errors)
- Success: Green (for confirmations)

### Typography:
- Headings: Medium weight (500)
- Body: Normal weight (400)
- Default size: 16px base

### Branding:
- Logo: "B" in rounded square
- Company: Brinc
- Product: ProposeMe
- Tagline: "AI-Powered B2B Sales Proposals"

---

## Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus visible states
- Semantic HTML structure
- Responsive design (desktop-first, mobile-friendly)
- Loading states with clear messaging
- Error states with helpful guidance

---

## Performance Considerations

- Mock 8-second generation (simulates real API)
- Smooth animations and transitions
- Lazy loading of dialogs
- Efficient state updates
- Minimal re-renders
- Optimized image handling

---

*Last Updated: January 2025*
*Version: 1.0.0*
