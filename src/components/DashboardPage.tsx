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
  HelpCircle
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

type DashboardPageProps = {
  onCreateNew: () => void;
  onLogout: () => void;
  onSettings: () => void;
  onViewProposal: (proposalId: number) => void;
  userEmail: string;
};

// Mock proposal history data
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

export function DashboardPage({ onCreateNew, onLogout, onSettings, onViewProposal, userEmail }: DashboardPageProps) {
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  useEffect(() => {
    // Show welcome dialog for first-time users (mock - in production use localStorage or backend)
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setWelcomeOpen(true);
      localStorage.setItem('hasSeenWelcome', 'true');
    }
  }, []);

  const getInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-3">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground">B</span>
              </div>
              <div>
                <h1 className="text-foreground">ProposeMe</h1>
                <p className="text-muted-foreground text-sm">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={onCreateNew} size="lg">
                <Plus className="mr-2 h-4 w-4" />
                New Proposal
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setWelcomeOpen(true)}
                title="Help & Tutorial"
              >
                <HelpCircle className="h-4 w-4" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(userEmail)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Account</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {userEmail}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onSettings}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-foreground mb-2">
            Welcome back!
          </h2>
          <p className="text-muted-foreground">
            Create and manage your B2B sales proposals
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">
                        {stat.label}
                      </p>
                      <p className="text-3xl text-foreground">
                        {stat.value}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span className="text-green-600 text-sm">
                          {stat.trend}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          vs last month
                        </span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Proposals */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Proposals</CardTitle>
            <CardDescription>
              Your recently generated sales proposals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockProposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground mb-1 truncate">
                        {proposal.companyName}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Clock className="h-3 w-3" />
                          {new Date(proposal.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {proposal.deckLength}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onViewProposal(proposal.id)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(proposal.driveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Drive
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {mockProposals.length === 0 && (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-foreground mb-2">No proposals yet</h3>
                <p className="text-muted-foreground mb-4">
                  Get started by creating your first proposal
                </p>
                <Button onClick={onCreateNew}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Proposal
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <WelcomeDialog open={welcomeOpen} onOpenChange={setWelcomeOpen} />
    </div>
  );
}
