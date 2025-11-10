import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[800px] flex items-center overflow-hidden"
    >
      {/* Background image - fixed position to prevent jitter */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/assets/hero-background-pipelines.jpg')" }}
      />
      
      {/* Clean dark overlay for text readability */}
      <div className="absolute inset-0 bg-[hsl(var(--dark-navy))]/75" />
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-[hsl(var(--medical-teal))]/20 backdrop-blur-sm border border-[hsl(var(--medical-teal))]/30 rounded-full text-[hsl(var(--medical-teal))] text-sm font-semibold tracking-wide uppercase">
                MIDWEST MEDICAL GAS SPECIALISTS
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Life-Support Medical Gas Systems.
              <br />
              Zero Compromise.
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Design, installation, and maintenance of medical gas pipeline systems with ASSE 6030 / NFPA-99 compliant verification for hospitals and healthcare facilities across Illinois and Indiana.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-[hsl(var(--medical-teal))] text-white hover:bg-[hsl(var(--medical-teal))]/90 font-semibold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#services" className="flex items-center gap-2">
                  Our Expertise
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-[hsl(var(--dark-navy))] font-semibold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#contact">Schedule a Call</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}