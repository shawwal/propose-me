import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { FileText, Clock, Eye, ExternalLink } from 'lucide-react';

type Proposal = {
  id: number;
  companyName: string;
  createdAt: string;
  deckLength: string;
  status: string;
  driveUrl: string;
};

type RecentProposalsProps = {
  proposals: Proposal[];
  onCreateNew: () => void;
  onViewProposal: (id: number) => void;
};

export function RecentProposals({ proposals, onCreateNew, onViewProposal }: RecentProposalsProps) {
  if (proposals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <FileText className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-foreground text-lg font-semibold">No proposals yet</h3>
        <p className="mb-4 text-muted-foreground">Get started by creating your first proposal</p>
        <Button onClick={onCreateNew} className="inline-flex items-center gap-1 px-4 py-2">
          <FileText className="h-4 w-4" />
          Create Proposal
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="flex flex-col justify-between gap-3 rounded-lg border border-border bg-white p-4 
                     transition-colors hover:bg-accent/50 sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 items-center gap-4 min-w-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="mb-1 truncate text-foreground text-lg font-semibold">{proposal.companyName}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
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
          <div className="flex gap-2 justify-start sm:justify-end">
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => onViewProposal(proposal.id)}>
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Preview</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => window.open(proposal.driveUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Drive</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}