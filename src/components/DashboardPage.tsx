import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Plus,
  FileText,
  ExternalLink,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  LogOut,
  Settings,
  Eye,
  HelpCircle,
} from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { WelcomeDialog } from './WelcomeDialog';
import { Header } from './Header';
import { StatsGrid } from './StatsGrid';
import { RecentProposals } from './RecentProposals';
import Footer from './Footer';

type DashboardPageProps = {
  onCreateNew: () => void;
  onLogout: () => void;
  onSettings: () => void;
  onViewProposal: (proposalId: number) => void;
  userEmail: string;
};

// Mock data (could move to separate file)
const mockProposals = [
  {
    id: 1,
    companyName: 'TechCorp Industries',
    createdAt: '2025-10-18',
    deckLength: 'Medium (8 slides)',
    status: 'Completed',
    driveUrl: 'https://drive.google.com/drive/folders/mock-1',
  },
  {
    id: 2,
    companyName: 'Global Innovations Ltd',
    createdAt: '2025-10-15',
    deckLength: 'Long (15 slides)',
    status: 'Completed',
    driveUrl: 'https://drive.google.com/drive/folders/mock-2',
  },
  {
    id: 3,
    companyName: 'StartUp Accelerate',
    createdAt: '2025-10-12',
    deckLength: 'Short (5 slides)',
    status: 'Completed',
    driveUrl: 'https://drive.google.com/drive/folders/mock-3',
  },
];

const stats = [
  { label: 'Total Proposals', value: '24', icon: FileText, trend: '+12%' },
  { label: 'This Month', value: '8', icon: Calendar, trend: '+25%' },
  { label: 'Active Partners', value: '18', icon: Users, trend: '+8%' },
];

function getInitials(email: string) {
  const name = email.split('@')[0];
  return name.substring(0, 2).toUpperCase();
}

export function DashboardPage({
  onCreateNew,
  onLogout,
  onSettings,
  onViewProposal,
  userEmail,
}: DashboardPageProps) {
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setWelcomeOpen(true);
      localStorage.setItem('hasSeenWelcome', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onCreateNew={onCreateNew}
        onLogout={onLogout}
        onSettings={onSettings}
        userEmail={userEmail}
        onShowHelp={() => setWelcomeOpen(true)}
      />
      <main className="max-w-7xl mx-auto flex-grow px-6 py-6">
        <section className="mb-8">
          <h2 className="text-foreground text-xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground max-w-md">
            Create and manage your B2B sales proposals
          </p>
        </section>
        <StatsGrid />
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Proposals</CardTitle>
            <CardDescription>Your recently generated sales proposals</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentProposals proposals={mockProposals} onCreateNew={onCreateNew} onViewProposal={onViewProposal} />
          </CardContent>
        </Card>
        <Footer />
      </main>
      <WelcomeDialog open={welcomeOpen} onOpenChange={setWelcomeOpen} />
    </div>
  );
}