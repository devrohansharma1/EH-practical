import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-border py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-primary rounded-lg p-1.5 mr-3">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="15" r="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Ethical Hacking Practical Lab. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#">
            <a className="text-muted-foreground hover:text-foreground">
              <i className="ri-github-fill text-xl"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="text-muted-foreground hover:text-foreground">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="text-muted-foreground hover:text-foreground">
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="text-muted-foreground hover:text-foreground">
              <i className="ri-discord-fill text-xl"></i>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
