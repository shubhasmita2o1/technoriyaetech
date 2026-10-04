export const insightsData = [
  {
    id: "rbi-it-nbfc-compliance-blueprint",
    slug: "rbi-it-nbfc-compliance-blueprint",
    title: "Navigating the RBI IT-NBFC Master Direction: A Tactical Blueprint for FinTech Compliance",
    category: "Cybersecurity",
    readTime: "7 min read",
    date: "2026-08-14",
    author: "Cybersecurity Advisory Group",
    summary: "A practical guide to implementing mandatory Information Security Steering Committees (ISSC), IT Strategy Committees (ITSC), and 180-day log preservation required by the Reserve Bank of India.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    content: `The Reserve Bank of India’s updated IT Master Directions have introduced heightened regulatory expectations for Non-Banking Financial Companies (NBFCs) and FinTechs. No longer treated as an annual checklist, information security governance is now an active, audited requirement.

At Technoriya, our cybersecurity and DFIR teams routinely guide financial institutions through the complete remediation lifecycle. The key to surviving statutory scrutiny lies in four foundational pillars:

1. Formation and Active Operation of ISSC & ITSC
The Board of Directors must maintain direct visibility over IT risks. Establishing the Information Security Steering Committee (ISSC) and the IT Strategy Committee (ITSC) is non-negotiable. Minutes of quarterly meetings, risk registers, and budget allocation decisions must be maintained in formal, immutable records.

2. Mandatory SOC Integration & Continuous Telemetry
Periodic vulnerability scanning is insufficient. Critical banking assets, APIs, and database cores must maintain active ingestion pipelines into an augmented 24x7 Security Operations Center (SOC). Alert escalation matrices must be documented with explicit containment SLAs.

3. The 180-Day Forensic Log Mandate (CERT-In Harmony)
Both RBI guidelines and CERT-In directions mandate that enterprise logs across firewalls, authentication servers, and database transactions must be preserved for at least 180 days within sovereign Indian territory. Organizations must adopt encrypted, append-only log repositories that resist tamper attempts even by compromised administrative accounts.

4. Tabletop War Gaming and Board Preparedness
Simulated ransomware exercises test not only firewall rules but also executive decision-making. Conducting annual tabletop exercises prepares C-suite leaders to navigate extortion, regulatory disclosure deadlines, and continuity failovers without panic.`
  },
  {
    id: "sap-ewm-warehouse-architecture",
    slug: "sap-ewm-warehouse-architecture",
    title: "Next-Gen Logistics: Transitioning to SAP Extended Warehouse Management (EWM) on S/4HANA",
    category: "SAP",
    readTime: "6 min read",
    date: "2026-07-28",
    author: "Enterprise ERP Practice",
    summary: "Overcoming legacy stock bottlenecks with automated wave management, slotting algorithms, and direct cold-chain IoT telemetry hooks in SAP EWM.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    content: `Modern distribution centers have outgrown the capabilities of traditional ERP inventory modules. When thousands of SKUs move through high-bay automated racking systems, microseconds in scanning latency and suboptimal slotting algorithms compound into massive order fulfillment delays.

Technoriya’s SAP practice specializes in deploying SAP Extended Warehouse Management (EWM) integrated directly with S/4HANA. By transitioning from batch processing to real-time warehouse execution, enterprises unlock:

- Dynamic Wave Management: Grouping outbound orders into optimized pick waves based on carrier departure schedules and picker travel paths.
- Slotting & Rearrangement Optimization: Algorithms that continuously recommend optimal shelf placement for items based on seasonal turnover velocity and physical weight.
- RF Scanner and IoT Telemetry Integration: Direct communication between RF handhelds, automated guided vehicles (AGVs), and temperature sensors in cold-chain storage facilities.`
  },
  {
    id: "private-5g-manufacturing-campuses",
    slug: "private-5g-manufacturing-campuses",
    title: "Deterministic Low-Latency: Why Smart Factories are Replacing Wi-Fi with Private 5G",
    category: "5G",
    readTime: "8 min read",
    date: "2026-06-19",
    author: "Telecom Technology Consulting Group",
    summary: "How localized standalone 5G cores and beamforming radios solve packet drop hazards in heavy metallic industrial production plants.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    content: `In high-precision industrial automation, latency jitter is as catastrophic as a total network blackout. Standard Wi-Fi technologies struggle in factory environments where steel beams, heavy cranes, and high-frequency motors generate severe multi-path interference and signal attenuation.

Through our international telecommunications consulting partnerships based in South Korea, Technoriya designs on-premise Private 5G (P5G) Standalone networks. With dedicated localized spectrum, gNodeB beamforming antennas track moving robotic dollies across entire plants, ensuring sub-8ms deterministic latency and zero dropped packets during crane handovers.`
  },
  {
    id: "tinyml-edge-ai-microcontrollers",
    slug: "tinyml-edge-ai-microcontrollers",
    title: "TinyML on the Factory Floor: Running Neural Inference on Microcontrollers",
    category: "AI",
    readTime: "5 min read",
    date: "2026-05-30",
    author: "AI Edge Center of Excellence",
    summary: "Compressing deep neural networks into sub-256KB INT8 footprints for milliwatt-level vibration anomaly detection on industrial pump motors.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    content: `While large language models dominate public headlines, the industrial realm operates under harsh silicon and electrical realities. Sending high-frequency 20kHz acoustic vibration sensor feeds to the cloud for cloud-based inference is economically unviable and latency-prohibitive.

Technoriya’s AI Edge Lab champions TinyML: quantizing neural architectures down to 8-bit and 4-bit integer weights that execute inside low-cost ARM Cortex-M or RISC-V microcontrollers. Running at less than 500 milliwatts, these edge nodes recognize bearing flaking and cavitation within milliseconds, initiating hardware emergency cutoffs before mechanical destruction occurs.`
  },
  {
    id: "ev307-charging-architectures",
    slug: "ev307-charging-architectures",
    title: "Engineering the EV307 Ecosystem: Thermal Management and DC Fast Charging Topologies",
    category: "Emerging Technologies",
    readTime: "6 min read",
    date: "2026-05-12",
    author: "EV Hardware Engineering Team",
    summary: "Balancing ultra-fast multi-vehicle DC charging output against municipal substation peak load tariffs.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    content: `Commercial vehicle fleet operators cannot afford hours of downtime waiting for standard AC depot chargers. However, plugging in a dozen heavy-duty electric trucks simultaneously risks tripping local substation transformers or incurring crippling peak demand utility tariffs.

Technoriya’s EV Lab addressed this dilemma through the EV307 charger ecosystem (EV307 Legacy, Modern, and Thunder ultra-fast). By marrying high-efficiency silicon carbide (SiC) power electronics with dynamic OCPP 2.0.1 smart load balancing algorithms, the system intelligently throttles charging curves based on instantaneous depot power ceilings without degrading turnaround schedules.`
  },
  {
    id: "solid-state-hydrogen-energy-frontier",
    slug: "solid-state-hydrogen-energy-frontier",
    title: "Beyond 700-Bar Tanks: Solid Metal Hydrides as Safe Ambient Hydrogen Storage",
    category: "Emerging Technologies",
    readTime: "7 min read",
    date: "2026-04-05",
    author: "H2 Solid Fuel Research Lab",
    summary: "Investigating reversible chemical absorption of hydrogen in metal hydrides to eliminate explosion hazards in remote telecom backup power.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    content: `Hydrogen has long promised zero-emission heavy industrial power, but the physics of storing volatile gas at 700 times atmospheric pressure has severely restricted broad adoption. High-pressure tanks represent significant explosive hazards and require costly specialized transport permits.

At Technoriya’s H2 Solid Fuel Lab, our researchers focus on solid metal hydrides. These specialized alloys chemically bind hydrogen atoms into their crystalline lattice at near-ambient pressure. When moderate waste heat is applied, pure hydrogen gas is smoothly liberated to fuel zero-emission fuel cells—providing quiet, dependable multi-day electrical backup for remote telecom towers without diesel emissions.`
  }
];
