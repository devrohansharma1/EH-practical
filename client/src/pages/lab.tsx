import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/layout/Header";
import CodeBlock from "@/components/ui/code-block";
import Terminal from "@/components/ui/terminal";
import LabStats from "@/components/ui/lab-stats";
import StepList from "@/components/ui/step-list";
import TopicList from "@/components/ui/topic-list";
import { getLabById, getNextLab } from "@/lib/labs";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

export default function Lab() {
  const { labId } = useParams();
  const lab = getLabById(labId || '');
  const nextLab = getNextLab(labId || '');

  useEffect(() => {
    // Scroll to top when lab changes
    window.scrollTo(0, 0);
  }, [labId]);

  if (!lab) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <h1 className="text-xl font-bold">Lab Not Found</h1>
            </div>
            <p className="text-muted-foreground mb-4">
              The lab you're looking for doesn't exist or may have been moved.
            </p>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderWarning = (
    warning: { type: 'info' | 'warning' | 'danger'; title: string; content: string; }
  ) => {
    const alertStyles = {
      info: {
        bg: 'bg-primary/10',
        border: 'border-primary',
        icon: <Info className="h-5 w-5 text-primary" />
      },
      warning: {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500',
        icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
      },
      danger: {
        bg: 'bg-destructive/10',
        border: 'border-destructive',
        icon: <AlertCircle className="h-5 w-5 text-destructive" />
      }
    };

    const style = alertStyles[warning.type];

    return (
      <Alert className={`${style.bg} border-l-4 ${style.border}`}>
        <div className="flex items-start">
          {style.icon}
          <div className="ml-3">
            <AlertTitle>{warning.title}</AlertTitle>
            <AlertDescription>{warning.content}</AlertDescription>
          </div>
        </div>
      </Alert>
    );
  };

  return (
    <>
      <Header title={lab.title} hasNotifications={false} />
      
      <div className="p-6">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary h-10 w-10 rounded-lg flex items-center justify-center">
              <i className={`${lab.icon} text-white text-xl`}></i>
            </div>
            <h1 className="text-2xl font-bold">{lab.title}</h1>
          </div>
          
          <p className="text-gray-300 mb-6">
            {lab.description}
          </p>
          
          {/* Removed the Lab Stats and buttons as requested */}
        </div>
        
        {/* Table of Contents */}
        <Card className="mb-8">
          <CardContent className="p-5">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-2">
              {lab.sections.map((section, index) => (
                <li key={section.id} className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">{index + 1}.</span>
                  <a href={`#${section.id}`} className="text-muted-foreground hover:text-primary">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        
        {/* Content Sections */}
        {lab.sections.map((section, index) => (
          <section key={section.id} id={section.id} className="mb-10">
            <Card className="mb-4">
              <CardContent className="p-5">
                <h2 className="text-xl font-bold mb-4">{index + 1}. {section.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {section.content}
                </p>
                
                {section.subsections?.map((subsection, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">{subsection.title}</h3>
                    
                    <div className="text-muted-foreground mb-4">
                      {subsection.content}
                    </div>
                    
                    {subsection.steps && (
                      <StepList steps={subsection.steps} className="mb-4" />
                    )}
                    
                    {subsection.code && (
                      <CodeBlock 
                        code={subsection.code}
                        language={subsection.language}
                        className="mb-4"
                      />
                    )}
                    
                    {subsection.terminal && (
                      <Terminal command={subsection.terminal} className="mb-4" />
                    )}
                    
                    {subsection.warning && (
                      <div className="mb-4">
                        {renderWarning(subsection.warning)}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        ))}
        
        {/* Next Steps */}
        {nextLab && (
          <Card className="bg-primary/10 border-primary mb-8">
            <CardContent className="p-5">
              <h2 className="text-xl font-bold mb-4">Next Steps</h2>
              <p className="text-muted-foreground mb-4">
                Now that you've completed the {lab.title} module, you can proceed to the next practical lab:
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Practical #{nextLab.number}: {nextLab.title}</h3>
                  <p className="text-muted-foreground text-sm">{nextLab.description.split('.')[0]}.</p>
                </div>
                <Button asChild>
                  <Link href={`/lab/${nextLab.id}`}>
                    Continue to Next Lab
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Feedback section removed as requested */}
      </div>
    </>
  );
}
