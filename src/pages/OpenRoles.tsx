import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Mail, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const jobListings = [
  {
    id: 'field-service-inspector',
    title: 'Field Service Inspector / Technician',
    location: 'Crown Point, IN (Travel Required)',
    type: 'Full-time',
    summary: 'Install, inspect, and maintain medical gas pipeline systems for hospitals across Illinois and Indiana.',
    overview: 'DMI Medical is hiring a Field Service Inspector / Technician to join our medical gas systems team. You will travel to hospitals and healthcare facilities to install, inspect, verify, and repair life-support gas systems including oxygen, vacuum, medical air, nitrous oxide, nitrogen, and instrument air.',
    responsibilities: [
      'Perform ASSE 6030 / NFPA-99 inspections on medical gas outlets, manifolds, alarms, zone valves, and source equipment',
      'Install and maintain compressors, vacuum pumps, dryers, manifolds, alarm panels, and pipeline components',
      'Conduct pressure tests, cross-connection checks, alarm calibration, and medical air purity sampling',
      'Complete field documentation, inspection reports, and corrective action plans for facility records',
      'Respond to emergency service calls for leaks, alarm faults, and equipment failures',
      'Coordinate with hospital facility teams, clinical engineering, and infection control during shutdowns',
    ],
    requirements: [
      'Mechanical aptitude and experience with tools, brazing, or plumbing/HVAC systems preferred',
      "Valid driver's license and ability to travel throughout Illinois and Indiana (mileage reimbursed)",
      'Willingness to work in hospital environments and around patients',
      'Strong attention to detail for safety-critical, code-compliance work',
    ]
    ,
    education: 'High school diploma or equivalent required. Technical training or certification in mechanical systems, plumbing, or HVAC is a plus but not required—DMI provides on-the-job training and supports ASSE 6030 certification.',
    compensation: 'Competitive hourly wage based on experience, mileage reimbursement, paid training toward ASSE 6030 certification, company vehicle and tools provided for field work.',
  },
  {
    id: 'inside-sales-support',
    title: 'Inside Sales Support (Construction)',
    location: 'Crown Point, IN',
    type: 'Full-time',
    summary: 'Support project quoting, material ordering, and customer coordination for medical gas construction projects.',
    overview: 'DMI Medical is seeking an Inside Sales Support team member to assist with medical gas construction projects. You will work with our project team to prepare quotes, order materials, coordinate with customers and suppliers, and support field crews on installations and renovations.',
    responsibilities: [
      'Prepare quotes and material take-offs for medical gas pipeline installation projects',
      'Order outlets, manifolds, alarms, zone valves, compressors, vacuum pumps, and related equipment',
      'Coordinate with suppliers, manufacturers, and distributors to ensure on-time delivery',
      'Communicate with hospital facility managers and contractors regarding project schedules and materials',
      'Track orders, manage inventory, and ensure field crews have the parts needed for installations',
      'Support project documentation, submittal packages, and close-out materials',
    ],
    requirements: [
      'Experience in construction, mechanical systems, or inside sales/customer service',
      'Strong organizational skills and attention to detail for managing multiple projects',
      'Comfortable using phone, email, and basic software (Excel, project management tools, etc.)',
      'Ability to read construction drawings and material specifications (training provided)',
      'Good communication skills for working with customers, suppliers, and field teams',
      'Willingness to learn medical gas systems, NFPA-99 requirements, and ASSE product standards',
    ],
    education: 'High school diploma or equivalent required. Associate degree or technical training in construction, engineering, or business is a plus.',
    compensation: 'Competitive salary, benefits, and opportunities for growth within a small, specialized team.',
  },
];

export default function OpenRoles() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
    if (expandedJob !== jobId) {
      setTimeout(() => {
        document.getElementById(`job-${jobId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--light-gray-bg))]">
      <Navigation />
      
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="section section--tight bg-gradient-to-br from-[hsl(var(--dark-navy))] via-[hsl(var(--dark-navy))] to-[hsl(var(--dark-navy))]/95 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              className="absolute top-0 left-0 w-full h-full" 
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '48px 48px'
              }}
            />
          </div>

          <div className="wrapper relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <a href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Careers at DMI Medical
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Join our team of medical gas field service technicians and support staff. Work on life-support systems that hospitals depend on, with training, growth opportunities, and stable relationships across the Midwest.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Open Roles */}
        <section className="section bg-white">
          <div className="wrapper">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[hsl(var(--medical-teal))]/10 rounded-full">
                <Briefcase className="h-5 w-5 text-[hsl(var(--medical-teal))]" />
                <span className="text-sm font-semibold text-[hsl(var(--medical-teal))] uppercase tracking-wide">
                  Current Openings
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[hsl(var(--dark-navy))]">
                Open Positions
              </h2>
            </motion.div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[hsl(var(--dark-navy))]">{job.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[hsl(var(--medical-teal))]/10 text-[hsl(var(--medical-teal))] rounded-full text-sm font-medium">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {job.summary}
                      </p>
                      
                      <Button
                        variant="outline"
                        className="w-full group hover:bg-[hsl(var(--medical-teal))]/5 hover:border-[hsl(var(--medical-teal))]"
                        onClick={() => toggleJob(job.id)}
                      >
                        {expandedJob === job.id ? 'Hide' : 'View'} Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Full Job Descriptions */}
            {jobListings.map((job) => (
              expandedJob === job.id && (
                <motion.div
                  key={job.id}
                  id={`job-${job.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <Card className="border-2 border-[hsl(var(--medical-teal))]/20 shadow-xl bg-white">
                    <CardContent className="p-8 md:p-12">
                      <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--dark-navy))]">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className="inline-flex items-center gap-1 px-4 py-2 bg-[hsl(var(--medical-teal))]/10 text-[hsl(var(--medical-teal))] rounded-lg font-medium">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">Overview</h3>
                          <p className="text-muted-foreground leading-relaxed">{job.overview}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">What You'll Do</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            {job.responsibilities.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[hsl(var(--medical-teal))] mt-1.5">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">What We're Looking For</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            {job.requirements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[hsl(var(--medical-teal))] mt-1.5">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">Education</h3>
                          <p className="text-muted-foreground leading-relaxed">{job.education}</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">Compensation & Benefits</h3>
                          <p className="text-muted-foreground leading-relaxed">{job.compensation}</p>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">How to Apply</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            To apply for this position, please email your resume to <a href="mailto:dmisales9228@gmail.com" className="text-[hsl(var(--medical-teal))] font-semibold hover:underline">dmisales9228@gmail.com</a> with the subject line "{job.title} Application". 
                            Please do not call—we review applications and respond directly to qualified candidates.
                          </p>
                          <Button
                            asChild
                            size="lg"
                            className="bg-[hsl(var(--medical-teal))] text-white hover:bg-[hsl(var(--medical-teal))]/90 font-semibold"
                          >
                            <a href="mailto:dmisales9228@gmail.com?subject=Application: Field Service Inspector / Technician" className="inline-flex items-center gap-2">
                              <Mail className="h-5 w-5" />
                              Email Your Application
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}

            {/* General Application Info */}
            {!expandedJob && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl mx-auto text-center"
              >
                <Card className="border border-gray-200 bg-gray-50/50">
                  <CardContent className="p-8">
                    <Mail className="h-12 w-12 text-[hsl(var(--medical-teal))] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-[hsl(var(--dark-navy))]">
                      Don't See the Right Role?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We're always interested in hearing from skilled technicians and support staff. Send your resume to <a href="mailto:dmisales9228@gmail.com" className="text-[hsl(var(--medical-teal))] font-semibold hover:underline">dmisales9228@gmail.com</a> and tell us about your background.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>No phone calls, please.</strong> We review applications and respond directly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

