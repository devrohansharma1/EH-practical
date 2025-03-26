import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import CodeBlock from "@/components/ui/code-block";

export default function Documentation() {
  return (
    <>
      <Header title="Documentation" hasNotifications={false} />
      
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Documentation & Guides</h1>
          <p className="text-muted-foreground mb-6">
            Comprehensive documentation for tools, techniques, and best practices used in our ethical hacking labs.
          </p>
        </div>
        
        <Tabs defaultValue="tools" className="space-y-6">
          <div className="border-b border-border">
            <ScrollArea className="whitespace-nowrap py-2">
              <TabsList className="bg-transparent">
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="techniques">Techniques</TabsTrigger>
                <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
                <TabsTrigger value="terminology">Terminology</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
            </ScrollArea>
          </div>
          
          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Essential Ethical Hacking Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Reconnaissance Tools</h3>
                    <ul className="space-y-3">
                      <li>
                        <div className="font-medium">Whois</div>
                        <p className="text-sm text-muted-foreground">Domain registration lookup tool for gathering ownership information.</p>
                      </li>
                      <li>
                        <div className="font-medium">Nmap</div>
                        <p className="text-sm text-muted-foreground">Network mapper for discovering hosts and services on computer networks.</p>
                      </li>
                      <li>
                        <div className="font-medium">Shodan</div>
                        <p className="text-sm text-muted-foreground">Search engine for internet-connected devices and systems.</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Traffic Analysis Tools</h3>
                    <ul className="space-y-3">
                      <li>
                        <div className="font-medium">Wireshark</div>
                        <p className="text-sm text-muted-foreground">Network protocol analyzer for detailed packet inspection.</p>
                      </li>
                      <li>
                        <div className="font-medium">Tcpdump</div>
                        <p className="text-sm text-muted-foreground">Command-line packet analyzer for capturing network traffic.</p>
                      </li>
                      <li>
                        <div className="font-medium">Burp Suite</div>
                        <p className="text-sm text-muted-foreground">Web vulnerability scanner and proxy for application security testing.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Common Wireshark Filters</h3>
                  <CodeBlock 
                    code={`# HTTP traffic only
http

# Traffic to or from a specific IP address
ip.addr == 192.168.1.1

# DNS queries
dns.flags.response == 0

# Failed HTTP responses (4xx and 5xx)
http.response.code >= 400

# TCP SYN packets (connection establishment)
tcp.flags.syn == 1 and tcp.flags.ack == 0`}
                    language="bash"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tool Installation Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Installing CrypTool</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        <p className="text-muted-foreground">Download the latest version of CrypTool from the official website.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Run the installer executable and follow the setup wizard.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Select your preferred language and accept the license agreement.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Choose the installation directory and click Install.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Once installed, launch CrypTool from the desktop shortcut or start menu.</p>
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Setting up DVWA</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        <p className="text-muted-foreground">Install a local web server environment like XAMPP or WAMP.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Download DVWA from the official GitHub repository.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Extract the files to your web server's document root.</p>
                      </li>
                      <li>
                        <p className="text-muted-foreground">Rename the config file and update the database settings.</p>
                        <CodeBlock 
                          code={`# Navigate to the DVWA directory
cd /path/to/dvwa

# Copy the config file
cp config/config.inc.php.dist config/config.inc.php

# Edit the database configuration
# Set the following values:
# $_DVWA[ 'db_server' ] = '127.0.0.1';
# $_DVWA[ 'db_database' ] = 'dvwa';
# $_DVWA[ 'db_user' ] = 'root';
# $_DVWA[ 'db_password' ] = '';`}
                          language="bash"
                        />
                      </li>
                      <li>
                        <p className="text-muted-foreground">Create the database and visit the setup page to complete installation.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="techniques" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Reconnaissance Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This section covers advanced techniques for gathering information without direct interaction with target systems.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Passive OSINT Gathering</h3>
                  <p className="text-muted-foreground mb-3">
                    Open Source Intelligence (OSINT) involves collecting information from publicly available sources:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Social media profiling</li>
                    <li>Company employee directories</li>
                    <li>Public code repositories</li>
                    <li>Domain registration history</li>
                    <li>Search engine cached data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Subdomain Enumeration</h3>
                  <p className="text-muted-foreground mb-3">
                    Techniques for discovering subdomains of a target domain:
                  </p>
                  <CodeBlock 
                    code={`# Using Google dorks for subdomain discovery
site:*.example.com -www

# Using the Sublist3r tool
sublist3r -d example.com -o example_subdomains.txt

# Using DNS brute force with dnsmap
dnsmap example.com -w /path/to/wordlist.txt

# Certificate Transparency logs
curl -s "https://crt.sh/?q=%.example.com&output=json" | jq -r '.[].name_value' | sort -u`}
                    language="bash"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="best-practices">
            <Card>
              <CardHeader>
                <CardTitle>Ethical Hacking Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Legal Compliance</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <div className="font-medium">Always Obtain Written Permission</div>
                        <p className="text-sm">Secure explicit written authorization before testing any system.</p>
                      </li>
                      <li>
                        <div className="font-medium">Define Clear Scope Boundaries</div>
                        <p className="text-sm">Clearly document which systems are in-scope and out-of-scope.</p>
                      </li>
                      <li>
                        <div className="font-medium">Know Local Laws and Regulations</div>
                        <p className="text-sm">Research applicable cyber laws in your jurisdiction and target's location.</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Documentation Practices</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <div className="font-medium">Maintain Detailed Records</div>
                        <p className="text-sm">Log all testing activities with timestamps and methodologies.</p>
                      </li>
                      <li>
                        <div className="font-medium">Secure Storage of Findings</div>
                        <p className="text-sm">Encrypt sensitive test results and vulnerability information.</p>
                      </li>
                      <li>
                        <div className="font-medium">Clear Reporting Format</div>
                        <p className="text-sm">Use standardized templates for consistent vulnerability reporting.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary">
                  <h3 className="text-lg font-semibold mb-2">Responsible Disclosure Protocol</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                    <li>Contact the organization through official security channels</li>
                    <li>Provide clear documentation of the vulnerability</li>
                    <li>Allow reasonable time for remediation (typically 30-90 days)</li>
                    <li>Maintain confidentiality during the disclosure process</li>
                    <li>Seek permission before publishing any findings</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="terminology">
            <Card>
              <CardHeader>
                <CardTitle>Cybersecurity Terminology Glossary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Reconnaissance Terms</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="font-medium">Footprinting</dt>
                        <dd className="text-sm text-muted-foreground">The process of gathering information about a target system.</dd>
                      </div>
                      <div>
                        <dt className="font-medium">OSINT</dt>
                        <dd className="text-sm text-muted-foreground">Open Source Intelligence - collecting information from publicly available sources.</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Passive Reconnaissance</dt>
                        <dd className="text-sm text-muted-foreground">Gathering information without directly interacting with the target.</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Active Reconnaissance</dt>
                        <dd className="text-sm text-muted-foreground">Directly interacting with the target to gather information.</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Attack Terminology</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="font-medium">XSS (Cross-Site Scripting)</dt>
                        <dd className="text-sm text-muted-foreground">An attack where malicious scripts are injected into trusted websites.</dd>
                      </div>
                      <div>
                        <dt className="font-medium">DoS (Denial of Service)</dt>
                        <dd className="text-sm text-muted-foreground">An attack aimed at shutting down a system, making it inaccessible to users.</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Payload</dt>
                        <dd className="text-sm text-muted-foreground">The component of malware that executes the malicious action.</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Zero-day Exploit</dt>
                        <dd className="text-sm text-muted-foreground">An attack that targets a previously unknown vulnerability.</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Encryption Terminology</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-medium">Symmetric Encryption</dt>
                      <dd className="text-sm text-muted-foreground">Uses the same key for encryption and decryption (e.g., AES, DES).</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Asymmetric Encryption</dt>
                      <dd className="text-sm text-muted-foreground">Uses different keys for encryption and decryption (e.g., RSA, ECC).</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Hashing</dt>
                      <dd className="text-sm text-muted-foreground">A one-way function that converts data into a fixed-length string (e.g., SHA-256, MD5).</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Salt</dt>
                      <dd className="text-sm text-muted-foreground">Random data added to a password before hashing to prevent rainbow table attacks.</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">General Questions</h3>
                  <div className="space-y-4">
                    <div className="border-b border-border pb-4">
                      <h4 className="font-medium mb-1">Is ethical hacking legal?</h4>
                      <p className="text-sm text-muted-foreground">
                        Ethical hacking is legal when performed with explicit permission from the system owner. Unauthorized hacking, even with good intentions, can violate laws like the Computer Fraud and Abuse Act.
                      </p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-medium mb-1">What's the difference between ethical hacking and penetration testing?</h4>
                      <p className="text-sm text-muted-foreground">
                        Ethical hacking is a broad field that covers all aspects of security testing with permission. Penetration testing is a specific type of ethical hacking that simulates real-world attacks to identify vulnerabilities.
                      </p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-medium mb-1">What certifications are recommended for ethical hacking?</h4>
                      <p className="text-sm text-muted-foreground">
                        Popular certifications include CEH (Certified Ethical Hacker), OSCP (Offensive Security Certified Professional), CompTIA PenTest+, and GIAC Penetration Tester (GPEN).
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Questions</h3>
                  <div className="space-y-4">
                    <div className="border-b border-border pb-4">
                      <h4 className="font-medium mb-1">How can I set up a safe environment for practicing ethical hacking?</h4>
                      <p className="text-sm text-muted-foreground">
                        Create an isolated lab environment using virtualization software like VirtualBox or VMware. Practice on vulnerable machines designed for learning, such as DVWA, Metasploitable, or VulnHub images.
                      </p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-medium mb-1">What operating system is best for ethical hacking?</h4>
                      <p className="text-sm text-muted-foreground">
                        Kali Linux is specifically designed for penetration testing and ethical hacking with pre-installed tools. Other options include Parrot OS, BlackArch Linux, and BackBox.
                      </p>
                    </div>
                    <div className="border-b border-border pb-4">
                      <h4 className="font-medium mb-1">Are there legal alternatives to practice my skills?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can participate in bug bounty programs, CTF (Capture The Flag) competitions, or use platforms like HackTheBox, TryHackMe, and PortSwigger Web Security Academy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
