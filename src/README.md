# ProposeMe - AI-Powered B2B Sales Proposals

> An internal tool for Brinc employees to generate branded sales proposals using AI

## 🎯 Overview

ProposeMe is a clean, efficient web application that helps Brinc team members create professional B2B sales proposals in minutes. Simply provide partner information and context, and let AI generate a branded proposal deck with integrated Google Drive storage.

**Status**: Mock/Demo Version (Frontend Only)

## ✨ Key Features

- 🔐 **Secure Authentication** - Mock login system for authorized users
- 📝 **Smart Form Input** - Simple, guided proposal creation
- ✨ **AI Generation** - Simulated AI-powered content creation
- 👁️ **Live Preview** - Interactive slide and PDF preview
- ☁️ **Drive Integration** - Mock Google Drive/Slides connectivity
- 🧠 **Knowledge Base** - Optional long-term memory for partner context
- 📊 **Dashboard** - Statistics and proposal history
- ⚙️ **Settings** - Customizable preferences
- 📚 **Onboarding** - Interactive tutorial for new users

## 🚀 Quick Start

### Demo Login

1. Open the application
2. Click "Use Demo Account" or enter:
   - Email: `demo@brinc.io`
   - Password: `demo123`
3. Explore the dashboard and create your first proposal!

## 📁 Project Structure

```
/
├── App.tsx                      # Main application with routing & state
├── components/
│   ├── LoginPage.tsx           # Authentication page
│   ├── DashboardPage.tsx       # Main dashboard with stats & history
│   ├── ProposalForm.tsx        # Proposal creation form
│   ├── GenerationProgress.tsx  # Animated loading state
│   ├── SuccessScreen.tsx       # Post-generation success page
│   ├── PreviewDialog.tsx       # Slide & PDF preview modal
│   ├── SettingsPage.tsx        # User preferences
│   ├── WelcomeDialog.tsx       # Onboarding tutorial
│   ├── FileUpload.tsx          # Drag-and-drop file uploader
│   └── ui/                     # shadcn/ui component library
├── styles/
│   └── globals.css             # Tailwind CSS + Brinc branding
├── FEATURES.md                 # Detailed feature documentation
├── PAGES_SUMMARY.md           # Visual page descriptions
├── USER_GUIDE.md              # Complete user manual
└── README.md                  # This file
```

## 📖 Documentation

- **[FEATURES.md](./FEATURES.md)** - Complete feature documentation with technical details
- **[PAGES_SUMMARY.md](./PAGES_SUMMARY.md)** - Visual descriptions of all pages
- **[USER_GUIDE.md](./USER_GUIDE.md)** - Step-by-step user manual

## 🎨 Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **Radix UI** - Accessible primitives

## 🔄 User Flow

```
Login → Dashboard → Create Proposal → Form → Generating → Success → Preview
         ↑____________↓
         Settings
```

## 📄 Pages Overview

### 1. **Login Page**
- Mock authentication
- Demo account quick access
- Clean, branded design

### 2. **Dashboard**
- Statistics (proposals, partners, trends)
- Recent proposal history
- Quick actions (create, preview, settings)
- First-time user tutorial

### 3. **Proposal Form**
- Partner information inputs
- Deck length selector (Short/Medium/Long)
- File upload (drag-and-drop)
- Knowledge base option
- Form validation

### 4. **Generation Progress**
- Animated loading (8 seconds)
- Three stages with icons:
  - Analyzing inputs
  - Generating slides
  - Saving to Drive
- Progress bar and percentage

### 5. **Success Screen**
- Confirmation message
- Preview button
- Google Drive link
- Create another option

### 6. **Preview Dialog**
- Slides tab (8 slides with navigation)
- PDF tab (document preview)
- Download option
- Fullscreen support

### 7. **Settings**
- Profile management
- Notification preferences
- AI & data settings
- Appearance options

### 8. **Welcome Tutorial**
- 3-step onboarding
- Feature highlights
- Best practices
- Shown once (localStorage)

## 🎯 Mock Data

### Sample Proposals
1. **TechCorp Industries** - Medium (8 slides) - Oct 18, 2025
2. **Global Innovations Ltd** - Long (15 slides) - Oct 15, 2025
3. **StartUp Accelerate** - Short (5 slides) - Oct 12, 2025

### Statistics
- Total Proposals: 24 (+12%)
- This Month: 8 (+25%)
- Active Partners: 18 (+8%)

### Slide Deck Structure
1. Cover Slide - Partnership Proposal
2. Problem Statement - Key Challenges
3. Our Solution - Brinc's Approach
4. Value Proposition - Value Delivery
5. Timeline & Roadmap - Implementation
6. Case Studies - Success Stories
7. Investment & ROI - Financial Overview
8. Next Steps - Moving Forward

## 🎨 Branding

### Colors
- **Primary**: `#030213` (Dark blue/black)
- **Muted**: `#ececf0` (Light gray)
- **Destructive**: `#d4183d` (Red)
- **Success**: Green tones

### Typography
- Base size: 16px
- Headings: Medium weight (500)
- Body: Normal weight (400)

### Logo
- "B" in rounded square
- Used consistently across all pages

## 🔧 Key Components

### Form Components
- Input, Textarea, Label
- RadioGroup (deck length)
- Checkbox (knowledge base)
- File upload with preview

### UI Components
- Card (content containers)
- Button (primary, outline, ghost variants)
- Dialog (modals)
- Tabs (preview views)
- Progress (generation state)
- Badge (status indicators)
- Avatar (user profile)
- DropdownMenu (user actions)
- Alert (notifications)

### Layout Components
- Header with navigation
- Main content area (max-width constrained)
- Footer with copyright
- Responsive grid for stats

## 🚧 Future Enhancements

When connected to Supabase/Backend:

### Backend Integration
- [ ] Real Google Drive API integration
- [ ] Actual AI content generation (OpenAI, Anthropic, etc.)
- [ ] User authentication (SSO/OAuth)
- [ ] Proposal storage and retrieval
- [ ] File upload to cloud storage

### Features
- [ ] Dark mode support
- [ ] Custom proposal templates
- [ ] Team collaboration
- [ ] Email proposals directly
- [ ] Analytics dashboard
- [ ] Proposal versioning
- [ ] Advanced search/filter
- [ ] Export to PowerPoint
- [ ] Bulk operations
- [ ] API access

### Improvements
- [ ] Real-time collaboration
- [ ] Comments and feedback
- [ ] Approval workflows
- [ ] Template editor
- [ ] Brand kit manager
- [ ] Integration with CRM

## 💻 Development

### Component Guidelines
- Use TypeScript for type safety
- Follow shadcn/ui patterns
- Maintain Brinc branding
- Ensure responsive design
- Add loading states
- Handle errors gracefully

### Styling Rules
- Use Tailwind CSS classes
- Avoid inline styles (except imports)
- Don't override typography defaults unless needed
- Maintain consistent spacing
- Use design tokens from globals.css

### State Management
- React hooks for local state
- Props for component communication
- LocalStorage for preferences
- Future: Context API or Zustand for global state

## 🔒 Security Notes

**Current Implementation**:
- Mock authentication (client-side only)
- No real data storage
- No external API calls
- Demo/prototype purposes only

**Production Requirements**:
- Backend authentication (SSO/OAuth)
- Secure API endpoints
- Data encryption
- Access control
- Audit logging
- GDPR compliance

## 📱 Responsive Design

- **Desktop First**: Optimized for desktop workflows
- **Tablet Support**: Adaptive layouts
- **Mobile Friendly**: Stacked layouts, full-width buttons
- **Breakpoints**: Uses Tailwind's default breakpoints

## 🎓 Learning Resources

### For Users
- See [USER_GUIDE.md](./USER_GUIDE.md) for step-by-step instructions
- Click the help icon (?) in the dashboard for tutorial
- Review [PAGES_SUMMARY.md](./PAGES_SUMMARY.md) for page descriptions

### For Developers
- See [FEATURES.md](./FEATURES.md) for technical documentation
- Review component files for implementation details
- Check `styles/globals.css` for design tokens

## 🤝 Contributing

This is an internal Brinc tool. For changes or suggestions:
1. Review the documentation
2. Test thoroughly
3. Maintain branding consistency
4. Follow existing patterns
5. Update documentation

## 📞 Support

For questions or issues:
- Check the [USER_GUIDE.md](./USER_GUIDE.md)
- Review [FEATURES.md](./FEATURES.md)
- Contact Brinc IT team
- This tool is for authorized Brinc employees only

## 📋 Changelog

### Version 1.0.0 (January 2025)
- Initial release
- Mock authentication
- Complete proposal creation flow
- Interactive previews
- Dashboard with statistics
- Settings page
- Onboarding tutorial
- File upload support
- Responsive design
- Brinc branding

## 📄 License

Proprietary - Brinc Internal Tool
© 2025 Brinc. All rights reserved.
For authorized use only.

---

## 🎯 Quick Links

- **Demo Login**: demo@brinc.io / demo123
- **Main Features**: Dashboard → New Proposal → Preview
- **Help**: Click (?) icon in dashboard header
- **Settings**: User avatar → Settings

---

**Built with ❤️ for Brinc**

*ProposeMe - Making B2B proposals simple, fast, and effective.*
