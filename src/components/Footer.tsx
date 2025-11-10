import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#verification', label: 'Verification' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '(219) 937-9228', href: 'tel:+12199379228' },
    { icon: Mail, text: 'dmisales9228@gmail.com', href: 'mailto:dmisales9228@gmail.com' },
    { icon: MapPin, text: '133 N Indiana Ave, Crown Point, IN 46307', href: null },
  ];

  return (
    <footer className="bg-[hsl(var(--dark-navy))] text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--medical-teal))] to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">DMI Medical</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Medical gas systems for hospitals and healthcare facilities across Illinois and Indiana.
            </p>
            <p className="text-white/60 text-sm mb-6">
              <a href="https://medgassquad.com" className="hover:text-[hsl(var(--medical-teal))] transition-colors duration-200">medgassquad.com</a>
            </p>
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-[hsl(var(--medical-teal))]" />
              <span className="text-xs text-white/60 uppercase tracking-wider">ASSE 6030 Certified</span>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[hsl(var(--medical-teal))] transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Contact</h4>
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <info.icon className="h-5 w-5 text-[hsl(var(--medical-teal))] flex-shrink-0 mt-0.5" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white/70 hover:text-[hsl(var(--medical-teal))] transition-colors duration-300 text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">Certifications</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[hsl(var(--medical-teal))] rounded-full" />
                <span className="text-white/70 text-sm">ASSE 6030 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[hsl(var(--medical-teal))] rounded-full" />
                <span className="text-white/70 text-sm">NFPA-99 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[hsl(var(--medical-teal))] rounded-full" />
                <span className="text-white/70 text-sm">20+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} DMI Medical. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}