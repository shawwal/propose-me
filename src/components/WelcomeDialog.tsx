import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  FileText, 
  Sparkles, 
  Cloud, 
  Eye,
  ArrowRight,
  Check
} from 'lucide-react';

type WelcomeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const steps = [
  {
    id: 1,
    title: 'Welcome to ProposeMe',
    description: 'Your AI-powered B2B proposal generator',
    icon: Sparkles,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          ProposeMe helps you create professional, branded sales proposals in minutes. 
          Simply provide partner information and let AI do the heavy lifting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="p-4 border-border">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-foreground mb-1">Fill the Form</h4>
            <p className="text-sm text-muted-foreground">
              Enter partner details and objectives
            </p>
          </Card>
          <Card className="p-4 border-border">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-foreground mb-1">AI Generation</h4>
            <p className="text-sm text-muted-foreground">
              Watch as AI creates your proposal
            </p>
          </Card>
          <Card className="p-4 border-border">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Cloud className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-foreground mb-1">Save & Share</h4>
            <p className="text-sm text-muted-foreground">
              Access in Google Drive instantly
            </p>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Key Features',
    description: 'Everything you need for winning proposals',
    icon: Check,
    content: (
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground mb-1">AI-Powered Content</h4>
              <p className="text-sm text-muted-foreground">
                Intelligent proposal generation based on partner context and Brinc's value proposition
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground mb-1">Live Preview</h4>
              <p className="text-sm text-muted-foreground">
                Preview slides and PDF before sharing with partners
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Cloud className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground mb-1">Google Drive Integration</h4>
              <p className="text-sm text-muted-foreground">
                Automatic saving to Drive for easy collaboration and version control
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-foreground mb-1">Smart Memory</h4>
              <p className="text-sm text-muted-foreground">
                Optional knowledge base saves partner context for future proposals
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Best Practices',
    description: 'Tips for creating great proposals',
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <h4 className="text-foreground mb-2">📝 Be Specific</h4>
          <p className="text-sm text-muted-foreground">
            The more context you provide about the partner and opportunity, the better 
            the AI can tailor the proposal to their needs.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <h4 className="text-foreground mb-2">🎯 Define Clear Objectives</h4>
          <p className="text-sm text-muted-foreground">
            Clearly state what you want to achieve with the partnership and what 
            the next steps should be.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <h4 className="text-foreground mb-2">📎 Add Context Files</h4>
          <p className="text-sm text-muted-foreground">
            Upload logos, brand guidelines, or relevant documents to help AI understand 
            the partner's brand and requirements.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <h4 className="text-foreground mb-2">✨ Review & Customize</h4>
          <p className="text-sm text-muted-foreground">
            Always review the generated proposal and customize it in Google Slides 
            before sending to partners.
          </p>
        </div>
      </div>
    ),
  },
];

export function WelcomeDialog({ open, onOpenChange }: WelcomeDialogProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onOpenChange(false);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <CurrentIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <DialogTitle>{steps[currentStep].title}</DialogTitle>
              <DialogDescription>{steps[currentStep].description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="py-6">
          {steps[currentStep].content}
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-2 pb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? 'w-8 bg-primary'
                  : index < currentStep
                  ? 'w-2 bg-primary/50'
                  : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>
              Skip
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              {currentStep < steps.length - 1 && (
                <ArrowRight className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
