export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  caseStudy?: {
    title: string;
    context: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export const companyInfo = {
  name: "B.N. Vaidya & Associates",
  tagline: "Legacy of Trust. Excellence in Practice.",
  foundedYear: 1987,
  description: "B.N. Vaidya & Associates is a multidisciplinary Chartered Accountancy firm built on a foundation of integrity, precision, and deep-seated expertise. For nearly four decades, we have served as trusted advisors to businesses and individuals, navigating the complexities of the financial landscape with a commitment to excellence.",
  contact: {
    phone: "022 2208 7849",
    emails: ["bnvcaoffice@gmail.com", "office@bnvca.co.in"],
    address: {
      line1: "Ground Floor, Vaidya Bhavan",
      line2: "92 Atmaram Merchant Road",
      line3: "2 Anantwadi, Opp Hotel Adarsh Baug",
      city: "Mumbai",
      pincode: "400 002",
      full: "Ground Floor, Vaidya Bhavan, 92 Atmaram Merchant Road, 2 Anantwadi, Opp Hotel Adarsh Baug, Mumbai - 400 002"
    },
    googleMapsLink: "https://maps.app.goo.gl/miWYh4XLE4FSLJTHA"
  }
};

export const services: ServiceDetail[] = [
  {
    id: "direct-tax-gst",
    title: "Direct Taxes and GST",
    shortDescription: "Strategic planning and compliance for both direct and indirect taxes, ensuring your business stays ahead of regulatory shifts.",
    fullDescription: "In an ever-evolving fiscal landscape, our tax practice provides clarity and strategic foresight. We navigate the complexities of both Direct Taxes and the Goods and Services Tax (GST) to ensure that our clients remain compliant while optimizing their tax positions. Our approach combines technical rigor with a deep understanding of our clients' business models.",
    offerings: [
      "Tax consultancy/advisory and structuring services",
      "Litigation services (drafting and representation)",
      "Transaction advisory and support services",
      "Tax due diligence services",
      "Tax compliances under the Income tax Act and GST including issuance of certificates",
      "Income tax return (preparing of computations, filing and review support)",
      "International taxation",
      "Transfer pricing",
      "Tailored solutions for estate/ succession planning"
    ],
    caseStudy: {
      title: "Optimizing GST Structures for a Multi-State Retailer",
      context: "A prominent retail chain with operations across five Indian states was struggling with inconsistent input tax credit (ITC) reconciliation and high compliance overhead.",
      challenge: "The client faced potential tax leakages and significant penalties due to mismatched records across different regional jurisdictions.",
      solution: "We implemented a centralized GST compliance framework, overhauled their internal accounting processes for real-time ITC tracking, and provided representation for pending regional tax assessments.",
      outcome: "Reduced tax liability by 12% through identified leakages and achieved 100% compliance accuracy across all states within the first fiscal year."
    }
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    shortDescription: "Rigorous independent assessments that provide transparency, build stakeholder confidence, and ensure statutory compliance.",
    fullDescription: "Our audit and assurance services go beyond simple compliance. We provide an independent and objective perspective that enhances the reliability of financial information. Through a risk-based methodology, we identify potential areas of improvement in internal controls and financial reporting, providing value that supports long-term growth and stakeholder trust.",
    offerings: [
      "Review of the financials and issuance of statutory audit report for companies and other entities",
      "Tax audit",
      "Internal audit and risk advisory",
      "Management audits"
    ],
    caseStudy: {
      title: "Statutory Audit for a Global Bullion Trading Entity",
      context: "A large-scale bullion importer required a comprehensive statutory audit that adhered to both Indian GAAP and international transparency standards.",
      challenge: "The high-volume, high-value nature of bullion transactions required extremely precise inventory valuation and verification of complex import-export documentation.",
      solution: "Our team deployed specialized audit techniques for precious metals, utilizing a multi-layered verification process for physical inventory and cross-referencing global trade settlements.",
      outcome: "Provided a clean, high-integrity audit report that satisfied international lenders and regulatory bodies, facilitating an expansion of the client's credit lines."
    }
  },
  {
    id: "regulatory-services",
    title: "Regulatory Services",
    shortDescription: "Multidisciplinary support ranging from corporate restructuring to financial risk management.",
    fullDescription: "Navigating the Indian regulatory environment requires expertise across multiple domains. We provide comprehensive support for compliance with SEBI, FEMA, and PMLA regulations. Whether it's corporate restructuring or managing complex financial risks, our multidisciplinary team ensures that your organization operates within the legal framework while pursuing its strategic objectives.",
    offerings: [
      "Assistance in regulatory compliances",
      "Advisory services",
      "SEBI and FEMA related matters",
      "PMLA related matters",
      "Arbitration and mediation services",
      "Advocacy related initiatives"
    ],
    caseStudy: {
      title: "FEMA Compliance for Cross-Border Investment",
      context: "An international investment platform sought to establish a significant presence in India through an Alternative Investment Fund (AIF).",
      challenge: "The transaction involved complex inbound investment routes and required strict adherence to Foreign Exchange Management Act (FEMA) guidelines and SEBI registration norms.",
      solution: "We provided end-to-end advisory on the structuring of the fund, prepared all necessary documentation for FEMA compliance, and navigated the regulatory approval process with the relevant authorities.",
      outcome: "Successfully secured SEBI registration and ensured seamless cross-border capital flow, enabling the client to launch their first Indian fund on schedule."
    }
  }
];

export const team = [
  {
    name: "Bhargava Vaidya",
    role: "Senior Partner",
    experience: "Around 40 years",
    specialization: "Gem & Jewellery Sector",
    bio: "Bhargava Vaidya specializes in the Gem & Jewellery sector, providing consultancy and services to prominent players including diamond traders, bullion experts, refineries, and jewellery businesses. His affiliation with bullion started in 1992, and he has been a consistent participant in activities of prestigious entities such as the World Gold Council, ASSOCHAM, FICCI, and GJEPC.",
    expertise: [
      "Bullion trading and desk setup for banks",
      "Reform process in bullion (presentations to FMC, RBI, SEBI)",
      "Gold ETFs and Digital Gold products",
      "Commodity exchange setup"
    ],
    linkedin: "https://www.linkedin.com/in/bhargava-vaidya-519b3317"
  },
  {
    name: "Bhakti Vaidya",
    role: "Partner",
    experience: "Over 10 years",
    specialization: "Direct Tax & Audit",
    bio: "Bhakti is a Chartered Accountant with extensive experience in direct tax and audit, specifically in the financial services space. She specializes in setting up Alternative Investment Funds (AIFs) and investment platforms, including in GIFT City, with a strong focus on tax efficiency and regulatory compliance.",
    expertise: [
      "AIFs and investment platform structuring",
      "Cross-border tax considerations",
      "Transaction support and due diligence",
      "Tax disputes and litigation"
    ],
    linkedin: "https://www.linkedin.com/in/bhakti-vaidya"
  },
  {
    name: "Ashish Jain",
    role: "Partner",
    experience: "Over 20 years",
    specialization: "Taxation, Audit & Advisory",
    bio: "Ashish is a seasoned professional supporting the firm's specialized consultancy for the gem & jewellery, textile, and paper sectors. He provides essential support across a wide spectrum of financial and advisory matters with a focus on precision and regulatory excellence.",
    expertise: [
      "Taxation & GST compliance",
      "Accounting & Audit management",
      "Strategic advisory for precious metals and gemstone markets"
    ]
  }
];

export const firmHistory = {
  founded: 1987,
  milestones: [
    {
      year: 1987,
      event: "Firm founded by B.N. Vaidya"
    },
    {
      year: 1992,
      event: "Expansion into Bullion sector consultancy"
    },
    {
      year: "1993-1994",
      event: "Member of FIEO Committee recommending liberalisation of bullion Import"
    }
  ]
};
