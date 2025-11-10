import { useState, useRef } from 'react';
import {
  Fan,
  ShieldCheck,
  LifeBuoy,
  GraduationCap,
  DraftingCompass,
  Microscope,
  Package,
  Tags,
  Building2,
  ClipboardList,
  ChevronDown,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const serviceCategories = [
  {
    id: 'pump-service',
    name: 'Pump Service & Preventive Maintenance',
    summary: 'Preventive programs for medical air compressors, vacuum pumps, dryers, and receivers that keep life-support gas online.',
    description:
      'Technicians perform quarterly and annual inspections, compressor rebuilds, oil sampling, vibration trending, and dryer desiccant replacement so source equipment stays compliant and reliable.',
    includes: [
      'Scheduled maintenance for compressors, vacuum pumps, dryers, and receivers',
      'Compressor rebuilds, oil analysis, vibration monitoring, and filter changes',
      'Dryer desiccant replacement, dew point verification, and moisture management',
      'Service documentation tailored to NFPA-99 programs and facility standards',
    ],
    icon: Fan,
  },
  {
    id: 'compliance-testing',
    name: 'Certification & Compliance Testing',
    summary: 'ASSE 6030 teams deliver NFPA-99 acceptance and annual inspections with complete reports for surveyors.',
    description:
      'Verification specialists test outlets, alarms, manifolds, zone valves, and cross connections while capturing pressures, flows, and medical air purity for accreditation-ready documentation.',
    includes: [
      'NFPA-99 acceptance and annual inspection programs',
      'Outlet, manifold, zone valve, and alarm verification with corrective plans',
      'Medical air dew point, CO, and microbiological purity testing',
      'Cross-connection checks, pressure trending, and relief valve testing',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'repairs-retrofits',
    name: 'Repairs, Retrofits & Back-Feed Support',
    summary: '24/7 emergency repair, retrofit planning, and temporary gas back-feed keep patients supported during projects.',
    description:
      'DMI Medical responds to leaks, alarm faults, and equipment failures day or night, provides temporary back-feed manifolds, and manages phased retrofits so clinical areas stay open.',
    includes: [
      '24/7 emergency leak response and alarm troubleshooting',
      'Temporary cylinder back-feed systems and bulk supply change-outs',
      'Equipment retrofits, change-outs, and phased renovation support',
      'Site coordination to minimize downtime for critical care units',
    ],
    icon: LifeBuoy,
  },
  {
    id: 'training',
    name: 'Training & Education',
    summary: 'On-site medical gas safety instruction, operator refreshers, and brazing qualification for facility teams.',
    description:
      'Certified instructors deliver training on medical gas system operation, alarm response, NFPA-99 code changes, and brazing procedures so in-house staff stay confident and compliant.',
    includes: [
      'Medical gas system orientation for facilities and clinical engineering teams',
      'NFPA-99 code updates, alarm response protocols, and documentation practices',
      'Brazing qualification preparation and quality control review',
      'Customized refresher courses scheduled around hospital operations',
    ],
    icon: GraduationCap,
  },
  {
    id: 'design-projects',
    name: 'Design & Project Services',
    summary: 'Design-build support, equipment replacements, and owner representation from concept through commissioning.',
    description:
      'Engineers provide load calculations, BIM coordination, submittals, and project oversight so new wings, renovations, and equipment upgrades meet NFPA-99 and ASSE requirements.',
    includes: [
      'System assessments, budgeting, and design development for renovations',
      'Construction administration, inspections, and punch-list management',
      'Coordination with architects, MEP firms, and state regulators',
      'Commissioning support and close-out documentation packages',
    ],
    icon: DraftingCompass,
  },
  {
    id: 'specialized',
    name: 'Specialized Services',
    summary: 'Pipeline cleaning, medical air quality programs, system analytics, and third-party inspections for complex facilities.',
    description:
      'Specialized crews perform pipeline decontamination, brazing verification, valve reconstructions, and purity analytics tailored to ORs, NICUs, and labs with stringent requirements.',
    includes: [
      'Pipeline cleaning, particulate and moisture testing, and decontamination',
      'Brazing inspection, leak investigation, and valve reconstruction',
      'Medical air quality programs with ongoing sampling and trending',
      'Third-party inspections, due diligence surveys, and system audits',
    ],
    icon: Microscope,
  },
];

const productGroups = [
  {
    id: 'equipment-parts',
    name: 'Equipment & Parts We Supply',
    summary: 'Outlets, alarms, manifolds, zone valves, and source packages staged for quick installation.',
    type: 'bullets',
    description:
      'Inventory and sourcing services cover the assemblies that keep pipeline systems available, from headwall outlets to bulk oxygen components.',
    details: [
      'Patient outlets, adapters, hose assemblies, and ceiling drops',
      'Area and master alarm panels, transducers, and annunciators',
      'Zone valve boxes, emergency inlet connections, and copper headers',
      'Compressors, vacuum pumps, receivers, dryers, and bulk supply hardware',
    ],
    icon: Package,
    mediaPlaceholder: true,
  },
  {
    id: 'product-brands',
    name: 'Product Brands',
    summary: 'Authorized distributor for the leading medical gas product lines we install and support.',
    type: 'tags',
    tags: ['BeaconMedaes', 'Powerex', 'Ohio Medical', 'Amico', 'Gentec', 'Western Enterprises'],
    icon: Tags,
  },
  {
    id: 'manufacturers',
    name: 'Manufacturers We Work With',
    summary: 'Partnerships with major gas suppliers and equipment manufacturers across the Midwest.',
    type: 'tags',
    tags: ['Messer', 'Airgas', 'Linde', 'Air Products', 'Allied Healthcare', 'Parker Hannifin'],
    icon: Building2,
  },
  {
    id: 'inventory',
    name: 'Stocked Inventory Highlights',
    summary: 'Emergency inventory keeps critical replacements on-hand for rapid deployment.',
    type: 'bullets',
    description:
      'Critical spares staged in Crown Point help our service teams restore systems faster during outages and inspections.',
    details: [
      'Outlets, valves, alarm sensors, and pipeline fittings ready for same-day delivery',
      'Cylinder manifolds, regulators, reserve headers, and emergency inlet kits',
      'Maintenance consumables: compressor oil, filters, desiccant, and dryer elements',
      'Temporary back-feed manifolds and flexible hose sets for planned shutdowns',
    ],
    icon: ClipboardList,
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('services');
  const [activeService, setActiveService] = useState(serviceCategories[0].id);
  const [activeProduct, setActiveProduct] = useState(productGroups[0].id);
  const serviceDetailRef = useRef<HTMLDivElement>(null);
  const productDetailRef = useRef<HTMLDivElement>(null);

  const currentService = serviceCategories.find((service) => service.id === activeService) ?? serviceCategories[0];
  const currentProduct = productGroups.find((product) => product.id === activeProduct) ?? productGroups[0];

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    setTimeout(() => {
      serviceDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const handleProductClick = (productId: string) => {
    setActiveProduct(productId);
    setTimeout(() => {
      productDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  return (
    <section id="services" className="section services-section">
      <div className="wrapper services">
        <div className="services__intro">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Full-Spectrum Medical Gas Solutions</h2>
          <p className="lead">
            From engineering and installation through verification, maintenance, and emergency support—DMI Medical delivers complete lifecycle services for hospital medical gas pipeline systems across Illinois and Indiana.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="services__tabs" role="tablist" aria-label="Services and Products">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'services'}
            aria-controls="services-panel"
            className={`services__tab ${activeTab === 'services' ? 'services__tab--active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Our Services
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'products'}
            aria-controls="products-panel"
            className={`services__tab ${activeTab === 'products' ? 'services__tab--active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Parts & Equipment
          </button>
                  </div>

        {/* Services Tab Panel */}
        <AnimatePresence mode="wait">
          {activeTab === 'services' && (
            <motion.div
              id="services-panel"
              role="tabpanel"
              aria-labelledby="services-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="services__content"
            >
              <div className="services__card-grid">
                {serviceCategories.map((service) => {
                  const Icon = service.icon;
                  const isActive = service.id === activeService;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      className={`services__card-button card ${isActive ? 'services__card-button--active' : ''}`}
                      onClick={() => handleServiceClick(service.id)}
                      onFocus={() => setActiveService(service.id)}
                      aria-pressed={isActive}
                      aria-expanded={isActive}
                    >
                      <div className="services__card-image">
                        <img src={`/assets/services/${service.id}.jpg`} alt="" onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/400x200/00a899/ffffff?text=${encodeURIComponent(service.name)}`;
                        }} />
                </div>
                      <span className="services__card-icon" aria-hidden>
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="services__card-text">
                        <h3>{service.name}</h3>
                        <p>{service.summary}</p>
                        {isActive && (
                          <span className="services__card-indicator">
                            <ChevronDown className="h-4 w-4" />
                            Details below
                  </span>
                        )}
                      </div>
                    </button>
                  );
                })}
                  </div>

              <div className="services__detail-container" ref={serviceDetailRef}>
                <div className="services__detail-label">
                  <ChevronDown className="h-5 w-5" />
                  <span>Service Details</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.id}
                    id={`service-panel-${currentService.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="card services__detail"
                  >
                    <div className="services__detail-header">
                      <h3>{currentService.name}</h3>
                      <p>{currentService.description}</p>
                    </div>
                    <ul className="services__detail-list">
                      {currentService.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
          </motion.div>
          )}

          {/* Products Tab Panel */}
          {activeTab === 'products' && (
            <motion.div
              id="products-panel"
              role="tabpanel"
              aria-labelledby="products-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="services__content"
            >
              <div className="services__product-grid">
                {productGroups.map((product) => {
                  const Icon = product.icon;
                  const isActive = product.id === activeProduct;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      className={`services__product-card card ${isActive ? 'services__product-card--active' : ''}`}
                      onClick={() => handleProductClick(product.id)}
                      onFocus={() => setActiveProduct(product.id)}
                      aria-pressed={isActive}
                      aria-expanded={isActive}
                    >
                      <div className="services__product-image">
                        <img src={`/assets/products/${product.id}.jpg`} alt="" onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/300x200/022247/00a899?text=${encodeURIComponent(product.name)}`;
                        }} />
                      </div>
                      <div className="services__product-card-content">
                        <div className="services__product-card-top">
                          <span className="services__card-icon" aria-hidden>
                            <Icon className="h-5 w-5" />
                          </span>
                          <h4>{product.name}</h4>
                        </div>
                        <p>{product.summary}</p>
                        {isActive && (
                          <span className="services__card-indicator">
                            <ChevronDown className="h-4 w-4" />
                            Details below
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="services__detail-container" ref={productDetailRef}>
                <div className="services__detail-label">
                  <ChevronDown className="h-5 w-5" />
                  <span>Product Details</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProduct.id}
                    id={`product-panel-${currentProduct.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="card services__product-detail"
                  >
                    <div className="services__product-detail-content">
                      <div>
                        <h4>{currentProduct.name}</h4>
                        {currentProduct.description && <p>{currentProduct.description}</p>}

                        {currentProduct.type === 'bullets' && currentProduct.details && (
                          <ul className="services__detail-list">
                            {currentProduct.details.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}

                        {currentProduct.type === 'tags' && currentProduct.tags && (
                          <div className="services__tag-list" aria-label={`${currentProduct.name} list`}>
                            {currentProduct.tags.map((tag) => (
                              <span className="services__tag" key={tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {currentProduct.mediaPlaceholder && (
                        <div className="services__product-detail-image">
                          <img src={`/assets/products/${currentProduct.id}-detail.jpg`} alt={currentProduct.name} onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/600x400/f8f9fa/022247?text=${encodeURIComponent(currentProduct.name)}`;
                          }} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
                  </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="divider" aria-hidden="true"></div>
    </section>
  );
}