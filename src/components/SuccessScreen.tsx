import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle2, ExternalLink, RefreshCw, Eye } from 'lucide-react';
import { PreviewDialog } from './PreviewDialog';

type SuccessScreenProps = {
  driveUrl: string;
  onReset: () => void;
  companyName: string;
};

export function SuccessScreen({ driveUrl, onReset, companyName }: SuccessScreenProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md border-border">
          <CardContent className="pt-12 pb-12">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Success Icon */}
              <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-500" />
              </div>

              {/* Success Message */}
              <div className="space-y-2">
                <h2 className="text-foreground">
                  Proposal Generated Successfully!
                </h2>
                <p className="text-muted-foreground">
                  Your branded proposal has been created and saved to Google Drive.
                </p>
              </div>

              {/* Actions */}
              <div className="w-full space-y-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setPreviewOpen(true)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Proposal
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(driveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Google Drive
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full"
                  onClick={onReset}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Create Another Proposal
                </Button>
              </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-border w-full">
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-muted-foreground text-sm">
                  <strong>What's next?</strong>
                </p>
                <ul className="text-muted-foreground text-sm text-left space-y-1.5 ml-4">
                  <li className="list-disc">Review and customize the slides in Google Slides</li>
                  <li className="list-disc">Share the proposal with your team for feedback</li>
                  <li className="list-disc">Send to your partner when ready</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <PreviewDialog
      open={previewOpen}
      onOpenChange={setPreviewOpen}
      companyName={companyName}
    />
  </>
  );
}
