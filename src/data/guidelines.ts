export interface Guideline {
  id: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const supremeCourtGuidelines: Guideline[] = [
  {
    id: 1,
    title: "24/7 Mental Health Support Services",
    description: "Provide round-the-clock access to qualified mental health professionals and counselors for employees experiencing workplace harassment or discrimination.",
    isHighlighted: true
  },
  {
    id: 2,
    title: "Confidential Reporting Mechanism",
    description: "Establish secure, anonymous channels for reporting harassment incidents with guaranteed confidentiality and protection against retaliation.",
    isHighlighted: true
  },
  {
    id: 3,
    title: "Trauma-Informed Response Protocols",
    description: "Implement specialized support systems for survivors of workplace harassment that prioritize their mental health and emotional well-being.",
    isHighlighted: true
  },
  {
    id: 4,
    title: "Employee Assistance Program (EAP)",
    description: "Offer comprehensive mental health assistance programs that include counseling, therapy, and wellness resources for all employees.",
    isHighlighted: true
  },
  {
    id: 5,
    title: "Mental Health Awareness Training",
    description: "Conduct regular training sessions on recognizing signs of mental distress and providing appropriate support to colleagues and subordinates.",
    isHighlighted: true
  },
  {
    id: 6,
    title: "Written Policy Documentation",
    description: "Maintain comprehensive written policies clearly defining sexual harassment, prevention measures, and complaint procedures as mandated by the Court."
  },
  {
    id: 7,
    title: "Internal Complaints Committee (ICC)",
    description: "Establish ICC with external members including NGO representatives, ensuring proper composition and regular training for committee members."
  },
  {
    id: 8,
    title: "Awareness Programs and Workshops",
    description: "Conduct mandatory awareness programs for all employees about workplace rights, harassment prevention, and available support mechanisms."
  },
  {
    id: 9,
    title: "Inquiry Process and Timeline",
    description: "Follow prescribed inquiry procedures with strict timelines (90 days for completion) and ensure fair, unbiased investigation of all complaints."
  },
  {
    id: 10,
    title: "Protection Against Retaliation",
    description: "Implement robust measures to protect complainants and witnesses from any form of retaliation or adverse employment action."
  },
  {
    id: 11,
    title: "Annual Compliance Reporting",
    description: "Submit mandatory annual reports to appropriate authorities detailing number of complaints, actions taken, and compliance measures implemented."
  },
  {
    id: 12,
    title: "Regular Policy Review and Updates",
    description: "Conduct periodic review of policies and procedures to ensure alignment with evolving legal requirements and best practices."
  },
  {
    id: 13,
    title: "Third-Party and Vendor Compliance",
    description: "Extend harassment prevention policies to cover interactions with third-party vendors, clients, and service providers operating within premises."
  },
  {
    id: 14,
    title: "Digital Workplace Harassment Prevention",
    description: "Address online harassment through social media, email, and digital platforms with specific policies and monitoring mechanisms."
  },
  {
    id: 15,
    title: "Remedial Actions and Disciplinary Measures",
    description: "Implement appropriate corrective actions including warnings, training, transfers, or termination based on inquiry findings and severity of misconduct."
  }
];