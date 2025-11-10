import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2, Users } from 'lucide-react';

export default function Careers() {
  const benefits = [
    'Competitive pay structure with mileage and travel support for Midwest hospital assignments',
    'Paid classroom and on-the-job training toward ASSE 6030 medical gas verifier certification',
    'Hands-on work in life-support gas systems: outlets, alarms, manifolds, compressors, and vacuum pumps',
    'Company vehicle, tools, and safety gear provided for field service calls and verification work',
    'Stable, long-term demand from hospitals and healthcare facilities across Illinois and Indiana',
  ];

  return (
    <section id="careers" className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--medical-teal))]/10 rounded-full">
              <span className="text-sm font-semibold text-[hsl(var(--medical-teal))] uppercase tracking-wide">
                Careers
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[hsl(var(--dark-navy))]">
              Join Our Medical Gas Field Technicians
            </h2>

            {/* Story Paragraph */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                DMI Medical technicians build, inspect, and service life-support medical gas systems in hospitals and surgical centers across the Midwest. Work includes installing outlets and manifolds, calibrating alarms, verifying compressors and vacuum pumps, and documenting every test for NFPA-99.
              </p>
              <p>
                This field role is safety-critical and travel-based: crews drive to Illinois and Indiana facilities, coordinate with clinical engineering teams, and keep ASSE 6030 standards at the center of every job. If you’re detailed, mechanically strong, and ready to protect patient care, we want to hear from you.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-[hsl(var(--medical-teal))] hover:bg-[hsl(var(--medical-teal))]/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="/careers/open-roles">
                  View Open Roles
                  <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Benefits Card & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-8"
          >
            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-[hsl(var(--medical-teal))]/20 to-[hsl(var(--dark-navy))]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[hsl(var(--medical-teal))]/30 shadow-lg">
                  <Users className="h-16 w-16 text-[hsl(var(--medical-teal))]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[hsl(var(--medical-teal))] rounded-lg opacity-80" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[hsl(var(--dark-navy))] rounded-md opacity-60" />
              </div>
            </div>

            {/* Benefits Card */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 bg-white overflow-hidden">
              <CardContent className="p-8">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                  <div className="p-2 bg-[hsl(var(--medical-teal))]/10 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--medical-teal))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--dark-navy))]">
                    Why Work With Us
                  </h3>
                </div>

                {/* Benefits List */}
                <ul className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-[hsl(var(--medical-teal))] rounded-full group-hover/item:scale-150 transition-transform duration-300" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed group-hover/item:text-[hsl(var(--dark-navy))] transition-colors duration-300">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}