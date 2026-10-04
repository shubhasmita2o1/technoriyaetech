export const technologiesData = [
  {
    id: "ai",
    slug: "ai",
    name: "Artificial Intelligence",
    category: "Intelligent Systems",
    lead: "Targeted clinical diagnostic models, automated triage, and high-precision computer vision.",
    description: "Technoriya deploys production-grade AI designed for mission-critical reliability rather than speculative experiments. Our focus spans healthcare diagnostic imaging, robotic surgery tele-assistance, and multi-variable industrial optimization.",
    keyMetrics: [
      { label: "Clinical Vision Accuracy", value: "98.4%" },
      { label: "Anomaly Detection Rate", value: "99.1%" },
      { label: "Inference Latency", value: "<25ms" }
    ],
    corePillars: [
      { title: "DICOM Medical Imaging", desc: "Automated analysis of MRI, CT, and X-ray radiology scans for pulmonary and oncological screening." },
      { title: "Robotic Surgical Telemetry", desc: "Sub-millimeter spatial guidance and anatomical boundary tracking for minimally invasive surgery." },
      { title: "Predictive Analytics", desc: "High-throughput time-series neural networks forecasting machine fatigue and industrial failures." }
    ],
    relatedLab: "ai-lab"
  },
  {
    id: "ai-edge",
    slug: "ai-edge",
    name: "AI Edge Computing",
    category: "Edge Silicon",
    lead: "TinyML inferencing executed locally on milliwatt microcontrollers with zero cloud dependency.",
    description: "In hazardous factory floors and remote off-grid locations, relying on cloud latency or continuous bandwidth is unacceptable. Technoriya designs quantized on-device neural engines that run directly on microcontrollers, processing raw sensor data instantaneously at the physical edge.",
    keyMetrics: [
      { label: "Power Budget", value: "<500mW" },
      { label: "Model Footprint", value: "<256KB" },
      { label: "Local Reaction Time", value: "<10ms" }
    ],
    corePillars: [
      { title: "Quantized TinyML", desc: "INT8/INT4 deep learning networks running on Cortex-M and RISC-V silicon." },
      { title: "Zero-Latency Anomaly Tripping", desc: "Instantaneous mechanical cutoff triggered by acoustic or thermal spike detection." },
      { title: "Data Sovereign Processing", desc: "All sensitive telemetry analyzed locally without transmitting raw data outside the enterprise perimeter." }
    ],
    relatedLab: "ai-edge-lab"
  },
  {
    id: "iot",
    slug: "iot",
    name: "Internet of Things (IoT)",
    category: "Connected Systems",
    lead: "Ubiquitous wireless telemetry, LPWAN mesh networks, and smart metering backbones.",
    description: "Technoriya engineers resilient IoT ecosystems connecting hundreds of thousands of low-power nodes. From smart water grids to remote agricultural monitors, our hardware and firmware ensure dependable multi-year battery life.",
    keyMetrics: [
      { label: "Transmission Range", value: "15+ km" },
      { label: "Battery Autonomy", value: "10 Years" },
      { label: "Device Capacity", value: "Millions" }
    ],
    corePillars: [
      { title: "LoRaWAN Mesh", desc: "Decentralized long-range radio protocol enabling subterranean and rural telemetry collection." },
      { title: "Smart City Grids", desc: "Automated real-time electricity and water consumption analytics with anti-tamper sensing." },
      { title: "Environmental Telemetry", desc: "Continuous micro-climate, water quality, and atmospheric sensing stations." }
    ],
    relatedLab: "iot-lab"
  },
  {
    id: "industrial-iot",
    slug: "industrial-iot",
    name: "Industrial IoT (IIoT)",
    category: "Heavy Industry",
    lead: "Ruggedized microcontroller panels, automated pollution scrubbers, and factory bus integration.",
    description: "Bridging the gap between legacy heavy industrial equipment and modern telemetry cockpits. Technoriya designs custom IP66-rated microcontroller panels, SCADA/Modbus bridges, and automated environmental compliance systems.",
    keyMetrics: [
      { label: "Enclosure Protection", value: "IP66 / IP67" },
      { label: "Bus Support", value: "Modbus/CAN/RS485" },
      { label: "Continuous Duty", value: "24x7x365" }
    ],
    corePillars: [
      { title: "Pollution Control Automation", desc: "Dynamic chemical dosing and scrubber speed adjustments driven by live gas sensor arrays." },
      { title: "Rugged Control Panels", desc: "Surge-protected industrial enclosures engineered for extreme vibration, dust, and heat." },
      { title: "Regulatory Telemetry Gateways", desc: "Direct compliance data streaming certified for government pollution control boards." }
    ],
    relatedLab: "iot-lab"
  },
  {
    id: "telecom-5g",
    slug: "telecom-5g",
    name: "4G / 5G / Private 5G",
    category: "Telecommunications",
    lead: "Carrier-grade cellular infrastructure, Private 5G enterprise networks, and high-density RF planning.",
    description: "Led by global telecom advisors and South Korean technology partners, Technoriya consults on Private 5G (P5G) standalone networks for automated ports, smart factories, and critical healthcare facilities requiring guaranteed latency.",
    keyMetrics: [
      { label: "Ultra-Low Latency", value: "<8ms" },
      { label: "Density Capacity", value: "1M nodes/km²" },
      { label: "Reliability SLA", value: "99.999%" }
    ],
    corePillars: [
      { title: "Private 5G (P5G) Campuses", desc: "Independent standalone (SA) cellular core deployed over dedicated enterprise spectrum." },
      { title: "High-Precision RF Planning", desc: "Ray-tracing propagation simulation and drive-test signal verification." },
      { title: "International Telecom Consulting", desc: "Cross-border network modernization programs engineered with Korean and KSA telecom carriers." }
    ],
    relatedLab: "iot-lab"
  },
  {
    id: "ar-vr",
    slug: "ar-vr",
    name: "Augmented & Virtual Reality",
    category: "Spatial Computing",
    lead: "Interactive spatial digital twins, remote expert field assistance, and high-risk simulation.",
    description: "Translating complex CAD and live IoT telemetry into interactive spatial experiences. Technoriya equips engineers with holographic operational overlays and trains personnel in hazard-free virtual simulators.",
    keyMetrics: [
      { label: "Holographic Latency", value: "<12ms" },
      { label: "Spatial Precision", value: "<1mm" },
      { label: "Error Reduction", value: "45%" }
    ],
    corePillars: [
      { title: "Holographic Machine Overlays", desc: "Visualizing internal flow rates, motor RPM, and thermal hotspots directly atop physical machinery." },
      { title: "Remote Tele-Maintenance", desc: "Allowing central engineering experts to guide local field staff through spatial annotations." },
      { title: "Hazardous Safety Simulation", desc: "Full-immersion VR drills for high-voltage electrical, chemical spill, and fire response scenarios." }
    ],
    relatedLab: "ar-vr-lab"
  },
  {
    id: "vlsi",
    slug: "vlsi",
    name: "VLSI & Semiconductor Design",
    category: "Micro-Electronics",
    lead: "Custom digital ASIC architecture, FPGA algorithm acceleration, and RISC-V processing cores.",
    description: "Addressing sovereign hardware requirements with specialized semiconductor design. Technoriya architects custom logic pipelines, hardware-accelerated cryptographic blocks, and ultra-low power DSP units.",
    keyMetrics: [
      { label: "Silicon Gate Counts", value: "Multi-Million" },
      { label: "Logic Clock Speed", value: "Sub-Nanosecond" },
      { label: "Power Optimization", value: "40% Lower" }
    ],
    corePillars: [
      { title: "FPGA Rapid Prototyping", desc: "Cycle-accurate emulation of complex communications and security hardware architectures." },
      { title: "RISC-V Custom Instructions", desc: "Tailoring silicon execution units specifically for edge neural inferencing and encryption." },
      { title: "Hardware Root of Trust", desc: "Silicon-level cryptographic primitives protecting connected hardware against physical tampering." }
    ],
    relatedLab: "vlsi-lab"
  },
  {
    id: "ev",
    slug: "ev",
    name: "Electric Vehicle Technologies",
    category: "Clean Mobility",
    lead: "EV307 multi-tier fast charger series, automobile induction motor drives, and battery management.",
    description: "Accelerating e-mobility through robust power electronics. Technoriya designs high-efficiency induction motor controllers and the EV307 charging ecosystem (EV307 Legacy, Modern, and Thunder ultra-fast).",
    keyMetrics: [
      { label: "Charging Speed Class", value: "Ultra-Fast" },
      { label: "Conversion Efficiency", value: "96.5%" },
      { label: "Protocol Standard", value: "OCPP 2.0.1" }
    ],
    corePillars: [
      { title: "EV307 Charger Lineup", desc: "Scalable commercial charging infrastructure engineered for fleet depots and public corridors." },
      { title: "Automobile Induction Motors", desc: "High-torque, durable traction drives built for commercial and industrial vehicles worldwide." },
      { title: "Thermal & Power Balancing", desc: "Dynamic multi-vehicle load allocation preventing substation transformer overloading." }
    ],
    relatedLab: "ev-lab"
  },
  {
    id: "h2",
    slug: "h2",
    name: "Hydrogen & Solid Fuel R&D",
    category: "Future Energy",
    lead: "Solid metal hydride hydrogen storage, ambient-pressure fuel transport, and clean cell integration.",
    description: "Developing safe, non-explosive hydrogen storage solutions for heavy industrial power generation. Technoriya investigates metal hydride materials capable of storing high volumes of hydrogen at ambient pressures.",
    keyMetrics: [
      { label: "Storage Safety", value: "Ambient Pressure" },
      { label: "Purity Grade", value: "99.999%" },
      { label: "Lifecycle Durability", value: "2,000+ Cycles" }
    ],
    corePillars: [
      { title: "Solid Metal Hydrides", desc: "Chemical absorption of hydrogen atoms into solid matrices, eliminating dangerous 700-bar tanks." },
      { title: "Telecom Backup Reserves", desc: "Zero-emission hydrogen fuel cell power systems replacing noisy diesel generators at cell towers." },
      { title: "Green Microgrids", desc: "Long-duration energy storage storing surplus industrial solar power as reversible hydrogen hydrides." }
    ],
    relatedLab: "h2-lab"
  }
];
