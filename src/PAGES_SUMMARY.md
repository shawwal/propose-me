# ProposeMe - Pages Summary

## All Pages & Screens

### 🔐 1. LOGIN PAGE
**File**: `/components/LoginPage.tsx`

**What You See**:
- Brinc logo (B in rounded square)
- "ProposeMe" title
- "AI-Powered B2B Sales Proposals" subtitle
- Sign-in card with:
  - Email input (with mail icon)
  - Password input (with lock icon)
  - "Sign In" button
  - OR divider
  - "Use Demo Account" button
- Demo credentials shown in info box
- "For authorized Brinc employees only" footer

**Mock Login**:
- Any email ending with @brinc.io works
- Password must be 6+ characters
- OR click "Use Demo Account" (demo@brinc.io / demo123)

---

### 🏠 2. DASHBOARD PAGE
**File**: `/components/DashboardPage.tsx`

**Header**:
- Brinc logo + "ProposeMe"
- "New Proposal" button (primary action)
- Help icon (opens tutorial)
- User avatar with dropdown menu:
  - Account email
  - Settings
  - Log out

**Main Content**:
- **Welcome Section**: "Welcome back!" message
- **Statistics Cards** (3 across):
  1. Total Proposals: 24 (+12% trend)
  2. This Month: 8 (+25% trend)
  3. Active Partners: 18 (+8% trend)
- **Recent Proposals Section**:
  - List of 3 recent proposals
  - Each shows:
    - Company name
    - Creation date
    - Deck length badge
    - "Preview" button
    - "Drive" button (opens Google Drive)

**First-Time User**: Welcome tutorial dialog auto-opens

---

### ✍️ 3. PROPOSAL FORM PAGE
**File**: `/components/ProposalForm.tsx`

**Header**: 
- Back to Dashboard button
- Logout icon

**Form Card**:
- **Title**: "Create New Proposal"
- **Description**: "Fill in the details..."

**Form Fields** (top to bottom):
1. Partner Company Name* (required)
2. Website / LinkedIn (optional)
3. Key Opportunity/Problem* (required, large textarea)
4. Brinc's Potential Role* (required, large textarea)
5. Desired Next Step (optional)

**Deck Length Selector**:
- 3 clickable cards side-by-side:
  - Short (3-5 slides)
  - Medium (6-10 slides) [default]
  - Long (11-20 slides)

**File Upload Section**:
- Drag-and-drop zone with upload icon
- "Click to upload or drag and drop"
- Shows uploaded files with:
  - File icon
  - File name
  - File size
  - Remove button

**Knowledge Base Checkbox**:
- Checkable box in highlighted area
- "Add this context to Brinc's long-term memory"
- Description text

**Submit Button**:
- Full width
- "Generate Proposal" with sparkles icon
- Disabled until required fields filled

---

### ⏳ 4. GENERATION PROGRESS PAGE
**File**: `/components/GenerationProgress.tsx`

**Centered Card**:
- Large animated icon (changes per stage)
- Spinning loader badge
- Status message (changes):
  - "Analyzing inputs..."
  - "Generating slides..."
  - "Saving to Drive..."
- "This usually takes a few moments"
- Progress bar (0-100%)
- "X% complete"
- **Stage Indicators** (3 circles):
  - Step 1: FileText icon
  - Step 2: Sparkles icon
  - Step 3: Cloud icon
  - (completed = filled, current = highlighted, upcoming = muted)

**Duration**: ~8 seconds total

---

### ✅ 5. SUCCESS SCREEN
**File**: `/components/SuccessScreen.tsx`

**Centered Card**:
- Large green checkmark circle
- "Proposal Generated Successfully!"
- "Your branded proposal has been created..."

**Action Buttons** (stacked):
1. **Preview Proposal** (primary button, eye icon)
2. **Open in Google Drive** (outline button, external link icon)
3. **Create Another Proposal** (ghost button, refresh icon)

**What's Next Section**:
- Bordered info box with:
  - Review and customize in Slides
  - Share with team for feedback
  - Send to partner when ready

---

### 👁️ 6. PREVIEW DIALOG
**File**: `/components/PreviewDialog.tsx`

**Large Modal** (90% viewport height):

**Header**:
- "Proposal Preview - [Company Name]"
- "Review your generated proposal before sharing"

**Tab Selector**:
- Slides Preview (with presentation icon)
- PDF Preview (with document icon)

**SLIDES TAB**:
- Main slide viewer (white slide on gradient background):
  - Brinc logo
  - Slide number indicator
  - Slide title
  - Slide content
  - Footer with copyright
- Navigation:
  - Previous button (left, circular)
  - Next button (right, circular)
- Thumbnail strip below (8 slides)
  - Click any thumbnail to jump to that slide

**Mock Slide Content**:
1. Cover - Company name + "Partnership Proposal"
2. Problem Statement - 2 numbered challenges
3-8. Other sections with relevant icons/text

**PDF TAB**:
- Document-style preview:
  - Gradient header with Brinc logo
  - Company name
  - Executive Summary section
  - Partnership Model with bullet points
  - Next Steps callout box
  - Page counter footer

**Footer Actions**:
- Fullscreen tip
- "Close Preview" button
- "Download PDF" button (primary)

---

### ⚙️ 7. SETTINGS PAGE
**File**: `/components/SettingsPage.tsx`

**Header**:
- Back arrow button
- "Settings" title
- "Manage your account and preferences"

**Settings Cards** (stacked):

1. **Profile Card** (User icon):
   - Full Name input (editable)
   - Email input (disabled, grayed out)
   - "Contact IT to change email" note

2. **Notifications Card** (Bell icon):
   - Email Notifications toggle switch
   - Description text

3. **AI & Data Card** (Database icon):
   - Auto-save to Knowledge Base toggle
   - Long-term Memory toggle
   - Separator between options

4. **Appearance Card** (Palette icon):
   - Dark Mode toggle (disabled, "coming soon")

**Bottom**:
- "Save Changes" button (right-aligned)
- Success alert (appears after saving, auto-dismisses)

---

### 📚 8. WELCOME DIALOG (Tutorial)
**File**: `/components/WelcomeDialog.tsx`

**3-Step Tutorial Modal**:

**STEP 1 - Welcome to ProposeMe**:
- Large icon
- Title + description
- Intro paragraph
- 3 feature cards:
  - Fill the Form
  - AI Generation
  - Save & Share

**STEP 2 - Key Features**:
- 4 features with icons:
  - AI-Powered Content
  - Live Preview
  - Google Drive Integration
  - Smart Memory

**STEP 3 - Best Practices**:
- 4 tip boxes:
  - 📝 Be Specific
  - 🎯 Define Clear Objectives
  - 📎 Add Context Files
  - ✨ Review & Customize

**Navigation**:
- Progress dots (3 dots, current highlighted)
- "Previous" button (left)
- "Skip" button (right)
- "Next" / "Get Started" button (right)

**Trigger**:
- Auto-shows on first dashboard visit
- Can be reopened via help icon

---

### 📁 9. FILE UPLOAD COMPONENT
**File**: `/components/FileUpload.tsx`

**Upload Zone** (dashed border):
- Upload icon in circle
- "Click to upload or drag and drop"
- Accepted formats info
- Entire area is clickable

**After Upload**:
- File cards below upload zone
- Each file shows:
  - File type icon (image/document)
  - File name (truncated if long)
  - File size (KB/MB)
  - X button to remove

**Interaction**:
- Click zone → file picker opens
- Drag files → highlights zone
- Drop files → adds to list
- Multiple files supported

---

## Page Flow Diagram

```
┌─────────────┐
│   LOGIN     │ (Always first)
└──────┬──────┘
       │
       ↓
┌─────────────────────┐
│    DASHBOARD        │ ← Welcome Dialog (first time)
│  ┌───────────────┐  │
│  │ Stats (3)     │  │
│  │ Recent (list) │  │
│  └───────────────┘  │
└──┬───────┬────┬─────┘
   │       │    │
   │       │    └─→ Settings Page → Back to Dashboard
   │       │
   │       └─→ Preview Dialog (from list)
   │
   ↓
┌─────────────┐
│   FORM      │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│ GENERATING  │ (8 sec animation)
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   SUCCESS   │ ← Can open Preview Dialog
└─────────────┘
```

---

## Visual Elements Summary

### Icons Used:
- **Sparkles**: AI generation
- **FileText**: Documents/proposals
- **Cloud**: Google Drive
- **Eye**: Preview
- **Plus**: Create new
- **ExternalLink**: Open in Drive
- **RefreshCw**: Create another
- **Settings**: Settings page
- **LogOut**: Sign out
- **HelpCircle**: Help/tutorial
- **User**: Profile
- **Bell**: Notifications
- **Database**: AI/Data
- **Palette**: Appearance
- **TrendingUp**: Statistics trends
- **Calendar**: Date/time
- **Users**: Partners
- **Clock**: Timestamp
- **Mail**: Email
- **Lock**: Password
- **CheckCircle2**: Success
- **AlertCircle**: Error/warning
- **ArrowLeft**: Back navigation
- **ArrowRight**: Next/forward
- **ChevronLeft/Right**: Slide navigation
- **Download**: Download action
- **Maximize2**: Fullscreen
- **Upload**: File upload
- **X**: Remove/close

### Color Coding:
- **Primary Actions**: Dark blue (#030213)
- **Success**: Green (checkmarks, confirmations)
- **Muted/Secondary**: Light gray (#ececf0)
- **Destructive**: Red (#d4183d)
- **Borders**: rgba(0,0,0,0.1)
- **Highlights**: Primary with opacity (10%, 20%)

### Card Styles:
- All cards have rounded corners
- Border: 1px solid border color
- Padding: Consistent spacing
- Hover states on interactive elements
- Shadow on modals/dialogs

---

## Responsive Behavior

**Desktop** (default):
- Stats: 3 columns
- Forms: Single column, max-width 4xl
- Dialogs: Large, centered
- Dashboard: max-width 7xl

**Mobile/Tablet**:
- Stats: Stack to 1 column
- Form: Full width with padding
- Dialogs: Full screen or max width
- Navigation: Simplified
- Buttons: Full width when stacked

---

## Mock Data Reference

**Users**:
- demo@brinc.io
- Any @brinc.io email works

**Proposals in History**:
1. TechCorp Industries, Oct 18, Medium (8 slides)
2. Global Innovations Ltd, Oct 15, Long (15 slides)
3. StartUp Accelerate, Oct 12, Short (5 slides)

**Drive URLs**:
- All mock: https://drive.google.com/drive/folders/mock-X

**Slide Titles** (8 total):
1. Cover Slide
2. Problem Statement
3. Our Solution
4. Value Proposition
5. Timeline & Roadmap
6. Case Studies
7. Investment & ROI
8. Next Steps

---

*This summary covers all visible pages and UI states in ProposeMe v1.0*
