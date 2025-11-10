import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const stats = [
    { end: 20, suffix: '+', label: 'Years Serving Midwest Hospitals', description: 'Started as an industrial compressor shop and evolved into dedicated medical gas specialists' },
    { end: 150, suffix: '+', label: 'Hospitals & Healthcare Campuses Supported', description: 'Design, installation, and service work across Illinois and Indiana critical-care environments' },
    { end: 100, suffix: '%', label: 'NFPA-99 & ASSE 6030 Verifications Delivered', description: 'Compliance documentation for outlets, manifolds, alarms, compressors, and vacuum pumps' },
  ];

  return (
    <section id="stats" ref={ref} className="section bg-[hsl(var(--dark-navy))] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>
      
      <div className="wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Built on Trust and Precision
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed space-y-4">
            DMI Medical began in Crown Point rebuilding industrial compressors before hospitals asked us to design and install their life-support gas systems.
            Decades later, our ASSE-certified technicians still route copper pipelines, commission equipment, and document every outlet, manifold, alarm, and compressor to NFPA-99.
            We stay embedded with facility teams across Illinois and Indiana so safety records stay clean and medical gas infrastructure is always ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="mb-8">
                <span className="block text-7xl md:text-8xl font-bold text-[hsl(var(--medical-teal))] mb-2 tabular-nums">
                  {inView ? <CountUp end={stat.end} duration={2.5} /> : '0'}
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-white/60 leading-relaxed text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}