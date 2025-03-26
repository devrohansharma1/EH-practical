import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { labs } from "@/lib/labs";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-dark-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center md:text-left md:max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ethical Hacking <span className="text-primary">Practical Lab</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A comprehensive cybersecurity training platform with hands-on labs and in-depth guides for security professionals and enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/lab/reconnaissance">
                  <span className="flex items-center">
                    <i className="ri-shield-check-line mr-2"></i>
                    Start Learning
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources">
                  <span className="flex items-center">
                    <i className="ri-download-2-line mr-2"></i>
                    Download Resources
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Labs overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Practical Lab Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of hands-on ethical hacking labs designed to build your cybersecurity skills through practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <Card key={lab.id} className="bg-dark-800 border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/20 text-primary h-10 w-10 rounded-lg flex items-center justify-center">
                    <i className={`${lab.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold">{lab.shortTitle}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {lab.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <i className="ri-time-line mr-1"></i>
                    <span>{lab.duration.replace('Approximately ', '')}</span>
                  </div>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/lab/${lab.id}`}>View Lab</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features section */}
      <div className="bg-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lab Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive tools and resources to enhance your learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 text-primary h-14 w-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-box-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive Code</h3>
              <p className="text-muted-foreground text-sm">
                Copyable code snippets with syntax highlighting for easy implementation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 text-primary h-14 w-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-terminal-box-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Terminal Commands</h3>
              <p className="text-muted-foreground text-sm">
                Clear terminal instructions with step-by-step guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 text-primary h-14 w-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-download-2-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Downloadable Scripts</h3>
              <p className="text-muted-foreground text-sm">
                Ready-to-use scripts and tools for practical implementation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/20 text-primary h-14 w-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Search</h3>
              <p className="text-muted-foreground text-sm">
                Quickly find specific content across all laboratories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-primary/30 to-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your cybersecurity skills?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start with our comprehensive ethical hacking practical labs and build your expertise in cybersecurity.
          </p>
          <Button size="lg" asChild>
            <Link href="/lab/reconnaissance">Begin Your Journey</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
