import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, Shield } from 'lucide-react';

export default function Verification() {
  const { ref, controls } = useScrollAnimation(0.2);

  const timelineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const timelineSteps = [
    { 
      title: 'Review Drawings and Submittals', 
      description: 'We review installation drawings and submittals to verify the system design meets NFPA-99 requirements before construction begins. This pre-construction review helps identify potential compliance issues early.' 
    },
    { 
      title: 'Perform Pipeline Pressure Tests', 
      description: 'We perform pressure tests and leak tests on all medical gas pipelines to verify pipeline integrity. This includes testing oxygen, vacuum, medical air, and other gas lines according to NFPA-99 standards.' 
    },
    { 
      title: 'Verify Alarms and Outlets', 
      description: 'We inspect and test all outlets, alarms, and source equipment to ensure proper operation. Each outlet is verified for correct gas delivery, and alarms are tested to confirm they function as designed.' 
    },
    { 
      title: 'Issue Documentation and Reports', 
      description: 'We provide complete documentation and verification reports for your facility records. This includes test results, inspection findings, and certification documentation required for NFPA-99 compliance.' 
    },
  ];

  return (
    <section id="verification" className="section relative bg-white overflow-hidden">
      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-[hsl(var(--medical-teal))]/10 rounded-full">
              <Shield className="h-5 w-5 text-[hsl(var(--medical-teal))]" />
              <span className="text-sm font-semibold text-[hsl(var(--medical-teal))] uppercase tracking-wide">
                ASSE 6030 / NFPA-99
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
              Credentialed Medical Gas Verification
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                NFPA-99 requires that new or modified medical gas systems be inspected and tested by credentialed verifiers before use. Inspections must be performed by ASSE 6030/6035 certified medical gas verifiers who understand the code requirements and testing procedures.
              </p>
              <p>
                A thorough verification includes reviewing installation drawings, visually inspecting the system, performing pressure and leak tests on pipelines, checking alarms and outlets, and documenting results for your facility records. DMI provides both pre-construction review and final on-site verification.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={timelineVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Animated timeline line */}
            <motion.div
              variants={lineVariants}
              className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--medical-teal))] to-[hsl(var(--dark-navy))] origin-top"
            />
            
            <div className="space-y-10">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-20 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-2 h-14 w-14 bg-white border-[5px] border-[hsl(var(--medical-teal))] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-7 w-7 text-[hsl(var(--medical-teal))]" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="font-bold text-xl mb-3 text-[hsl(var(--dark-navy))]">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}