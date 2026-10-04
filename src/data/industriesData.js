export const industriesData = [
  {
    id: "bfsi",
    slug: "bfsi",
    name: "Banking, Financial Services & Insurance (BFSI)",
    shortName: "BFSI",
    iconName: "Landmark",
    lead: "Sovereign compliance, core banking resilience, fraud defense, and RBI IT-NBFC master frameworks.",
    description: "Financial institutions navigate intense regulatory scrutiny alongside escalating cyber threats. Technoriya provides BFSI Community Clouds, statutory compliance audits (RBI, SEBI, NPCI UPI), and 24x7 SOC monitoring.",
    keyChallenges: [
      "Mandatory adherence to RBI IT-NBFC Master Directions and CERT-In 6-hour reporting",
      "Securing high-concurrency payment switches and core banking databases against APTs",
      "Maintaining immutable 180-day forensic log preservation without escalating storage costs"
    ],
    solutionsDelivered: [
      "BFSI Sovereign Community Cloud",
      "RBI & SEBI Compliance Audits",
      "Emergency DFIR & SOC Augmentation",
      "SAP FICO & Fraud Analytics Integration"
    ],
    verifiedMetrics: [
      { label: "Compliance Pass Rate", value: "100%" },
      { label: "Data Integrity", value: "Zero Loss" },
      { label: "Incident Containment", value: "<15 Min" }
    ],
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    shortName: "Healthcare",
    iconName: "Activity",
    lead: "Clinical diagnostic AI, medical imaging telemetry, robotic surgical assistance, and cold-chain logistics.",
    description: "Technoriya delivers transformative technology to hospitals, diagnostic networks, and pharmaceutical manufacturers. Our solutions span DICOM medical vision analysis, clinical trial data optimization, and SAP EWM cold-chain tracking.",
    keyChallenges: [
      "Reducing radiologist diagnostic backlogs for emergency pulmonary and trauma imaging",
      "Maintaining strict cold-chain pharmaceutical temperature integrity across transit",
      "Guaranteeing patient privacy and HIPAA/DPDP data governance in digital records"
    ],
    solutionsDelivered: [
      "Clinical Diagnostic AI Imaging (X-Ray, MRI)",
      "Robotic Surgery Spatial Guidance Assistants",
      "SAP EWM Cold-Chain Distribution",
      "Hospital Cyber Preparedness & vCISO Advisory"
    ],
    verifiedMetrics: [
      { label: "Diagnostic Accuracy", value: "98.4%" },
      { label: "Cold-Chain Waste", value: "0%" },
      { label: "Telemetry Latency", value: "<25ms" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Heavy Manufacturing & Industrial",
    shortName: "Manufacturing",
    iconName: "Factory",
    lead: "Automated pollution scrubbers, rugged microcontroller panels, predictive maintenance, and Private 5G.",
    description: "From continuous emission monitoring to factory floor robotics, Technoriya bridges harsh mechanical machinery with smart digital control systems, ensuring environmental compliance and operational throughput.",
    keyChallenges: [
      "Avoidance of costly environmental emission fines and CPCB regulatory shutdowns",
      "Severe factory environment vibration destroying conventional PLC automation panels",
      "Unplanned machinery bearing failure causing multi-day assembly line halts"
    ],
    solutionsDelivered: [
      "Pollution Control System Automation",
      "Custom IP66 Microcontroller Control Panels",
      "Predictive Maintenance Vibration Telemetry",
      "SAP S/4HANA Manufacturing & MRP Planning"
    ],
    verifiedMetrics: [
      { label: "Emission Violations", value: "0" },
      { label: "Hardware Reliability", value: "36+ Mo" },
      { label: "Reagent Savings", value: "38%" }
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "telecom",
    slug: "telecom",
    name: "Telecommunications & Networking",
    shortName: "Telecom",
    iconName: "Radio",
    lead: "Private 5G enterprise networks, RF propagation modeling, optical backhauls, and international telecom advisory.",
    description: "Leveraging our international consulting presence in South Korea and the Middle East, Technoriya assists carriers and industrial enterprises in deploying carrier-grade Private 5G (P5G) networks and optimizing spectral efficiency.",
    keyChallenges: [
      "High packet drop rates on legacy Wi-Fi in metallic container yards and industrial plants",
      "Optimizing massive radio cell layouts without costly physical trial-and-error",
      "Meeting multi-tenant ultra-low latency guarantees for autonomous robotics"
    ],
    solutionsDelivered: [
      "Private 5G Standalone (SA) Enterprise Core",
      "3D Ray-Tracing RF Planning & Drive Testing",
      "Carrier Core Transformation Advisory",
      "Industrial NB-IoT & Cellular Gateway Backhauls"
    ],
    verifiedMetrics: [
      { label: "Deterministic Latency", value: "<8ms" },
      { label: "Connection Reliability", value: "99.999%" },
      { label: "Coverage Area", value: "Square KMs" }
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "government",
    slug: "government",
    name: "Government & Public Infrastructure",
    shortName: "Government",
    iconName: "Shield",
    lead: "Sovereign Government Community Clouds, smart city metering, STQC auditing, and defense-grade cybersecurity.",
    description: "Supporting national digital sovereignty with secure government cloud architectures, automated citizen services, and critical infrastructure defense aligned with STQC, GIGW, and CERT-In national directives.",
    keyChallenges: [
      "Data sovereignty mandates prohibiting public cloud hosting outside national borders",
      "Securing public utility grids and toll networks against coordinated foreign cyber sabotage",
      "Digitizing legacy bureaucratic approval chains into secure citizen-facing portals"
    ],
    solutionsDelivered: [
      "Government Sovereign Community Cloud",
      "STQC & GIGW Compliance Audits",
      "National Electronic Toll (NETC) Integration",
      "Smart City LoRaWAN Water & Electricity Grids"
    ],
    verifiedMetrics: [
      { label: "Data Sovereignty", value: "100% In-Country" },
      { label: "Audit Certification", value: "STQC Compliant" },
      { label: "Public Reliability", value: "Tier-IV SLA" }
    ],
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "energy-utilities",
    slug: "energy-utilities",
    name: "Energy, Power & Clean Mobility",
    shortName: "Energy & Utilities",
    iconName: "Zap",
    lead: "EV307 multi-tier charging topologies, smart meter telemetry, induction motor drives, and hydrogen R&D.",
    description: "Powering the global energy transition with robust electrical hardware and telemetry. Technoriya engineers smart electricity grid networks, EV charging infrastructure, and solid-state hydrogen fuel storage systems.",
    keyChallenges: [
      "Local grid transformer overloads caused by unmanaged multi-vehicle fast charging",
      "Reliable remote meter reading across rural terrain without cellular infrastructure",
      "Safety hazards associated with high-pressure gaseous hydrogen storage"
    ],
    solutionsDelivered: [
      "EV307 Series Fast Chargers (Legacy, Modern, Thunder)",
      "Automobile Induction Motor Drives",
      "LoRaWAN & NB-IoT Smart Grid Telemetry",
      "Solid Metal Hydride Hydrogen Energy Storage R&D"
    ],
    verifiedMetrics: [
      { label: "Peak Demand Saved", value: "28%" },
      { label: "Meter Endpoints", value: "45,000+" },
      { label: "Storage Safety", value: "Ambient Pressure" }
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "enterprise",
    slug: "enterprise",
    name: "Large Enterprise & Conglomerates",
    shortName: "Enterprise",
    iconName: "Building2",
    lead: "Full-stack SAP S/4HANA migrations, custom modular ERPs, workflow automation, and multi-cloud resilience.",
    description: "Helping multi-entity corporate groups streamline disparate business units into synchronized real-time enterprises. We modernize procurement, warehouse logistics, payroll, and statutory reporting under unified governance.",
    keyChallenges: [
      "Disparate legacy software silos preventing real-time consolidated financial visibility",
      "Inefficient manual paperwork slowing procurement lifecycles and vendor payments",
      "High licensing costs and rigidity of inflexible off-the-shelf software packages"
    ],
    solutionsDelivered: [
      "SAP S/4HANA Greenfield / Brownfield Rollouts",
      "SAP Ariba Strategic Source-to-Pay Automation",
      "Custom Modular ERP for Finance & Inventory",
      "Enterprise vCISO & Cyber Readiness Assessments"
    ],
    verifiedMetrics: [
      { label: "Cycle Acceleration", value: "50-70%" },
      { label: "Financial Close", value: "Real-Time" },
      { label: "ERP Coverage", value: "End-to-End" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "education-research",
    slug: "education-research",
    name: "Higher Education & Defense Research",
    shortName: "Education & R&D",
    iconName: "GraduationCap",
    lead: "Turnkey university Center of Excellence labs, academic research incubation, and corporate skill centers.",
    description: "Leveraging our founding team's IIT and IISc heritage, Technoriya partners with premier academic universities and defense establishments to construct cutting-edge IoT, VLSI, and cybersecurity research laboratories.",
    keyChallenges: [
      "Curriculum obsolescence lagging behind rapid real-world industry deep-tech advancements",
      "High capital cost of provisioning commercial-grade hardware testbenches and spectrum gear",
      "Difficulty in transitioning academic theoretical papers into commercially viable IP"
    ],
    solutionsDelivered: [
      "Turnkey Center of Excellence (CoE) Lab Installations",
      "Corporate IoT & Cyber Training Centers",
      "VLSI & Embedded Firmware Academic Testbenches",
      "Applied Research Joint Patents & Prototyping"
    ],
    verifiedMetrics: [
      { label: "Engineers Trained", value: "650+" },
      { label: "Labs Provisioned", value: "Turnkey R&D" },
      { label: "Academic Pedigree", value: "IIT & IISc" }
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
  }
];
