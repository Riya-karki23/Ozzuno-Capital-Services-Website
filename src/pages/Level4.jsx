import React, { useState } from "react";

const sections = [
  // LEVEL 4
  {
    id: "private-equity",
    level: "LEVEL 4 · PRIVATE CAPITAL & ALTERNATIVES",
    title: "Private Equity Syndication",
    sectionLabel: "SECTION 4: PRIVATE CAPITAL & ALTERNATIVES",
    sourceService: "Private Equity",
    websiteName: "Private Equity Syndication",
    subPages: [
      "The Institutional Equity Injection Mechanism™",
      "Stake Dilution & Management Professionalization",
    ],
    cardSummary:
      "Institutional private equity for high-growth enterprises — stake dilution, governance professionalization and engineered exits.",
    detail: {
      narrative: [
        "We operate as the bridge between scalable companies and institutional private equity pools. The objective is not just to ‘find an investor’ but to architect an ownership shift that injects large, transformative capital while preserving strategic control for promoters.",
        "The engagement begins with strategic equity placement: sizing and pricing the stake sale so that dilution is mathematically justified by the acceleration in enterprise value. We harden valuation, control rights and board composition before a term sheet is ever signed.",
        "Post-investment, we drive management professionalization — restructuring leadership, installing institutional governance, and enforcing KPI regimes that align with global PE expectations. The fresh capital is then routed into expansion, capacity scaling or bolt-on acquisitions.",
        "Finally, we design the liquidity path: secondary sales, buyouts or IPO. The entire lifecycle is engineered around delivering the target IRR to investors while leaving the operating company structurally stronger than before.",
      ],
      matrixTitle: "The Institutional Equity Injection Mechanism™",
      matrixPhases: [
        "Phase 1 · Investment Thesis Alignment — positioning the company to attract top-tier PE.",
        "Phase 2 · Financial Modeling & Teaser — building the data room and growth story.",
        "Phase 3 · Investor Roadshow — curated outreach to relevant PE firms.",
        "Phase 4 · Valuation & Term Sheet — pricing and control rights negotiation.",
        "Phase 5 · Confirmatory Due Diligence — facilitating deep investor audit.",
        "Phase 6 · Management Professionalization — tightening governance post-close.",
        "Phase 7 · Expansion Strategy Deployment — deploying capital into growth vectors.",
        "Phase 8 · Exit Engineering — planning secondary / IPO / strategic sale.",
      ],
      mandates: [
        "Consumer electronics brand — $30M Series B with a Tier-1 global PE fund.",
        "Super-specialty hospital — PE-led buyout at ~₹750 Cr, promoter exit executed.",
        "Agri-tech enterprise — 18% equity dilution, board reconstitution and growth funding.",
      ],
      statutory:
        "Foreign and domestic PE transactions are structured under FEMA (Non-debt Instruments) Rules, 2019 and applicable securities laws. All investors are subject to full KYC/AML. Terms under the Shareholders’ Agreement are binding; we do not guarantee round closure or specific valuations.",
    },
  },
  {
    id: "aif-structuring",
    level: "LEVEL 4 · PRIVATE CAPITAL & ALTERNATIVES",
    title: "AIF Structuring & Advisory",
    sectionLabel: "SECTION 4: PRIVATE CAPITAL & ALTERNATIVES",
    sourceService: "AIF (Alternative Investment Fund) Advisory",
    websiteName: "AIF Structuring & Advisory",
    subPages: [
      "The Alternative Capital Conduit™",
      "Category I, II, III Fund Matching",
    ],
    cardSummary:
      "Capital access through SEBI-regulated AIFs — fund matching, documentation and regulatory alignment across Cat I, II and III vehicles.",
    detail: {
      narrative: [
        "We operate in the AIF ecosystem as capital architects — matching issuers with non-traditional investors across Category I, II and III funds. The mandate is to find the right fund thesis for the company rather than push generic capital.",
        "We own the documentation architecture: structuring instruments and drafting PPMs, contribution agreements and subscription deeds so that tax, regulatory and commercial requirements of both fund and issuer are met.",
        "Our team leads commercial negotiation with fund managers — valuation caps, liquidation preferences, information rights and governance protections are locked in with an institutional lens.",
        "Throughout, we enforce strict adherence to SEBI (AIF) Regulations, ensuring that capital inflow does not collide with compliance friction later.",
      ],
      matrixTitle: "The Alternative Capital Conduit™",
      matrixPhases: [
        "Phase 1 · Capital Needs Assessment — sizing and tenure mapping.",
        "Phase 2 · Fund Category Matching — choosing Cat I / II / III strategies.",
        "Phase 3 · Investment Document Drafting — PPMs and supporting papers.",
        "Phase 4 · Deal Structuring — equity, debt or hybrid instruments.",
        "Phase 5 · Regulatory Compliance Check — SEBI AIF rulebook alignment.",
        "Phase 6 · Commercial Negotiation — economics and rights with fund manager.",
        "Phase 7 · Capital Call & Deployment — drawdown and deployment supervision.",
      ],
      mandates: [
        "Real estate yield fund — Cat II AIF setup and fundraising (~₹600 Cr corpus).",
        "Venture debt fund — deployment strategy for ~₹300 Cr portfolio.",
        "Single family office — ₹75 Cr structured credit via Cat II AIF vehicle.",
      ],
      statutory:
        "Advisory is governed by SEBI (Alternative Investment Funds) Regulations, 2012. Placements are restricted to sophisticated investors meeting minimum ticket size; PPM remains the definitive risk disclosure document. AIF returns are market-linked and principal loss is possible.",
    },
  },

  // LEVEL 5
  {
    id: "cross-border",
    level: "LEVEL 5 · GLOBAL MARKETS & TREASURY",
    title: "Cross-Border Capital, ECB & Trade Finance",
    sectionLabel: "SECTION 5: GLOBAL MARKETS & TREASURY",
    sourceService:
      "Overseas Investments & Capital Services (ECB, Invoice Discounting, Growth Funding)",
    websiteName: "Cross-Border Capital, ECB & Trade Finance",
    subPages: [
      "The Cross-Border Liquidity Bridge™",
      "ECB Syndication",
      "Global Invoice Discounting & Factoring",
    ],
    cardSummary:
      "Global liquidity access: ECBs, cross-border growth funding and international invoice discounting under FEMA and RBI regimes.",
    detail: {
      narrative: [
        "We help Indian corporates tap global liquidity pools — raising external commercial borrowings at benchmark-linked rates and securing cross-border growth capital.",
        "The team manages FEMA feasibility, RBI interaction and all regulatory filings, ensuring that foreign debt or equity flows are fully compliant and smoothly repatriated.",
        "Working capital is unlocked via international invoice discounting and factoring, converting export receivables into instant liquidity without disrupting customer relationships.",
        "We sit between foreign lenders/investors and Indian borrowers, negotiating complex facility agreements and managing the legalities across jurisdictions.",
      ],
      matrixTitle: "The Cross-Border Liquidity Bridge™",
      matrixPhases: [
        "Phase 1 · Global Opportunity Scanning — mapping lenders and investors.",
        "Phase 2 · Regulatory Feasibility — FEMA and RBI compliance checks.",
        "Phase 3 · Lender / Investor Mapping — aligning counterparties to need.",
        "Phase 4 · Structuring & Negotiation — pricing, covenants and security.",
        "Phase 5 · Invoice Validation — eligibility checks for discounting.",
        "Phase 6 · Compliance & Approval — end-to-end paperwork and approvals.",
        "Phase 7 · Fund Repatriation — bringing capital onshore cleanly and safely.",
      ],
      mandates: [
        "Solar IPP — $65M ECB; LRN generated and funds repatriated.",
        "Textile exporter — $20M international factoring line; revolving liquidity.",
        "IT services firm — $15M US expansion growth funding from global investor.",
      ],
      statutory:
        "All transactions align with FEMA, 1999 and RBI Master Directions on ECB and trade credit. Forex risk remains with the client; hedging is advised but cannot eliminate currency or sovereign risk.",
    },
  },

  // LEVEL 6
  {
    id: "unlisted",
    level: "LEVEL 6 · UNLISTED SECURITIES & GREY MARKET",
    title: "Unlisted Securities & Pre-IPO Arbitrage",
    sectionLabel: "SECTION 6: UNLISTED SECURITIES & GREY MARKET",
    sourceService: "Unlisted & Pre-IPO Shares Services",
    websiteName: "Unlisted Securities & Pre-IPO Arbitrage",
    subPages: [
      "The Grey Market Liquidity Engine™",
      "Trading Desk (Live Quotes)",
      "Valuation & Compliance Checks",
    ],
    cardSummary:
      "Access to unlisted, pre-IPO and ESOP blocks — with valuation discipline, compliance and settlement certainty.",
    detail: {
      narrative: [
        "We operate in OTC corridors as a controlled liquidity engine for unlisted, pre-IPO and ESOP securities, connecting sophisticated investors with hard-to-access equity.",
        "Our desk aggregates fragmented sellers and institutional buyers, running high-integrity settlements with full documentation and custodial transfer.",
        "Valuation is made empirical using DCF and comparables, with strict adherence to fair market value rules and tax statutes around off-market transfers.",
        "We also engineer leverage structures and financing overlays to help investors build positions in high-value pre-IPO blocks.",
      ],
      matrixTitle: "The Grey Market Liquidity Engine™",
      matrixPhases: [
        "Phase 1 · Asset Origination & Screening — sourcing high-growth unlisted names.",
        "Phase 2 · Forensic Valuation — independent FMV validation.",
        "Phase 3 · Counterparty Verification — KYC/AML screening.",
        "Phase 4 · Transaction Structuring — direct transfer vs SPV mechanisms.",
        "Phase 5 · Financing & Leverage Overlay — loans and structured leverage.",
        "Phase 6 · Definitive Documentation — SPAs, ROFR waivers and consents.",
        "Phase 7 · Custodial Settlement — demat and cash movement with T+ assurance.",
      ],
      mandates: [
        "Ed-tech ESOP block — ~₹85 Cr placed with family offices.",
        "National retail chain — ₹150 Cr pre-IPO acquisition at discount to grey price.",
        "Aerospace & defence startup — Series C secondary exit; T+1 settlement.",
      ],
      statutory:
        "Deals are structured under Section 56(2) of the Income Tax Act for FMV and relevant SEBI regulations on unlisted and pre-IPO equity. Illiquidity and lock-ins are inherent; we offer no guarantee of listing timelines or exit valuations.",
    },
  },

  // LEVEL 7
  {
    id: "assurance-tax",
    level: "LEVEL 7 · ASSURANCE, TAX & RISK",
    title: "Forensic Assurance & Global Taxation",
    sectionLabel: "SECTION 7: ASSURANCE, TAX & RISK",
    sourceService: "Accounting & Tax Services",
    websiteName: "Forensic Assurance & Global Taxation",
    subPages: ["The Fiscal Integrity Shield™", "Transfer Pricing & International Tax"],
    cardSummary:
      "Aggressive audit, accounting and tax architecture — to harden books, optimize tax and protect against regulatory assault.",
    detail: {
      narrative: [
        "We treat financial management as a defensive fortress. Statutory and forensic audits are executed with deep ledger scrutiny and control testing against Ind AS and IFRS.",
        "Tax strategy is engineered, not reactive — multi-jurisdictional architectures, transfer pricing and transaction modeling aim to compress effective tax rates within legal bounds.",
        "We also operate as a virtual CFO and outsourcing layer, taking command of payables, receivables, payroll and filings so management can focus on core operations.",
        "Global and domestic support ensures consistent standards for Indian entities and overseas subsidiaries alike.",
      ],
      matrixTitle: "The Fiscal Integrity Shield™",
      matrixPhases: [
        "Phase 1 · Forensic Ledger Scrutiny — detecting irregularities and misstatements.",
        "Phase 2 · Internal Control Stress-Testing — assessing financial process integrity.",
        "Phase 3 · Strategic Tax Architecture — designing structures to reduce tax drag.",
        "Phase 4 · Transaction Advisory Modeling — tax impact of capital events.",
        "Phase 5 · Outsourced Process Migration — moving finance ops under our control.",
        "Phase 6 · Global Reporting Convergence — aligning local books with global norms.",
      ],
      mandates: [
        "Global MNC subsidiary — transfer pricing and forensic audit on ~₹3,200 Cr turnover; zero non-compliance findings.",
        "Infrastructure developer — statutory audit and internal control review on ~₹1,500 Cr asset base.",
        "IT exporter — virtual CFO and compliance across India, USA, UAE and Singapore.",
      ],
      statutory:
        "Engagements align with ICAI Standards on Auditing and Ind AS. Tax structures operate strictly within the Income Tax Act and GST framework; clients remain responsible for source data truthfulness.",
    },
  },
  {
    id: "erm",
    level: "LEVEL 7 · ASSURANCE, TAX & RISK",
    title: "Enterprise Risk Management (ERM)",
    sectionLabel: "SECTION 7: ASSURANCE, TAX & RISK",
    sourceService: "Risk Consulting Services",
    websiteName: "Enterprise Risk Management (ERM)",
    subPages: [
      "The Threat Neutralization Protocol™",
      "Cybersecurity & InfoSec Audits",
    ],
    cardSummary:
      "Panoramic enterprise risk scanning — financial, legal, operational and cyber — with engineered remediation.",
    detail: {
      narrative: [
        "We provide a holistic ERM lens across finance, legal, operations and technology so that latent risks are surfaced before they become balance sheet events.",
        "Financial and liquidity stress tests, legal and compliance audits, operational vulnerability assessments and cybersecurity reviews combine into a single threat map.",
        "We then engineer solutions: new controls, disaster recovery plans, cyber hardening and automated monitoring layers to convert risk management from reactive defence into strategic advantage.",
      ],
      matrixTitle: "The Threat Neutralization Protocol™",
      matrixPhases: [
        "Phase 1 · Enterprise Risk Scanning — end-to-end exposure mapping.",
        "Phase 2 · Financial & Liquidity Stress Testing — capital risk analysis.",
        "Phase 3 · Legal & Compliance Audit — regulatory and contractual gaps.",
        "Phase 4 · Operational Vulnerability Assessment — process and plant risks.",
        "Phase 5 · Cybersecurity Penetration Testing — digital perimeter hardening.",
        "Phase 6 · Solution Engineering — concrete remediation blueprints.",
        "Phase 7 · Control Implementation — deployment and ongoing monitoring.",
      ],
      mandates: [
        "Scheduled co-operative bank — cybersecurity and InfoSec audit; ISO 27001 achieved.",
        "API pharma exporter — USFDA/EMA regulatory compliance shield for 3 facilities.",
        "Petrochemical plant — full operational hazard and safety risk mapping.",
      ],
      statutory:
        "Frameworks aligned with COSO ERM and ISO 31000; cyber work adheres to CERT-In norms. We are not an insurer and cannot remove black swan or Force Majeure risk; insurance remains the client’s responsibility.",
    },
  },

  // LEVEL 8
  {
    id: "intelligence",
    level: "LEVEL 8 · THE INTELLIGENCE DIRECTORATE",
    title: "Market Intelligence & Predictive Analytics",
    sectionLabel: "SECTION 8: THE INTELLIGENCE DIRECTORATE",
    sourceService: "Research & Analysis Services",
    websiteName: "Market Intelligence & Predictive Analytics",
    subPages: [
      "The Empirical Intelligence Vector™",
      "Consumer Psychographics & Behavior",
      "The Research Vault",
    ],
    cardSummary:
      "External intelligence agency for the firm — market maps, psychographics, trend forecasting and analytics-backed strategy.",
    detail: {
      narrative: [
        "We build empirical market intelligence: industry maps, supply-chain analysis and competitive grids that show exactly where opportunity or threat resides.",
        "Consumer behavior and psychographics work decodes what buyers really respond to, using large datasets and behavioral economics.",
        "Technology trend monitoring ensures the business model isn’t blindsided by disruption — we flag inflection points early.",
        "All of this flows into analytics layers and dashboards, converting raw data into decisive, board-ready strategic insight.",
      ],
      matrixTitle: "The Empirical Intelligence Vector™",
      matrixPhases: [
        "Phase 1 · Research Hypothesis — defining the precise questions.",
        "Phase 2 · Data Harvesting — primary and secondary collection.",
        "Phase 3 · Psychographic Segmentation — decoding preference patterns.",
        "Phase 4 · Technological Trend Modeling — mapping disruption vectors.",
        "Phase 5 · Algorithmic Data Synthesis — analytics and pattern extraction.",
        "Phase 6 · Strategic Insight Generation — decision-grade recommendations.",
      ],
      mandates: [
        "EV battery manufacturer — market entry feasibility and capex blueprint (~₹5,000 Cr).",
        "Retail conglomerate — 100k+ sample consumer psychographic study; strategy pivot delivered.",
        "Institutional PE fund — sectoral thesis validation in pharma; deployment executed.",
      ],
      statutory:
        "Prepared in the spirit of SEBI (Research Analysts) Regulations, 2014 for institutional use. Not retail investment advice unless specifically designated; predictive models rely on third-party data that may carry inherent limitations.",
    },
  },

  // LEVEL 9
  {
    id: "franchise",
    level: "LEVEL 9 · PARTNER ECOSYSTEM & FRANCHISE",
    title: "Financial Distribution & Franchise Grid",
    sectionLabel: "SECTION 9: PARTNER ECOSYSTEM & FRANCHISE",
    sourceService: "Financial Products via Franchise Model",
    websiteName: "Financial Distribution & Franchise Grid",
    subPages: [
      "The B2B2C Distribution Grid™",
      "Partner Application Portal",
      "Secure Partner Dashboard",
    ],
    cardSummary:
      "B2B2C financial distribution grid — loans, insurance and investments delivered through a unified franchise and digital marketplace.",
    detail: {
      narrative: [
        "We deputize partners into a full-spectrum financial franchise — credit, insurance, broking and wealth products under one umbrella.",
        "The grid combines our underwriting relationships and digital marketplace with the partner’s local reach, creating a scalable B2B2C engine.",
        "Loans (secured and unsecured), life/general insurance, mutual funds, equities and wealth products are all plugged into a single execution stack.",
        "A unified tech platform manages product access, processing, tracking and commission settlement in real time.",
      ],
      matrixTitle: "The B2B2C Distribution Grid™",
      matrixPhases: [
        "Phase 1 · Partner Qualification — vetting and onboarding.",
        "Phase 2 · Territory Mapping — defining exclusive zones.",
        "Phase 3 · Digital Integration — connecting to the marketplace.",
        "Phase 4 · Product Training — certification across loans/insurance/investments.",
        "Phase 5 · Lead Synchronization — marketing and funnel routing.",
        "Phase 6 · Processing & Underwriting — centralized decision workflows.",
        "Phase 7 · Commission Settlement & Review — payouts and performance analytics.",
      ],
      mandates: [
        "Western zone master franchise — secured credit AUM ~₹450 Cr, NPA < 0.5%.",
        "Corporate insurance partner — ~₹65 Cr GWP with ~92% renewal rate.",
        "Wealth network — ~₹25 Cr/month SIP and equity flow, scaling rapidly.",
      ],
      statutory:
        "Distribution complies with AMFI (MF), IRDAI (insurance) and RBI (lending) regulations via licensed partners. Credit decisions remain with lenders; investment products carry market risk and no performance guarantee.",
    },
  },

  // LEVEL 10
  {
    id: "wealth",
    level: "LEVEL 10 · ASSET MANAGEMENT & WEALTH",
    title: "Asset Management & Intergenerational Wealth",
    sectionLabel: "SECTION 10: ASSET MANAGEMENT & WEALTH",
    sourceService: "Asset Management & Wealth",
    websiteName:
      "The Wealth Preservation Protocol: Intergenerational Capital Architecture",
    subPages: [
      "Wealth Preservation Protocol",
      "Portfolio Engineering: Structural Arbitrage",
      "[SECURE] UHNWI Portal",
    ],
    cardSummary:
      "Closed-loop asset management for UHNWIs and family offices — wealth preservation first, structural alpha second.",
    detail: {
      narrative: [
        "We construct fortresses of intergenerational capital for UHNWIs and family offices — with purchasing-power preservation as the prime directive.",
        "Portfolios deploy structural arbitrage across high-conviction equities, structured yield instruments (private credit, securitized debt, MLDs) and alternative assets.",
        "The alternative sleeve taps unlisted/pre-IPO equity and AIFs to capture high-alpha, non-correlated return streams.",
        "Every mandate operates under a strict fiduciary standard: allocations are stress-tested against risk, liquidity and tax architecture; rebalancing is continuous and macro-aware.",
      ],
      matrixTitle: "The Wealth Preservation Protocol",
      matrixPhases: [
        "Phase 1 · Family Objectives & Risk Map — defining capital mission and tolerance.",
        "Phase 2 · Multi-Asset Blueprint — equity, credit and alternatives.",
        "Phase 3 · Structural Arbitrage Deployment — exploiting mispricing and spreads.",
        "Phase 4 · Tax Optimization Overlay — coordinating with tax advisors.",
        "Phase 5 · Ongoing Monitoring & Rebalancing — dynamic allocation shifts.",
        "Phase 6 · Intergenerational Transition Planning — succession and estate design.",
      ],
      mandates: [
        "Multi-jurisdiction family office — cross-border multi-asset mandate with robust downside protection.",
        "Founder liquidity event — redeployment of proceeds into a fortress-style wealth architecture.",
        "Legacy industrial family — migration from static real assets to diversified, alpha-oriented portfolio.",
      ],
      statutory:
        "Advisory is delivered under a fiduciary framework; product selection avoids commission-driven bias. All investments remain subject to market, credit and liquidity risk; outcomes depend on macro conditions and client execution of agreed structures.",
    },
  },

  // ======================
  // LEVEL 11
  // ======================
  {
    id: "tech-digital-foundry",
    level: "LEVEL 11 · TECHNOLOGY & INNOVATION",
    title: "Technology & Innovation: The Digital Foundry",
    sectionLabel: "SECTION 11: TECHNOLOGY & INNOVATION",
    sourceService: "Technology & Innovation",
    websiteName: "The Digital Foundry",
    subPages: [
      "The Digital Foundry: Ozzuno Neural Core & Algorithmic Stack",
      "Cyber-Sovereignty: Zero-Trust Architecture & Blockchain Settlement",
      "Fintech Solutions: Digital Lending & Investment Platforms",
    ],
    cardSummary:
      "Proprietary algorithmic stack, cyber-sovereign infrastructure and fintech rails powering the Ozzuno capital engine.",
    detail: {
      narrative: [
        "Ozzuno operates as a technology company disguised as a financial institution. Our operations are driven by the Ozzuno Neural Core — a proprietary algorithmic stack built on cloud-native microservices that ingests market and transactional data at millisecond latency.",
        "Predictive models, built in tandem with our Research & Analysis wing, scan multi-asset data to detect liquidity fractures, pricing inefficiencies and grey-market signals long before they become visible to the public domain.",
        "Cyber-sovereignty is non-negotiable. A military-grade cybersecurity grid, zero-trust network design and biometric access control ensure that sensitive capital flows, due diligence reports and valuation models remain compartmentalised and tamper-resistant.",
        "We are piloting a blockchain settlement layer for unlisted shares, private equity cap tables and off-market transfers, creating immutable, transparent and audit-ready ownership records across counterparties.",
        "A unified digital marketplace underpins our franchise and distribution grid — integrating APIs from banks, NBFCs, insurers and investment platforms to deliver loan origination, underwriting and investment execution at fintech speed.",
      ],
      matrixTitle: "The Digital Foundry Execution Stack",
      matrixPhases: [
        "Phase 1 · Data Lake & Neural Core — ingestion of market, client and transactional data.",
        "Phase 2 · ML & Predictive Models — detection of anomalies, spreads and opportunities.",
        "Phase 3 · Cyber-Sovereignty Grid — zero-trust enforcement and biometric access.",
        "Phase 4 · Blockchain Settlement Layer — immutable recording of critical ownership flows.",
        "Phase 5 · Fintech Marketplace Integration — API orchestration for loans, insurance and investments.",
      ],
      mandates: [
        "Algorithmic routing engine for internal deal screening and prioritisation.",
        "Pilot DLT-based cap table registry for a private equity portfolio company.",
        "End-to-end digital franchise marketplace for loans, insurance and investments.",
      ],
      statutory:
        "All technology deployments are aligned with Indian data protection rules, CERT-In advisories and financial sector regulations. Blockchain and AI pilots are implemented within controlled sandboxes; no deployment is offered as a guarantee of returns or risk elimination.",
    },
  },

  // ======================
  // LEVEL 12
  // ======================
  {
    id: "investor-relations",
    level: "LEVEL 12 · INVESTOR RELATIONS",
    title: "Investor Relations: Stakeholder Reporting Regime",
    sectionLabel: "SECTION 12: INVESTOR RELATIONS",
    sourceService: "Investor Relations",
    websiteName: "Stakeholder Reporting Regime",
    subPages: [
      "Performance Metrics: Assets Under Advisory (AUA) & Capital Velocity",
      "The Chairman’s Communiqué: Annual Strategic Decree",
      "Press Room: Transaction Tombstones & Deal Closures",
    ],
    cardSummary:
      "Radical transparency for sophisticated capital — AUA trajectory, deployment velocity and verified transaction tombstones.",
    detail: {
      narrative: [
        "Investor Relations at Ozzuno is run as a stakeholder reporting regime, not a marketing façade. Dashboards are engineered for institutional allocators who underwrite us on empirical performance, not narrative alone.",
        "Core metrics include the trajectory of Assets Under Advisory across wealth and private equity, capital deployment velocity from idle cash to yield-generating structures, and closure ratios on M&A, strategic exits and capital raising mandates.",
        "An annual Chairman’s Communiqué functions as the State of the Firm document — setting out the macro thesis, geopolitical risk map, monetary policy view and the resulting Ozzuno positioning across public and private markets.",
        "We voluntarily exceed statutory disclosure standards by publishing regular updates on our risk management, assurance reviews and compliance audits, along with tombstones of executed IPO, merchant banking and advisory mandates.",
      ],
      matrixTitle: "Stakeholder Reporting & Disclosure Framework",
      matrixPhases: [
        "Layer 1 · Performance Analytics — AUA, capital velocity and closure ratios.",
        "Layer 2 · Strategic Communication — Chairman’s Communiqué and macro thesis.",
        "Layer 3 · Risk & Governance Updates — periodic reports on risk and compliance.",
        "Layer 4 · Tombstone Library — verifiable deal history and transaction evidence.",
      ],
      mandates: [
        "Quarterly AUA and capital deployment dashboards for key institutional stakeholders.",
        "Annual Chairman’s Communiqué issued as a strategic anchor document.",
        "Public-facing tombstone archive for IPO, M&A and structured finance mandates.",
      ],
      statutory:
        "While Ozzuno is a private entity, disclosure practices are modelled on listed-company norms and SEBI-aligned transparency principles. All performance metrics are indicative, unaudited unless expressly specified, and do not constitute forward-looking guarantees.",
    },
  },

  // ======================
  // LEVEL 13
  // ======================
  {
    id: "governance",
    level: "LEVEL 13 · CORPORATE GOVERNANCE",
    title: "Corporate Governance: The Compliance Iron-Dome",
    sectionLabel: "SECTION 13: CORPORATE GOVERNANCE",
    sourceService: "Corporate Governance & Compliance",
    websiteName: "The Compliance Iron-Dome",
    subPages: [
      "The Compliance Iron-Dome: Statutory Adherence Charter (SEBI/RBI)",
      "Code of Ethics: Zero-Tolerance Integrity Protocol",
      "CSR & ESG Framework: Sustainability Mandates",
    ],
    cardSummary:
      "Hyper-compliance architecture — SEBI/RBI matrices, AML/CFT, ethics code and ESG-aligned deployment of capital.",
    detail: {
      narrative: [
        "We function under a presumption of audit: every mandate is executed as though a regulator were monitoring in real time. Governance is treated as a strategic asset, not a defensive cost centre.",
        "Our statutory charter aligns with SEBI regulations on merchant banking, insider trading and takeovers, as well as RBI prudential norms for debt, NBFC advisory and capital adequacy. AML and CFT protocols subject all capital inflows to aggressive screening.",
        "A zero-tolerance Code of Ethics governs conflicts of interest, UPSI handling, gifts and entertainment. Institutional interest always supersedes individual economics; serious deviations trigger immediate separation and, where warranted, prosecution.",
        "ESG and CSR frameworks are embedded into how we deploy capital and profits — avoiding ecologically destructive sectors and redirecting a portion of profits into Schedule VII–aligned social initiatives.",
      ],
      matrixTitle: "Compliance Iron-Dome Governance Matrix",
      matrixPhases: [
        "Pillar 1 · SEBI & RBI Alignment — regulatory mapping for each business vertical.",
        "Pillar 2 · AML/CFT Grid — enhanced due diligence on capital inflows and clients.",
        "Pillar 3 · Ethics & Conduct — zero-tolerance code for conflicts and UPSI.",
        "Pillar 4 · ESG & CSR — sustainability screens and structured social deployment.",
      ],
      mandates: [
        "Design and enforcement of internal SEBI/RBI compliance matrices across mandates.",
        "Firm-wide Code of Ethics with mandatory training and annual attestations.",
        "ESG policy that filters capital deployment and guides CSR allocations.",
      ],
      statutory:
        "All governance practices are designed to be compatible with the Companies Act, SEBI regulations, RBI circulars and applicable tax statutes. Internal policies may be stricter than law; they do not dilute any statutory obligation owed to regulators or clients.",
    },
  },

  // ======================
  // LEVEL 14
  // ======================
  {
    id: "legal-grievance",
    level: "LEVEL 14 · LEGAL & GRIEVANCE REDRESSAL",
    title: "Legal & Grievance Redressal: Adjudication Protocols",
    sectionLabel: "SECTION 14: LEGAL & GRIEVANCE REDRESSAL",
    sourceService: "Legal, Ombudsman & Disclosures",
    websiteName: "Adjudication Protocols",
    subPages: [
      "The Ombudsman: Internal Adjudication Tribunal",
      "Regulatory Disclosures: Risk Acknowledgement & Data Sovereignty",
      "Terms of Engagement: Jurisdiction & Limitation of Liability",
    ],
    cardSummary:
      "Internal ombudsman tribunal, hard-edged engagement terms and explicit risk/data sovereignty disclosures.",
    detail: {
      narrative: [
        "We maintain an internal Adjudication Tribunal headed by an Ombudsman empowered to hear grievances from clients, partners and stakeholders regarding products or advisory services.",
        "The Ombudsman conducts evidence-based hearings, calls for documentation and issues reasoned, binding resolutions wherever contractually permitted, reducing the need for external litigation.",
        "Every client in private equity, unlisted securities or complex advisory mandates executes a detailed Risk Disclosure Document that sets out illiquidity, valuation, regulatory and market risks.",
        "Data sovereignty is enforced under the Digital Personal Data Protection (DPDP) regime — sensitive financial data is domiciled on secure infrastructure in India and never monetised for third-party marketing.",
        "Engagement terms are drafted by Tier-1 counsel and specify jurisdiction, indemnity, KYC/AML preconditions and clear limitations of liability, particularly around force majeure, sovereign shocks and systemic market events.",
      ],
      matrixTitle: "Legal & Grievance Redressal Framework",
      matrixPhases: [
        "Stage 1 · Grievance Intake — structured receipt and registration of complaints.",
        "Stage 2 · Evidence & Hearing — Ombudsman-led review of facts and documents.",
        "Stage 3 · Determination & Remedy — binding resolution where contractually permitted.",
        "Stage 4 · Risk & Data Disclosures — RDD execution and DPDP-compliant handling.",
        "Stage 5 · Jurisdiction & Liability — strict contract enforcement and KYC/AML gating.",
      ],
      mandates: [
        "Internal Ombudsman charter for structured grievance redressal.",
        "Standardised Risk Disclosure Document for complex and illiquid products.",
        "Firm-wide DPDP-compliant data handling and retention practices.",
      ],
      statutory:
        "All legal and grievance mechanisms are subject to Indian law and the exclusive jurisdiction clauses contained in our engagement letters. Internal remedies do not substitute or prejudice statutory and regulatory dispute resolution forums available to clients.",
    },
  },

  // ======================
  // LEVEL 15
  // ======================
  {
    id: "human-capital",
    level: "LEVEL 15 · HUMAN CAPITAL",
    title: "Human Capital: The Selection Crucible",
    sectionLabel: "SECTION 15: HUMAN CAPITAL",
    sourceService: "Human Capital & Talent Programs",
    websiteName: "The Selection Crucible",
    subPages: [
      "The Selection Crucible: Talent Acquisition Philosophy",
      'The Analyst Program: "The Forge" (Graduate Induction)',
      "Lateral Partners: Senior Operative Recruitment",
    ],
    cardSummary:
      "A selection crucible for high-intensity operatives — from The Forge analyst program to partner-level mandate originators.",
    detail: {
      narrative: [
        "We do not recruit to fill seats; we select to build an elite operating corps. The bar for entry is calibrated against global institutions, not local averages.",
        "The Analyst Program, known internally as The Forge, is a 24-month induction that breaks existing cognitive patterns and rebuilds recruits into financial tacticians fluent in modelling, research and due diligence under pressure.",
        "Associates and lateral hires are expected to bring demonstrable transaction experience in debt, private equity, M&A or capital markets and to manage live deal flow with minimal supervision.",
        "The Partner track is reserved for operatives who can originate, structure and close sovereign-scale mandates and uphold firm-wide P&L responsibility for their verticals.",
        "An active alumni network of former Ozzuno operatives in global C-suites acts as an extended influence and intelligence grid for the firm.",
      ],
      matrixTitle: "Human Capital Operating Hierarchy",
      matrixPhases: [
        "Tier 1 · The Forge (Analyst Program) — 24-month technical and tactical conditioning.",
        "Tier 2 · Associate Vector — mid-career specialists running live deal flow.",
        "Tier 3 · Partner Track — mandate originators with P&L accountability.",
        "Tier 4 · Alumni Network — strategic diaspora embedded across global institutions.",
      ],
      mandates: [
        "Ultra-selective Analyst intake with a low single-digit acceptance rate.",
        "Structured Analyst rotation across M&A, capital markets and risk verticals.",
        "Partner-level responsibility for division P&L and strategic direction.",
      ],
      statutory:
        "Human capital practices comply with applicable labour laws and employment regulations. Cultural expectations of intensity and performance do not override legal obligations around working conditions, non-discrimination and workplace safety.",
    },
  },

  // ======================
  // LEVEL 16
  // ======================
  {
    id: "contact-nodes",
    level: "LEVEL 16 · CONTACT & GLOBAL NODES",
    title: "Contact & Global Nodes: Strategic Command Centers",
    sectionLabel: "SECTION 16: CONTACT & GLOBAL NODES",
    sourceService: "Contact & Global Nodes",
    websiteName: "Strategic Command Centers",
    subPages: [
      "Central Command (Mumbai): Headquarters & War Room",
      "Regional Strategic Desks: Delhi (Policy) & Bangalore (Tech)",
      "The Data Vault: [SECURE] Digital Upload for Sensitive Documents",
    ],
    cardSummary:
      "Headquarters, regional nodes and a secure digital vault for sensitive data and whistleblower reporting.",
    detail: {
      narrative: [
        "Central Command in Mumbai functions as the primary war room for domestic capital markets, housing merchant banking, IPO and strategic advisory teams under a high-security protocol.",
        "Regional Strategic Desks in Delhi and Bangalore manage, respectively, policy and regulatory liaison, and the technology–venture capital interface, keeping Ozzuno wired into both state and startup ecosystems.",
        "International liaison nodes in Dubai and London support cross-border capital flows, ECB syndication and overseas deployment, extending our liquidity architecture across time zones.",
        "The Data Vault is a [SECURE] digital upload channel for due diligence, KYC and financial statements, protected by strong encryption, metadata scrubbing and quarantine before internal access.",
        "A dedicated whistleblower portal routes sensitive ethics and misconduct reports directly to the Ombudsman, bypassing operational hierarchies and preserving anonymity.",
      ],
      matrixTitle: "Global Nodes & Data Vault Protocol",
      matrixPhases: [
        "Node 1 · Mumbai Central Command — domestic capital markets war room.",
        "Node 2 · Delhi Policy Desk — government and regulator interface.",
        "Node 3 · Bangalore Tech-Fin Desk — VC, startups and digital transformation.",
        "Node 4 · International Nodes — Dubai and London liquidity conduits.",
        "Layer · Data Vault — AES-grade encrypted uploads and whistleblower channel.",
      ],
      mandates: [
        "Appointment-only access protocol for Mumbai headquarters with NDA gating.",
        "Dedicated policy liaison capability for competition and regulatory clearances.",
        "Secure, encrypted document intake for high-sensitivity mandates.",
      ],
      statutory:
        "All physical and digital nodes operate under applicable local and international regulations, including KYC/AML, data protection and cross-border capital rules. The Data Vault and whistleblower channels are structured to respect privacy, evidence integrity and regulatory cooperation.",
    },
  },
];

function Level4() {
  const [activeLevel, setActiveLevel] = useState(sections[0]?.level || null);
  const [activeSection, setActiveSection] = useState(sections[0] || null);
  const [activeSubPage, setActiveSubPage] = useState(
    sections[0]?.subPages?.[0] || null
  );

  const levelOrder = [...new Set(sections.map((s) => s.level))];

  const handleLevelClick = (levelKey) => {
    const group = sections.filter((s) => s.level === levelKey);
    const firstSec = group[0] || null;
    setActiveLevel(levelKey);
    setActiveSection(firstSec);
    setActiveSubPage(firstSec?.subPages?.[0] || null);
  };

  const handleSubPageClick = (sec, sp) => {
    setActiveLevel(sec.level);
    setActiveSection(sec);
    setActiveSubPage(sp);
  };

  const currentLevelSections = activeLevel
    ? sections.filter((s) => s.level === activeLevel)
    : [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-10">
        {/* Top Heading */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Capital Stack
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Private Capital, Global Markets & Intelligence Grid
          </h1>
          <p className="max-w-3xl text-sm md:text-base text-slate-600">
            A layered architecture of private capital, cross-border liquidity,
            unlisted markets, assurance, risk, intelligence, franchise
            distribution and intergenerational wealth.
          </p>
        </header>

        {/* LEVEL CARDS — HORIZONTAL (SCROLLBAR HIDDEN) */}
        <div className="-mx-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-2 min-w-max">
            {levelOrder.map((levelKey) => {
              const [levelTag, levelName] = levelKey
                .split("·")
                .map((x) => x.trim());
              const isActive = activeLevel === levelKey;

              return (
                <button
                  key={levelKey}
                  type="button"
                  onClick={() => handleLevelClick(levelKey)}
                  className={`min-w-[220px] rounded-3xl border px-5 py-4 text-left shadow-sm transition 
                    ${
                      isActive
                        ? "bg-slate-900 text-slate-50 border-slate-900"
                        : "bg-white text-slate-900 border-slate-200 hover:border-orange-400/70 hover:shadow-md"
                    }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] opacity-70">
                    {levelTag}
                  </p>
                  <p className="mt-2 text-sm md:text-base font-serif">
                    {levelName}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* DROPDOWN-STYLE PANEL FOR ACTIVE LEVEL */}
        {activeLevel && (
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
            {/* Heading of active level */}
            {(() => {
              const [tag, name] = activeLevel.split("·").map((x) => x.trim());
              return (
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                    {tag}
                  </p>
                  <h2 className="mt-2 text-xl md:text-2xl font-serif text-neutral-900">
                    {name}
                  </h2>
                  <p className="mt-2 text-xs md:text-sm text-slate-500 max-w-2xl">
                    Select a service and sub-page to view detailed execution
                    content.
                  </p>
                </div>
              );
            })()}

            {/* SERVICE SWITCHER (SMALL CARDS) */}
            <div className="mt-4 flex flex-wrap gap-3">
              {currentLevelSections.map((sec) => {
                const isActiveService = activeSection?.id === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => {
                      setActiveSection(sec);
                      setActiveSubPage(sec.subPages?.[0] || null);
                    }}
                    className={`rounded-2xl border px-4 py-3 text-left text-xs md:text-sm transition
                      ${
                        isActiveService
                          ? "bg-slate-900 text-slate-50 border-slate-900"
                          : "bg-slate-50 text-slate-800 border-slate-200 hover:border-orange-300 hover:bg-white"
                      }`}
                  >
                    <div className="font-semibold">{sec.title}</div>
                    <div className="mt-1 text-[10px] md:text-xs opacity-80">
                      {sec.sourceService}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE SERVICE CARD (SINGLE) */}
            {activeSection && activeSection.level === activeLevel && (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 md:p-5 flex flex-col gap-3">
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-neutral-900">
                    {activeSection.title}
                  </h3>
                <p className="mt-1 text-[11px] md:text-xs text-slate-500">
                    {activeSection.sourceService} · {activeSection.websiteName}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-slate-600">
                  {activeSection.cardSummary}
                </p>

                {/* Sub-pages as chips */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeSection.subPages.map((sp) => {
                    const isActiveSub =
                      activeSection?.id === activeSection.id &&
                      activeSubPage === sp;
                    return (
                      <button
                        key={sp}
                        type="button"
                        onClick={() => handleSubPageClick(activeSection, sp)}
                        className={`rounded-full px-3 py-1 text-[10px] md:text-xs border transition
                          ${
                            isActiveSub
                              ? "bg-slate-900 text-slate-50 border-slate-900"
                              : "bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:text-orange-700"
                          }`}
                      >
                        {sp}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        )}

        {/* CONTENT AREA FOR ACTIVE SUBPAGE (INLINE) */}
        {activeSection && (
          <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                {activeSection.sectionLabel}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-neutral-900">
                {activeSection.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                {activeSection.sourceService} · {activeSection.websiteName}
              </p>
              {activeSubPage && (
                <p className="mt-1 inline-flex items-center rounded-full bg-slate-900 text-slate-50 px-3 py-1 text-[10px] md:text-xs">
                  Sub-page: {activeSubPage}
                </p>
              )}
            </div>

            {/* Narrative */}
            <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-slate-700">
              {activeSection.detail.narrative.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {/* Matrix */}
            <div className="border-t border-slate-200 pt-5">
              <h3 className="text-sm md:text-base font-semibold text-neutral-900">
                {activeSection.detail.matrixTitle}
              </h3>
              {activeSection.detail.matrixPhases && (
                <ul className="mt-3 space-y-1.5 text-sm md:text-[15px] text-slate-700">
                  {activeSection.detail.matrixPhases.map((ph) => (
                    <li key={ph}>• {ph}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mandates */}
            <div className="border-t border-slate-200 pt-5">
              <h3 className="text-sm md:text-base font-semibold text-neutral-900">
                Representative Mandates
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm md:text-[15px] text-slate-700">
                {activeSection.detail.mandates.map((m) => (
                  <li key={m}>• {m}</li>
                ))}
              </ul>
            </div>

            {/* Statutory */}
            <div className="border-t border-slate-200 pt-5 pb-1">
              <h3 className="text-sm md:text-base font-semibold text-neutral-900">
                Statutory Adherence &amp; Risk Disclosure
              </h3>
              <p className="mt-3 text-sm md:text-[15px] text-slate-700">
                {activeSection.detail.statutory}
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Level4;
