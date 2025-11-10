import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '(219) 937-9228',
      link: 'tel:+12199379228',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'dmisales9228@gmail.com',
      link: 'mailto:dmisales9228@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: '133 N Indiana Ave, Crown Point, IN 46307',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[hsl(var(--dark-navy))]">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hospitals and facility managers: reach out for new projects, inspections, or emergency service. Technicians interested in careers can also use this form or email—no phone calls needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-[hsl(var(--medical-teal))]/10 rounded-xl group-hover:bg-[hsl(var(--medical-teal))]/20 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-[hsl(var(--medical-teal))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-[hsl(var(--dark-navy))]">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-[hsl(var(--medical-teal))] transition-colors duration-200"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.detail}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Serving hospitals and healthcare facilities across parts of Illinois and Indiana.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <Card className="border border-gray-100 shadow-xl bg-white">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[hsl(var(--dark-navy))]">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="border-gray-200 focus:border-[hsl(var(--medical-teal))] focus:ring-[hsl(var(--medical-teal))] h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[hsl(var(--dark-navy))]">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="border-gray-200 focus:border-[hsl(var(--medical-teal))] focus:ring-[hsl(var(--medical-teal))] h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="facility" className="block text-sm font-semibold mb-2 text-[hsl(var(--dark-navy))]">
                      Facility Name
                    </label>
                    <Input
                      id="facility"
                      placeholder="Hospital or healthcare facility"
                      className="border-gray-200 focus:border-[hsl(var(--medical-teal))] focus:ring-[hsl(var(--medical-teal))] h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[hsl(var(--dark-navy))]">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, inspection needs, or emergency service request"
                      rows={5}
                      required
                      className="border-gray-200 focus:border-[hsl(var(--medical-teal))] focus:ring-[hsl(var(--medical-teal))] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[hsl(var(--medical-teal))] text-white hover:bg-[hsl(var(--medical-teal))]/90 font-semibold text-base py-7 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}