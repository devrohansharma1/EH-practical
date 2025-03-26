import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { labs } from "@/lib/labs";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLabs = labs.filter(lab => 
    lab.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lab.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-full md:w-64 bg-dark-800 border-r border-border md:flex md:flex-col fixed inset-y-0 z-20 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:h-screen md:sticky md:top-0`}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="bg-primary rounded-lg p-1.5">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="15" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-lg font-semibold">EH Practicals</h1>
            </div>
          </Link>
          <button 
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={toggleSidebar}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search practicals..." 
              className="w-full pl-10 bg-background/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <ScrollArea className="h-[calc(100vh-13rem)]">
            <nav>
              <div className="mb-4">
                <h3 className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-2">Practical Labs</h3>
                <ul className="space-y-1">
                  {filteredLabs.map((lab) => (
                    <li key={lab.id}>
                      <Link href={`/lab/${lab.id}`}>
                        <a className={`flex items-center px-3 py-2 text-sm rounded-md 
                          ${location === `/lab/${lab.id}` 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-foreground/80 hover:bg-secondary hover:text-foreground'}`}
                        >
                          <i className={`${lab.icon} mr-3`}></i>
                          <span>{lab.number}. {lab.shortTitle}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xs uppercase text-muted-foreground font-semibold tracking-wider mb-2">Resources</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/resources">
                      <a className={`flex items-center px-3 py-2 text-sm rounded-md 
                        ${location === '/resources'
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-foreground/80 hover:bg-secondary hover:text-foreground'}`}
                      >
                        <i className="ri-download-2-line mr-3"></i>
                        <span>Downloads</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation">
                      <a className={`flex items-center px-3 py-2 text-sm rounded-md 
                        ${location === '/documentation'
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-foreground/80 hover:bg-secondary hover:text-foreground'}`}
                      >
                        <i className="ri-book-2-line mr-3"></i>
                        <span>Documentation</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="flex items-center px-3 py-2 text-sm rounded-md text-foreground/80 hover:bg-secondary hover:text-foreground">
                        <i className="ri-question-line mr-3"></i>
                        <span>Support</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </ScrollArea>
        </div>
        
        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback className="bg-primary/70 text-white">RS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Rohan Sharma</p>
                <p className="text-xs text-muted-foreground">Security Analyst</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <i className="ri-logout-box-r-line"></i>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button 
        className="fixed bottom-4 right-4 md:hidden z-10 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </>
  );
}
