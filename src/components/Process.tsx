import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, Calendar, Wrench } from 'lucide-react';

export default function Process() {
  const { ref, controls } = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Site Review & Assessment',
      description: 'We discuss your scope of work, review installation drawings, and understand your clinical needs. We survey existing medical gas systems to assess current conditions and identify requirements.',
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Planning & Coordination',
      description: 'We develop the scope of work, coordinate shutdown windows with your facility team, and order materials. We align our schedule with hospital safety protocols and infection control requirements.',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Execution & Verification',
      description: 'We perform installation or repairs, test all systems, and complete NFPA-99 verification. We provide complete documentation and handoff reports for your facility records.',
    },
  ];

  return (
    <section id="process" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="wrapper relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[hsl(var(--medical-teal))]/10 rounded-full">
            <span className="text-sm font-semibold text-[hsl(var(--medical-teal))] uppercase tracking-wide">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            How We Work With Your Facility
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From initial site review through final verification, we coordinate with your facility team to minimize disruption and ensure compliance.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connector Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gray-200">
            <motion.div
              variants={lineVariants}
              className="h-full bg-gradient-to-r from-[hsl(var(--medical-teal))] via-[hsl(var(--medical-teal))] to-[hsl(var(--dark-navy))] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group min-h-[360px] flex flex-col">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[hsl(var(--medical-teal))] group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[hsl(var(--medical-teal))] font-bold text-xl">{step.number}</span>
                      </div>
                      <div className="absolute inset-0 bg-[hsl(var(--medical-teal))]/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mt-10 mb-6">
                    <div className="inline-flex p-4 bg-[hsl(var(--medical-teal))]/10 rounded-xl group-hover:bg-[hsl(var(--medical-teal))]/20 transition-all duration-300 group-hover:scale-105">
                      <step.icon className="h-8 w-8 text-[hsl(var(--medical-teal))]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-4 text-[hsl(var(--dark-navy))] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile connector arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[hsl(var(--medical-teal))] to-[hsl(var(--dark-navy))]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground text-lg">
            Ready to get started?{' '}
            <a href="#contact" className="text-[hsl(var(--medical-teal))] font-semibold hover:underline transition-colors duration-200">
              Schedule a consultation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}