export const projectsData = [
  {
    id: "pollution-control-automation",
    slug: "pollution-control-automation",
    number: "01",
    title: "Pollution Control System Automation",
    industry: "Environmental & Heavy Manufacturing",
    lead: "Automating industrial emission scrubbers and chemical neutralization using real-time sensor loops and cloud telemetry.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    challenge: "Industrial manufacturing plants faced strict environmental emission penalties due to manual, erratic chemical dosing and unmonitored flue gas variations that lagged behind sudden production spikes.",
    solution: "Technoriya engineered an automated continuous emission monitoring and control system (CEMS). High-temperature gas sensors and pH probes feed into custom microcontroller edge units that modulate chemical scrubbers and blower velocities in sub-second feedback loops.",
    technologies: ["Industrial IoT", "Edge Microcontrollers", "Automated Scrubber Controllers", "Cloud Telemetry", "CPCB Gateway"],
    outcome: "Achieved continuous regulatory compliance with zero emission violation fines, reducing chemical neutralizer reagent wastage by 38% and providing audit-ready cloud compliance dashboards.",
    metrics: [
      { label: "Emission Compliance", value: "100%" },
      { label: "Reagent Cost Reduction", value: "38%" },
      { label: "Sensor Loop Response", value: "<500ms" }
    ]
  },
  {
    id: "lora-nbiot-network",
    slug: "lora-nbiot-network",
    number: "02",
    title: "IoT Network LoRaWAN / NB-IoT Integration",
    industry: "Energy, Utilities & Smart Infrastructure",
    lead: "Deploying high-density low-power wide-area sensor mesh networks for distributed utility infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    challenge: "A regional utility provider struggled with manual meter readings across geographically dispersed, rural, and underground metering pits where cellular 4G signals were severely degraded or cost-prohibitive.",
    solution: "Architected a hybrid LPWAN infrastructure combining long-range LoRaWAN subterranean nodes with outdoor solar-powered NB-IoT cellular backhaul gateways. Firmware was tuned with ultra-deep sleep states to extend battery longevity beyond 10 years.",
    technologies: ["LoRaWAN Sub-GHz", "NB-IoT Cellular", "Subterranean Sensors", "Edge Compression", "Head-End System (HES)"],
    outcome: "Eliminated manual meter dispatch across 45,000+ metering endpoints, boosting billing accuracy to 99.8% and detecting water pipe bursts within 12 minutes of occurrence.",
    metrics: [
      { label: "Endpoints Deployed", value: "45,000+" },
      { label: "Battery Autonomy", value: "10+ Years" },
      { label: "Billing Accuracy", value: "99.8%" }
    ]
  },
  {
    id: "iot-microcontroller-panel",
    slug: "iot-microcontroller-panel",
    number: "03",
    title: "IoT Microcontroller-Based Industrial Panel",
    industry: "Industrial Automation & Power Distribution",
    lead: "Custom IP66 ruggedized microcontroller control panels engineered for harsh industrial vibration and thermal stress.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    challenge: "Standard consumer PLC controllers were failing prematurely in high-vibration, corrosive chemical plant atmospheres, causing frequent unplanned assembly line shutdowns.",
    solution: "Designed and fabricated proprietary industrial-grade microcontroller panels featuring conformal-coated custom PCBs, dual isolated RS-485/Modbus buses, opto-isolated digital I/O, and integrated surge suppression within NEMA 4X / IP66 enclosures.",
    technologies: ["Custom Embedded PCB", "Opto-Isolated I/O", "Modbus RTU", "IP66 Enclosures", "Fail-Safe Watchdogs"],
    outcome: "Zero panel hardware failures over 36 consecutive months of continuous operation in caustic environments, reducing line maintenance overhead by 52%.",
    metrics: [
      { label: "Uninterrupted Uptime", value: "36 Months" },
      { label: "Maintenance Drop", value: "-52%" },
      { label: "Operating Temperature", value: "-20°C to +75°C" }
    ]
  },
  {
    id: "ev-design-consulting",
    slug: "ev-design-consulting",
    number: "04",
    title: "EV Design Consulting & EV307 Charging Topologies",
    industry: "Electric Mobility & Automotive",
    lead: "Engineering the EV307 commercial charger series and high-efficiency induction motor traction drives.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    challenge: "Commercial fleet operators required scalable charging architectures capable of balancing rapid turnaround times against municipal substation grid capacity limitations.",
    solution: "Technoriya consulted on and engineered the EV307 charger family: EV307 Legacy for standard overnight depot charging, EV307 Modern for intermediate commercial charging, and EV307 Thunder for ultra-fast DC corridors. Integrated automobile induction motor power electronics with dynamic grid load management.",
    technologies: ["EV307 Series Chargers", "Automobile Induction Motors", "OCPP 2.0.1 Protocol", "Dynamic Load Balancing", "BMS Thermal Integration"],
    outcome: "Enabled dual-vehicle high-speed DC charging without tripping localized grid transformers, cutting fleet depot peak electricity demand tariffs by 28%.",
    metrics: [
      { label: "Topologies Engineered", value: "3 Architectures" },
      { label: "Peak Demand Savings", value: "28%" },
      { label: "Charger Efficiency", value: "96.5%" }
    ]
  },
  {
    id: "telecom-consulting-p5g",
    slug: "telecom-consulting-p5g",
    number: "05",
    title: "Strategic Telecom Consulting & Private 5G Architecture",
    industry: "Telecommunications & Port Logistics",
    lead: "Designing Private 5G campus networks and carrier-grade RF optimization with South Korean technology leaders.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    challenge: "An automated multi-modal port container facility experienced frequent packet loss and handover latency on legacy Wi-Fi when guiding autonomous straddle carriers between metal shipping containers.",
    solution: "Conducted ray-tracing 3D RF propagation modeling and deployed a localized Private 5G Standalone (SA) network. Utilized beamforming gNodeB radios and dedicated localized core slicing to deliver deterministic sub-10ms packet arrival times.",
    technologies: ["Private 5G Standalone (SA)", "gNodeB Beamforming", "Ray-Tracing RF Modeling", "Network Slicing", "Industrial SIM Provisioning"],
    outcome: "Achieved seamless 99.999% container crane tele-operation with zero dropped handovers across 1.8 square kilometers of metallic cargo stacks.",
    metrics: [
      { label: "Radio Latency", value: "<7ms" },
      { label: "Handover Success Rate", value: "100%" },
      { label: "Campus Coverage", value: "1.8 km²" }
    ]
  },
  {
    id: "dedicated-iot-cyber-skill-centers",
    slug: "dedicated-iot-cyber-skill-centers",
    number: "06",
    title: "Corporate IoT & Cybersecurity Skill Centers",
    industry: "Enterprise Education & Defense Workforce",
    lead: "Building physical corporate R&D training centers and cyber simulation ranges for enterprise engineering teams.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    challenge: "Enterprise clients struggled to recruit and retain specialized embedded IoT and cybersecurity defense talent capable of operating proprietary mission-critical hardware.",
    solution: "Technoriya designed, built, and operationalized dedicated on-premise Skill Centers equipped with physical hardware development benches, spectrum analyzers, and isolated cyber range simulation networks.",
    technologies: ["Hands-On Lab Racks", "Cyber Attack Simulator", "Microcontroller Testbeds", "Curriculum Design", "Certification Frameworks"],
    outcome: "Upskilled over 650 enterprise engineers and technicians within 18 months, reducing external tier-3 support dependency by 64%.",
    metrics: [
      { label: "Engineers Certified", value: "650+" },
      { label: "Support Escalation Drop", value: "-64%" },
      { label: "Labs Built", value: "Turnkey" }
    ]
  },
  {
    id: "bfsi-rbi-compliance-audit",
    slug: "bfsi-rbi-compliance-audit",
    number: "07",
    title: "RBI IT-NBFC & FinTech Regulatory Compliance",
    industry: "Banking, Financial Services & FinTech",
    lead: "End-to-end alignment with Reserve Bank of India IT Master Directions and CERT-In 6-hour reporting mandates.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    challenge: "A fast-growing FinTech NBFC faced imminent regulatory suspension due to inadequate IT Governance structures, missing ISSC/ITSC committee records, and unverified SOC integration.",
    solution: "Executed a comprehensive 60-day remediation program establishing compliant IT Governance charters, forming ISSC/ITSC oversight bodies, implementing 180-day forensic log preservation, and verifying real-time SOC integration.",
    technologies: ["RBI IT-NBFC Framework", "CERT-In Ingestion", "SIEM Log Retention", "ISSC/ITSC Governance", "Penetration Testing"],
    outcome: "Passed statutory regulatory audit with zero major observations, securing operational license expansion and minimizing cyber insurance premiums.",
    metrics: [
      { label: "Regulatory Observations", value: "0 Non-Compliances" },
      { label: "Audit Timeline", value: "60 Days" },
      { label: "Log Retention", value: "180 Days Confirmed" }
    ]
  },
  {
    id: "sap-ewm-warehouse-modernization",
    slug: "sap-ewm-warehouse-modernization",
    number: "08",
    title: "SAP S/4HANA & EWM Logistics Modernization",
    industry: "Supply Chain, Pharmaceuticals & Logistics",
    lead: "Deploying SAP Extended Warehouse Management (EWM) with automated slotting and cold-chain RF tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    challenge: "A leading pharmaceutical logistics distributor suffered dispatch delays and inventory discrepancies across three high-throughput temperature-controlled cold-chain distribution centers.",
    solution: "Transitioned warehouse operations to SAP EWM on S/4HANA Cloud. Implemented wave management, automated high-density slotting, RF barcode verification at every touchpoint, and real-time cold-chain temperature telemetry hooks.",
    technologies: ["SAP S/4HANA", "SAP EWM", "Wave Management", "RF Gun Scanning", "Cold-Chain IoT Hooks"],
    outcome: "Order fulfillment turnaround accelerated by 42%, inventory pick accuracy reached 99.97%, and zero batches expired due to automated FIFO/FEFO slotting enforcement.",
    metrics: [
      { label: "Fulfillment Velocity", value: "+42%" },
      { label: "Pick Accuracy", value: "99.97%" },
      { label: "Cold-Chain Waste", value: "0 Losses" }
    ]
  }
];
