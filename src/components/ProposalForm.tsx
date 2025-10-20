import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { FileUpload } from './FileUpload';
import { Sparkles } from 'lucide-react';
import type { FormData } from '../App';

type ProposalFormProps = {
  onSubmit: (data: FormData) => void;
};

export function ProposalForm({ onSubmit }: ProposalFormProps) {
  const [companyName, setCompanyName] = useState('');
  const [websiteOrLinkedIn, setWebsiteOrLinkedIn] = useState('');
  const [keyOpportunity, setKeyOpportunity] = useState('');
  const [brincRole, setBrincRole] = useState('');
  const [desiredNextStep, setDesiredNextStep] = useState('');
  const [deckLength, setDeckLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [files, setFiles] = useState<File[]>([]);
  const [addToMemory, setAddToMemory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      companyName,
      websiteOrLinkedIn,
      keyOpportunity,
      brincRole,
      desiredNextStep,
      deckLength,
      files,
      addToMemory,
    });
  };

  const isFormValid = companyName && keyOpportunity && brincRole;

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Create New Proposal</CardTitle>
        <CardDescription>
          Fill in the details below to generate a branded sales proposal for your partner.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">
                Partner Company Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="companyName"
                placeholder="e.g., Acme Corporation"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="websiteOrLinkedIn">Website / LinkedIn</Label>
              <Input
                id="websiteOrLinkedIn"
                placeholder="e.g., https://acmecorp.com or https://linkedin.com/company/acme"
                value={websiteOrLinkedIn}
                onChange={(e) => setWebsiteOrLinkedIn(e.target.value)}
                type="url"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keyOpportunity">
                Key Opportunity/Problem <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="keyOpportunity"
                placeholder="Describe the main challenge or opportunity this proposal addresses..."
                value={keyOpportunity}
                onChange={(e) => setKeyOpportunity(e.target.value)}
                required
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brincRole">
                Brinc's Potential Role <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="brincRole"
                placeholder="How will Brinc help solve this problem or capture this opportunity?"
                value={brincRole}
                onChange={(e) => setBrincRole(e.target.value)}
                required
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desiredNextStep">Desired Next Step</Label>
              <Input
                id="desiredNextStep"
                placeholder="e.g., Schedule a follow-up call, Sign partnership agreement"
                value={desiredNextStep}
                onChange={(e) => setDesiredNextStep(e.target.value)}
              />
            </div>
          </div>

          {/* Deck Length Selector */}
          <div className="space-y-3">
            <Label>Deck Length</Label>
            <RadioGroup
              value={deckLength}
              onValueChange={(value) => setDeckLength(value as 'short' | 'medium' | 'long')}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="short" id="short" className="peer sr-only" />
                <Label
                  htmlFor="short"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-border bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-colors"
                >
                  <span className="mb-1">Short</span>
                  <span className="text-muted-foreground text-sm">3–5 slides</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
                <Label
                  htmlFor="medium"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-border bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-colors"
                >
                  <span className="mb-1">Medium</span>
                  <span className="text-muted-foreground text-sm">6–10 slides</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="long" id="long" className="peer sr-only" />
                <Label
                  htmlFor="long"
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-border bg-background p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-colors"
                >
                  <span className="mb-1">Long</span>
                  <span className="text-muted-foreground text-sm">11–20 slides</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* File Upload */}
          <div className="space-y-3">
            <Label>Additional Context (Optional)</Label>
            <FileUpload files={files} onFilesChange={setFiles} />
          </div>

          {/* Knowledge Base Checkbox */}
          <div className="flex items-start space-x-3 rounded-lg border border-border bg-muted/30 p-4">
            <Checkbox
              id="addToMemory"
              checked={addToMemory}
              onCheckedChange={(checked) => setAddToMemory(checked as boolean)}
            />
            <div className="space-y-1 leading-none">
              <Label
                htmlFor="addToMemory"
                className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Add this context to Brinc's long-term memory
              </Label>
              <p className="text-muted-foreground text-sm">
                Save partner information and context for future proposals and interactions.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" size="lg" disabled={!isFormValid}>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Proposal
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
