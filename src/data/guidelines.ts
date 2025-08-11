export interface Guideline {
  id: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const supremeCourtGuidelines: Guideline[] = [
  {
    id: 1,
    title: "Uniform Mental Health Policy",
    description:
      "All educational institutions shall adopt and implement a uniform mental health policy, drawing cues from the UMMEED Draft Guidelines, the MANODARPAN initiative, and the National Suicide Prevention Strategy. This policy shall be reviewed and updated annually and made publicly accessible on institutional websites and notice boards of the institutes.",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Appoint Qualified Counsellor (100+ Students)",
    description:
      "All educational institutions with 100 or more enrolled students shall appoint/engage at least one qualified counsellor, psychologist, or social worker with demonstrable training in child and adolescent mental health. Institutions with fewer students shall establish formal referral linkages with external mental health professionals.",
    isHighlighted: true,
  },
  {
    id: 3,
    title: "Optimal Counsellor Ratios & Mentorship",
    description:
      "All educational institutions shall ensure optimal student-to-counsellor ratios. Dedicated mentors or counsellors shall be assigned to smaller batches of students, especially during examination periods and academic transitions, to provide consistent, informal, and confidential support.",
    isHighlighted: true,
  },
  {
    id: 4,
    title: "No Batch Segregation or Shaming",
    description:
      "All educational institutions, more particularly the coaching institutes/centres, shall, as far as possible, refrain from engaging in batch segregation based on academic performance, public shaming, or assignment of academic targets disproportionate to students’ capacities.",
    isHighlighted: true,
  },
  {
    id: 5,
    title: "Referral Protocols & Helpline Visibility",
    description:
      "All educational institutions shall establish written protocols for immediate referral to mental health services, local hospitals, and suicide prevention helplines. Suicide helpline numbers, including Tele-MANAS and other national services, shall be prominently displayed in hostels, classrooms, common areas, and on websites in large and legible print.",
    isHighlighted: true,
  },
  {
    id: 6,
    title: "Biannual Staff Training",
    description:
      "All teaching and non-teaching staff shall undergo mandatory training at least twice a year, conducted by certified mental health professionals, on psychological first-aid, identification of warning signs, response to self-harm, and referral mechanisms.",
  },
  {
    id: 7,
    title: "Inclusive Engagement with Vulnerable Groups",
    description:
      "All educational institutions shall ensure that all teaching, non-teaching, and administrative staff are adequately trained to engage with students from vulnerable and marginalised backgrounds in a sensitive, inclusive, and non-discriminatory manner. This shall include, but not be limited to, students belonging to Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), Economically Weaker Sections (EWS), LGBTQ+ communities, students with disabilities, those in out-of-home care, and students affected by bereavement, trauma, or prior suicide attempts, or intersecting form of marginalisation.",
  },
  {
    id: 8,
    title: "Robust Reporting & Redressal",
    description:
      "All educational institutions shall establish robust, confidential, and accessible mechanisms for the reporting, redressal, and prevention of incidents involving sexual assault, harassment, ragging, and bullying on the basis of caste, class, gender, sexual orientation, disability, religion, or ethnicity. Every such institution shall constitute an internal committee or designated authority empowered to take immediate action on complaints and provide psycho-social support to victims. Institutions shall also maintain zero tolerance for retaliatory actions against complainants or whistle-blowers. In all such cases, immediate referral to trained mental health professionals must be ensured, and the student's safety, physical and psychological, shall be prioritised. Failure to take timely or adequate action in such cases, especially where such neglect contributes to a student’s self-harm or suicide, shall be treated as institutional culpability, making the administration liable to regulatory and legal consequences.",
  },
  {
    id: 9,
    title: "Parent Sensitisation & Student MH Literacy",
    description:
      "All educational Institutions shall regularly organise sensitisation programmes (physical and/or online) for parents and guardians on student mental health. It shall be the duty of the institution to sensitise the parents and guardians to avoid placing undue academic pressure, to recognise signs of psychological distress, and to respond empathetically and supportively. Further, mental health literacy, emotional regulation, life skills education, and awareness of institutional support services shall be integrated into student orientation programmes and co-curricular activities.",
  },
  {
    id: 10,
    title: "Anonymised Records & Annual Reporting",
    description:
      "All educational institutions shall maintain anonymised records and prepare an annual report indicating the number of wellness interventions, student referrals, training sessions, and mental health-related activities. This report shall be submitted to the relevant regulatory authority, which may be the State Education Department, University Grants Commission (UGC), All India Council for Technical Education (AICTE), Central Board of Secondary Education (CBSE), or as otherwise indicated.",
  },
  {
    id: 11,
    title: "Prioritise Extracurriculars; Review Exams",
    description:
      "All educational institutions shall prioritise extracurricular activities, including sports, arts, and personality development initiatives. Examination patterns shall be periodically reviewed to reduce academic burden and to cultivate a broader sense of identity among students beyond test scores and ranks.",
  },
  {
    id: 12,
    title: "Regular Career Counselling",
    description:
      "All educational institutions, including coaching centres and training institutes, shall provide regular, structured career counselling services for students and their parents or guardians. These sessions shall be conducted by qualified counsellors and shall aim to reduce unrealistic academic pressure, promote awareness of diverse academic and professional pathways, and assist students in making informed and interest-based career decisions. Institutions shall ensure that such counselling is inclusive, sensitive to socio-economic and psychological contexts, and does not reinforce narrow definitions of merit or success.",
  },
  {
    id: 13,
    title: "Safe, Substance-Free Campuses",
    description:
      "All residential-based educational institutions, including hostel owners, wardens and caretakers, shall take proactive steps to ensure that campuses remain free from harassment, bullying, drugs, and other harmful substances, thereby ensuring a safe and healthy living and learning environment for all students.",
  },
  {
    id: 14,
    title: "Safety Devices & Restricted Access",
    description:
      "All residential-based institutions shall install tamper-proof ceiling fans or equivalent safety devices, and shall restrict access to rooftops, balconies, and other high-risk areas, in order to deter impulsive acts of self-harm.",
  },
  {
    id: 15,
    title: "Heightened Protections in Coaching Hubs",
    description:
      "All coaching hubs, including but not limited to Jaipur, Kota, Sikar, Chennai, Hyderabad, Delhi, Mumbai, and other cities where students migrate in large numbers for competitive examination preparation, shall implement heightened mental health protections and preventive measures. These regions, having witnessed disproportionately high incidents of student suicides, require special attention. The concerned authorities, namely, the Department of Education, District Administration, and management of educational institutions, shall ensure the provision of regular career counselling for students and parents, regulation of academic pressure through structured academic planning, availability of continuous psychological support, and the establishment of institutional mechanisms for monitoring and accountability to safeguard student mental well-being.",
  },
];