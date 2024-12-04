export default function Footer() {
    const socialLinks = [
      { href: 'https://github.com', label: 'GitHub' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
      { href: 'https://twitter.com', label: 'Twitter' },
    ];
  
    return (
      <footer className="bg-background text-text py-6">
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-primary hover:text-secondary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-center mt-4 text-sm">© 2024 Harsh Gupta. All rights reserved.</p>
      </footer>
    );
  }
  