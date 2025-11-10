import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="section cta hero-overlay bg-gradient-to-br from-[hsl(var(--dark-navy))] via-[hsl(var(--dark-navy))] to-[hsl(var(--dark-navy))]/95 overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium text-white/90 uppercase tracking-wide">
              Ready to Talk?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            New installs, annual ASSE 6030 verification, and emergency repair—let’s plan your next step.
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            These are life-support gas systems: DMI Medical handles the technical load so your outlets, alarms, manifolds, compressors, and vacuum pumps stay compliant and available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-[hsl(var(--medical-teal))] text-white hover:bg-[hsl(var(--medical-teal))]/90 font-semibold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]"
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                Schedule a Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[180px]"
            >
              <a href="tel:+12199379228" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}