import { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Presentation,
  FileText,
  X,
  Maximize2,
  ExternalLink
} from 'lucide-react';

type PreviewDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  companyName: string;
};

// Mock slide data with more realistic content
const mockSlides = [
  {
    id: 1,
    title: 'Partnership Proposal',
    subtitle: 'Building the Future Together',
    type: 'cover',
  },
  {
    id: 2,
    title: 'Market Opportunity',
    subtitle: 'Key Challenges & Growth Potential',
    type: 'content',
    points: [
      'Rapidly expanding startup ecosystem in key markets',
      'Growing demand for specialized acceleration programs',
      'Need for corporate innovation partnerships',
    ],
  },
  {
    id: 3,
    title: "Brinc's Solution",
    subtitle: 'Our Approach to Partnership',
    type: 'content',
    points: [
      'End-to-end acceleration services',
      'Global mentor and investor network',
      'Proven track record across 6 continents',
      'Specialized vertical expertise',
    ],
  },
  {
    id: 4,
    title: 'Value Proposition',
    subtitle: 'What We Bring to the Table',
    type: 'content',
    points: [
      'Access to 1,000+ startups annually',
      'Corporate innovation consulting',
      'Brand visibility and thought leadership',
      'Measurable ROI and impact metrics',
    ],
  },
  {
    id: 5,
    title: 'Implementation Roadmap',
    subtitle: 'Our Proposed Timeline',
    type: 'timeline',
  },
  {
    id: 6,
    title: 'Success Stories',
    subtitle: 'Case Studies from Our Portfolio',
    type: 'content',
    points: [
      '$2.5B+ in portfolio company valuations',
      '500+ startups accelerated globally',
      '85% of graduates raise follow-on funding',
    ],
  },
  {
    id: 7,
    title: 'Investment & ROI',
    subtitle: 'Partnership Investment Overview',
    type: 'content',
    points: [
      'Flexible partnership models',
      'Transparent cost structure',
      'Clear success metrics and KPIs',
      'Expected outcomes and timeline',
    ],
  },
  {
    id: 8,
    title: 'Next Steps',
    subtitle: 'Moving Forward Together',
    type: 'closing',
  },
];

export function PreviewDialog({ open, onOpenChange, companyName }: PreviewDialogProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('slides');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(mockSlides.length - 1, prev + 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const slide = mockSlides[currentSlide];

  // Render as a portal-like fullscreen overlay instead of inside Dialog
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background">
      {/* Custom Header */}
      <div className="h-16 border-b border-border bg-white flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm">B</span>
          </div>
          <div>
            <h2 className="text-foreground font-semibold">
              {companyName} - Proposal Preview
            </h2>
            <p className="text-sm text-muted-foreground">
              Review before sharing
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={toggleFullscreen}>
            <Maximize2 className="mr-2 h-4 w-4" />
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </Button>
          <Button variant="outline" onClick={() => window.open('https://drive.google.com/drive/folders/mock', '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in Drive
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden h-[calc(100vh-64px)]">
        <div className="px-6 py-3 border-b border-border bg-muted/30">
          <TabsList className="h-10">
            <TabsTrigger value="slides" className="px-6">
              <Presentation className="mr-2 h-4 w-4" />
              Slides ({mockSlides.length})
            </TabsTrigger>
            <TabsTrigger value="pdf" className="px-6">
              <FileText className="mr-2 h-4 w-4" />
              PDF Document
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Slides Preview */}
        <TabsContent value="slides" className="flex-1 flex flex-col m-0 overflow-hidden">
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/50 relative overflow-hidden">
            {/* Main Slide Display */}
            <div className="w-full max-w-6xl aspect-[16/9] bg-white rounded-xl shadow-2xl mx-8 p-16 flex flex-col relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground text-2xl font-bold">B</span>
                  </div>
                  <div>
                    <div className="text-foreground text-sm tracking-wider uppercase opacity-60">Brinc</div>
                  </div>
                </div>
                <span className="text-muted-foreground text-sm bg-muted/50 px-3 py-1.5 rounded-full">
                  Slide {currentSlide + 1} / {mockSlides.length}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                {slide.type === 'cover' && (
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <h1 className="text-foreground text-5xl font-bold">
                        {slide.title}
                      </h1>
                      <p className="text-muted-foreground text-2xl">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="mt-12 pt-8 border-t border-border/50">
                      <h2 className="text-foreground text-3xl font-semibold mb-2">
                        {companyName}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                )}

                {slide.type === 'content' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-foreground text-4xl font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-muted-foreground text-xl">
                        {slide.subtitle}
                      </p>
                    </div>
                    {slide.points && (
                      <div className="space-y-4 mt-8">
                        {slide.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                            <p className="text-foreground text-xl leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {slide.type === 'timeline' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-foreground text-4xl font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-muted-foreground text-xl">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-8">
                      {['Q1: Planning', 'Q2: Launch', 'Q3: Scale', 'Q4: Optimize'].map((phase, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
                          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3 text-sm font-semibold">
                            {idx + 1}
                          </div>
                          <p className="text-foreground font-medium">{phase}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {slide.type === 'closing' && (
                  <div className="text-center space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-foreground text-4xl font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-muted-foreground text-xl">
                        {slide.subtitle}
                      </p>
                    </div>
                    <div className="mt-12 space-y-6">
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                        <h3 className="text-foreground text-xl font-semibold mb-3">Let's schedule a call</h3>
                        <p className="text-muted-foreground">
                          We're excited to discuss how we can create value together
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-12 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm text-center">
                  Confidential & Proprietary | © {new Date().getFullYear()} Brinc. All rights reserved.
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full shadow-xl disabled:opacity-30"
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full shadow-xl disabled:opacity-30"
              onClick={handleNextSlide}
              disabled={currentSlide === mockSlides.length - 1}
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </div>

          {/* Thumbnail Strip */}
          <div className="h-32 border-t border-border bg-white px-6 py-4 overflow-x-auto">
            <div className="flex gap-3 h-full">
              {mockSlides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`shrink-0 w-40 h-full rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 p-3 ${
                    currentSlide === index
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-xs text-foreground text-center line-clamp-2 leading-tight">
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* PDF Preview */}
        <TabsContent value="pdf" className="flex-1 m-0 overflow-auto bg-muted/30">
          <div className="min-h-full flex items-start justify-center p-8">
            <div className="w-full max-w-4xl bg-white shadow-2xl">
              {/* PDF Header */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground p-16">
                <div className="flex items-start gap-6 mb-8">
                  <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <span className="text-4xl font-bold">B</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm tracking-wider uppercase opacity-80 mb-2">Partnership Proposal</div>
                    <h1 className="text-white text-4xl font-bold mb-4">
                      {companyName}
                    </h1>
                    <p className="text-white/90 text-lg">
                      Building Strategic Value Together
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div className="text-white/80">
                    Prepared by Brinc
                  </div>
                  <div className="text-white/80">
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>

              {/* PDF Content */}
              <div className="p-16 space-y-12">
                {/* Executive Summary */}
                <section className="space-y-4">
                  <h2 className="text-foreground text-3xl font-bold pb-3 border-b-2 border-primary/20">
                    Executive Summary
                  </h2>
                  <p className="text-foreground text-lg leading-relaxed">
                    This proposal outlines a strategic partnership between Brinc and {companyName}. 
                    Our collaboration will leverage Brinc's global acceleration expertise, extensive mentor 
                    network, and proven track record to drive innovation and create measurable business value.
                  </p>
                  <p className="text-foreground text-lg leading-relaxed">
                    Through this partnership, {companyName} will gain access to cutting-edge startup 
                    ecosystems, corporate innovation methodologies, and a portfolio of over 500 high-growth 
                    companies across six continents.
                  </p>
                </section>

                {/* Market Opportunity */}
                <section className="space-y-4">
                  <h2 className="text-foreground text-3xl font-bold pb-3 border-b-2 border-primary/20">
                    Market Opportunity
                  </h2>
                  <p className="text-foreground text-lg leading-relaxed">
                    The global startup ecosystem continues to expand rapidly, with increasing demand for 
                    specialized acceleration programs and corporate innovation partnerships. {companyName} is 
                    uniquely positioned to capitalize on these trends through strategic collaboration with Brinc.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <div className="text-3xl font-bold text-primary mb-2">$2.5B+</div>
                      <div className="text-muted-foreground">Portfolio Valuations</div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-muted-foreground">Startups Accelerated</div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <div className="text-3xl font-bold text-primary mb-2">85%</div>
                      <div className="text-muted-foreground">Funding Success Rate</div>
                    </div>
                  </div>
                </section>

                {/* Partnership Model */}
                <section className="space-y-4">
                  <h2 className="text-foreground text-3xl font-bold pb-3 border-b-2 border-primary/20">
                    Proposed Partnership Model
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">1</span>
                      </div>
                      <div>
                        <h3 className="text-foreground text-xl font-semibold mb-2">Strategic Collaboration</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Joint initiatives leveraging both organizations' strengths to accelerate 
                          startup growth and drive corporate innovation outcomes.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">2</span>
                      </div>
                      <div>
                        <h3 className="text-foreground text-xl font-semibold mb-2">Go-to-Market Synergies</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Co-marketing opportunities, shared brand visibility, and joint thought 
                          leadership to amplify market presence and credibility.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">3</span>
                      </div>
                      <div>
                        <h3 className="text-foreground text-xl font-semibold mb-2">Resource Sharing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Access to mentors, investors, corporate partners, and operational expertise 
                          to maximize program effectiveness and startup success rates.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-primary font-semibold">4</span>
                      </div>
                      <div>
                        <h3 className="text-foreground text-xl font-semibold mb-2">Innovation Pipeline</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Continuous flow of innovative startups and technologies aligned with 
                          {companyName}'s strategic priorities and business objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Implementation Timeline */}
                <section className="space-y-4">
                  <h2 className="text-foreground text-3xl font-bold pb-3 border-b-2 border-primary/20">
                    Implementation Roadmap
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-semibold shrink-0">Q1</div>
                      <div>
                        <div className="text-foreground font-semibold mb-1">Planning & Setup</div>
                        <div className="text-sm text-muted-foreground">
                          Agreement finalization, team alignment, and program design
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-semibold shrink-0">Q2</div>
                      <div>
                        <div className="text-foreground font-semibold mb-1">Program Launch</div>
                        <div className="text-sm text-muted-foreground">
                          Startup recruitment, mentor onboarding, and program kickoff
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-semibold shrink-0">Q3</div>
                      <div>
                        <div className="text-foreground font-semibold mb-1">Scale & Optimize</div>
                        <div className="text-sm text-muted-foreground">
                          Program execution, mentorship sessions, and milestone tracking
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-semibold shrink-0">Q4</div>
                      <div>
                        <div className="text-foreground font-semibold mb-1">Results & Expansion</div>
                        <div className="text-sm text-muted-foreground">
                          Demo day, investor connections, and planning for next cohort
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Next Steps */}
                <section className="space-y-4">
                  <h2 className="text-foreground text-3xl font-bold pb-3 border-b-2 border-primary/20">
                    Next Steps
                  </h2>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/20">
                    <h3 className="text-foreground text-xl font-semibold mb-4">We're Ready to Move Forward</h3>
                    <p className="text-foreground leading-relaxed mb-6">
                      We propose scheduling a follow-up meeting to discuss this proposal in detail, 
                      align on partnership terms, and establish a clear implementation timeline. 
                      Our team is prepared to begin immediately upon agreement.
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xl font-bold">→</span>
                      </div>
                      <div className="text-muted-foreground">
                        Contact us to schedule your partnership discussion
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* PDF Footer */}
              <div className="bg-muted/50 border-t-2 border-border p-8 text-center">
                <div className="text-muted-foreground mb-2">
                  Page 1 of 1 | Confidential & Proprietary
                </div>
                <div className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} Brinc. All rights reserved. | www.brinc.io
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Fullscreen hint */}
      {!isFullscreen && (
        <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-border bg-muted/30 flex items-center justify-center px-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Maximize2 className="h-3 w-3" />
            <span>Click "Fullscreen" button above for the best presentation experience</span>
          </div>
        </div>
      )}
    </div>
  );
}