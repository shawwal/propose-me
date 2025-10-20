import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { DashboardPage } from './components/DashboardPage';
import { SettingsPage } from './components/SettingsPage';
import { ProposalForm } from './components/ProposalForm';
import { GenerationProgress } from './components/GenerationProgress';
import { SuccessScreen } from './components/SuccessScreen';
import { PreviewDialog } from './components/PreviewDialog';
import { Button } from './components/ui/button';
import { ArrowLeft, LogOut } from 'lucide-react';

export type FormData = {
  companyName: string;
  websiteOrLinkedIn: string;
  keyOpportunity: string;
  brincRole: string;
  desiredNextStep: string;
  deckLength: 'short' | 'medium' | 'long';
  files: File[];
  addToMemory: boolean;
};

type AppState = 'login' | 'dashboard' | 'settings' | 'form' | 'generating' | 'success';

export default function App() {
  // Session persistence - will persist during the browser session
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appState, setAppState] = useState<AppState>('login');
  const [userEmail, setUserEmail] = useState<string>('');
  const [formData, setFormData] = useState<FormData | null>(null);
  const [driveUrl, setDriveUrl] = useState<string>('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewCompany, setPreviewCompany] = useState<string>('');

  const handleLogin = (email: string, _password: string) => {
    setUserEmail(email);
    setIsAuthenticated(true);
    setAppState('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    setFormData(null);
    setDriveUrl('');
    setPreviewOpen(false);
    setPreviewCompany('');
    setAppState('login');
  };

  const handleCreateNew = () => {
    setFormData(null);
    setDriveUrl('');
    setAppState('form');
  };

  const handleFormSubmit = async (data: FormData) => {
    setFormData(data);
    setAppState('generating');

    // Simulate API call to generate proposal
    // In production, this would call your backend/Supabase function
    await new Promise(resolve => setTimeout(resolve, 8000));

    // Mock Google Drive URL
    setDriveUrl('https://drive.google.com/drive/folders/mock-folder-id');
    setAppState('success');
  };

  const handleBackToDashboard = () => {
    setAppState('dashboard');
  };

  const handleReset = () => {
    setFormData(null);
    setDriveUrl('');
    setAppState('form');
  };

  const handleSettings = () => {
    setAppState('settings');
  };

  const handleViewProposal = (proposalId: number) => {
    // Mock data - in production this would fetch the actual proposal
    const mockCompanies = ['TechCorp Industries', 'Global Innovations Ltd', 'StartUp Accelerate'];
    setPreviewCompany(mockCompanies[proposalId - 1] || 'Partner Company');
    setPreviewOpen(true);
  };

  // Login Page - only show if not authenticated
  if (!isAuthenticated || appState === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Dashboard Page
  if (appState === 'dashboard') {
    return (
      <>
        <DashboardPage
          onCreateNew={handleCreateNew}
          onLogout={handleLogout}
          onSettings={handleSettings}
          onViewProposal={handleViewProposal}
          userEmail={userEmail}
        />
        <PreviewDialog
          open={previewOpen}
          onOpenChange={setPreviewOpen}
          companyName={previewCompany}
        />
      </>
    );
  }

  // Settings Page
  if (appState === 'settings') {
    return (
      <SettingsPage
        onBack={handleBackToDashboard}
        userEmail={userEmail}
      />
    );
  }

  // Proposal Creation Flow (form, generating, success)
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground">B</span>
              </div>
              <div>
                <h1 className="text-foreground">ProposeMe</h1>
                <p className="text-muted-foreground text-sm mt-0.5">
                  AI-Powered B2B Sales Proposals
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {appState === 'form' && (
                <Button variant="ghost" onClick={handleBackToDashboard}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              )}
              {appState === 'success' && (
                <Button variant="ghost" onClick={handleBackToDashboard}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {appState === 'form' && (
          <ProposalForm onSubmit={handleFormSubmit} />
        )}
        {appState === 'generating' && <GenerationProgress />}
        {appState === 'success' && formData && (
          <SuccessScreen
            driveUrl={driveUrl}
            onReset={handleReset}
            companyName={formData.companyName}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Brinc. Internal Tool - For authorized use only.
          </p>
        </div>
      </footer>
    </div>
  );
}