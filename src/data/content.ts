export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
}

export const companyInfo = {
  name: "B.N. Vaidya & Associates",
  tagline: "Legacy of Trust. Excellence in Practice.",
  foundedYear: 1987,
  description: "Founded in 1987, B.N. Vaidya & Associates is a multidisciplinary Chartered Accountancy firm built on a foundation of integrity, precision, and deep-seated expertise. For nearly four decades, we have served as trusted advisors to businesses and individuals, navigating the complexities of the financial landscape with a commitment to excellence.",
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
    ]
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
    ]
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
    ]
  }
];

export interface TeamMember {
  name: string;
  experience: string;
  specialization: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  tradeBodies?: string;
  subjectExpertise?: {
    context: string;
    points: string[];
  };
  previousExperience?: string;
}

export const team: TeamMember[] = [
  {
    name: "Bhargava Vaidya",
    experience: "Around 40 years",
    specialization: "Gem & Jewellery Sector",
    bio: "Bhargava Vaidya, with around four decades of experience, specializes in the Gem & Jewellery sector. He provides consultancy/services to prominent players in the industry, including diamond traders, bullion experts, refineries, and jewellery businesses. The firm also provides services to banks and NBFC’s (Non-Banking Financial companies), mainly to those active in the Gem & Jewellery sector.",
    expertise: [
      "Bullion trading and desk setup for banks",
      "Reform process in bullion (presentations to FMC, RBI, SEBI)",
      "Gold ETFs and Digital Gold products",
      "Commodity exchange setup"
    ],
    tradeBodies: "Bhargava has been a member of various committees set up by trade associations, trade bodies and regulators. He has been a consistent participant in the activities of prestigious entities such as the World Gold Council (WGC), Associated Chamber of Commerce & Industry (ASSOCHAM), Federation of Indian Chambers of Commerce & Industry (FICCI), Gem & Jewellery Export Promotion Council (GJEPC), London Bullion Market Association (LBMA), Dubai Multi Commodity Center (DMCC), India Bullion and Jewellers Association (IBJA), the All India Gem & Jewellery Trade Federation (GJF), and various commodity exchanges.",
    subjectExpertise: {
      context: "Bhargava’s affiliation with bullion started from 1992. Across the years, his contributions include:",
      points: [
        "1993-1994: Member of Federation of Indian Exports Organisation (FIEO) Committee which recommended liberalisation of bullion Import (SIL route).",
        "Set up desk of bullion trading and assisted players in Jewellery Wholesale, Retail & Branded jewellery segment.",
        "Assisted many banks in setting up bullion desk (advising including marketing and compliance procedures).",
        "Been a part of reform process in bullion and made presentations to Forward Market Commission, Reserve Bank of India, SEBI etc.",
        "Involved in the initial set up of commodity exchange in India.",
        "Part of core team which visualized and launched Gold ETF’s.",
        "Actively involved in development of Digital Gold products in India.",
        "Product committee member of national commodity exchanges in India."
      ]
    },
    linkedin: "https://www.linkedin.com/in/bhargava-vaidya-519b3317"
  },
  {
    name: "Bhakti Vaidya",
    experience: "Over 10 years",
    specialization: "Direct Tax & Audit",
    bio: "Bhakti is a Chartered Accountant with over a decade of professional experience in the fields of direct tax and audit. She focuses on the financial services space, specifically in structuring and tax and regulatory aspects. She specialises in setting up of alternative investment funds (AIFs) and investment platforms, including in GIFT City, with a strong focus on tax efficiency and regulatory compliance. She also offers end-to-end transaction support, from due diligence and structuring to execution and ongoing compliance. In addition to the above, she also looks at income tax compliances and return filings and assists clients with tax disputes and litigation.",
    previousExperience: "She has previously worked in Bansi S. Mehta & Co., specialising in direct taxes and also spent over seven years at Ernst & Young LLP, contributing to the Private Equity and Financial Services team, providing direct tax and regulatory services to financial services and private equity clients, including AIFs and offshore funds.",
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
    experience: "Over 20 years",
    specialization: "Taxation, Audit & Advisory",
    bio: "Ashish is a seasoned professional with over 20 years of experience. He has been supporting the firm’s specialized consultancy for the gem & jewellery, textile and paper sectors for over 20 years. With a focus on precision and regulatory excellence, Ashish provides essential support across a wide spectrum of financial and advisory matters.",
    expertise: [
      "Taxation & GST compliance",
      "Accounting & Audit management",
      "Strategic advisory for precious metals and gemstone markets"
    ]
  }
];
