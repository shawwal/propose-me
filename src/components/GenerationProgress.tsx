import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Loader2, FileText, Sparkles, Cloud } from 'lucide-react';

const stages = [
  { id: 1, message: 'Analyzing inputs...', icon: FileText, duration: 2000 },
  { id: 2, message: 'Generating slides...', icon: Sparkles, duration: 4000 },
  { id: 3, message: 'Saving to Drive...', icon: Cloud, duration: 2000 },
];

export function GenerationProgress() {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = stages.reduce((sum, stage) => sum + stage.duration, 0);
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 50;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      // Update current stage
      let cumulativeDuration = 0;
      for (let i = 0; i < stages.length; i++) {
        cumulativeDuration += stages[i].duration;
        if (elapsed < cumulativeDuration) {
          setCurrentStage(i);
          break;
        }
      }

      if (elapsed >= totalDuration) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = stages[currentStage]?.icon || Loader2;

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md border-border">
        <CardContent className="pt-12 pb-12">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Animated Icon */}
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CurrentIcon className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Loader2 className="h-4 w-4 text-primary-foreground animate-spin" />
              </div>
            </div>

            {/* Status Message */}
            <div className="space-y-2">
              <h2 className="text-foreground">
                {stages[currentStage]?.message || 'Processing...'}
              </h2>
              <p className="text-muted-foreground">
                This usually takes a few moments
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-muted-foreground text-sm">
                {Math.round(progress)}% complete
              </p>
            </div>

            {/* Stage Indicators */}
            <div className="flex items-center justify-center gap-6 pt-4">
              {stages.map((stage, index) => {
                const StageIcon = stage.icon;
                const isComplete = index < currentStage;
                const isCurrent = index === currentStage;

                return (
                  <div
                    key={stage.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                        isComplete
                          ? 'bg-primary text-primary-foreground'
                          : isCurrent
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <StageIcon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs transition-colors ${
                        isComplete || isCurrent
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      Step {index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
