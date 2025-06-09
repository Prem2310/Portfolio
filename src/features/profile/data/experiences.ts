import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "ODOO IN",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Developer Intern",
        year: "01.2025 — present",
        employmentType: "Full-time",
        icon: "code",
        description:
          " Delivered production-grade ERP features (Invoicing, Accounting) using Python and Odoo framework; improved code performance, resolved critical bugs, and shipped fully tested modules in Agile sprints.",
        skills: [
          "Python",
          "JavaScript",
          "React",
          "ORM",
          "Postgresql",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        expanded: true,
      },
    ],
    current: true,
  },
  {
    company: "VMUKTI",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Intern",
        year: "04.2024 — 06-2024",
        employmentType: "Internship",
        icon: "code",
        description:
          " Researched industrial machinery, robotic systems, and automation for CCTV camera production. and developed aconcise automation plan, collaborating with teams to adopt new technologies, boosting manufacturing efficiency.",
        skills: [
          "Python",
          "Automation",
          "Research",
          "Project Management",
        ],
        expanded: true,
      },

    ],
    current: false,
  },


  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Adani Institute of Infrastructure Engineering",
        year: "09-21 - 06-2025",
        icon: "education",
        description:
          "-Bachelor's degree in Computer Science and engineering (AI-ML).\n- CGPA: 8.78.",
        skills: [
          "C++",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Arpan Internation School",
        year: "06.2019 — 03.2021",
        icon: "education",
        description:
          "- Grade XII.\n- 90.15 %\n",
        skills: [
          "Self-learning",
        ],
      },
    ],
  },
];
