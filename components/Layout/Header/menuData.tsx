import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },

  {
    id: 33,
    title: "Who We Are",
    newTab: false,
    path: "/who_we_are",
    submenu: [
      {
        id: 1,
        title: "About Us",
        newTab: false,
        path: "/who_we_are",
      },
      // {
      //   id: 2,
      //   title: "Our Accreditation",
      //   newTab: false,
      //   path: "/who_we_are/accreditation",
      // },
      {
        id: 3,
        title: "Certification Withdrawal",
        newTab: false,
        path: "/who_we_are/certification_withdrawal_policy",
      },
      {
        id: 4,
        title: "Certification Mark Use",
        newTab: false,
        path: "/who_we_are/certification_mark_use_policy",
      },
      {
        id: 5,
        title: "Certification Process",
        newTab: false,
        path: "/who_we_are/certification_process",
      },
      {
        id: 6,
        title: "Code of Ethics",
        newTab: false,
        path: "/who_we_are/code_of_ethics",
      },
      {
        id: 7,
        title: "Certification Catalogue",
        newTab: false,
        path: "/certification_catalogue",
      },
    ],
  },

  {
    id: 22,
    title: "Services",
    newTab: false,
    submenu: [
      // {
      //   id: 2.1,
      //   title: "Courses",
      //   newTab: false,
      //   path: "/courses",
      // },
      {
        id: 31,
        title: "Certification",
        newTab: false,
        path: "/certification",
      },
      {
        id: 34,
        title: "Auditing",
        newTab: false,
        path: "/auditing",
      },
      {
        id: 35,
        title: "Outsourcing",
        newTab: false,
        path: "/outsourcing",
      },
      {
        id: 35,
        title: "inspection",
        newTab: false,
        path: "/inspection",
      },

      {
        id: 2.1,
        title: "Verification",
        newTab: false,
        path: "/verification_validation",
      },
      {
        id: 2.3,
        title: "Training",
        newTab: false,
        path: "/training",
      },
    ],
  },

  {
    id: 23,
    title: "Sector",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Energy",
        newTab: false,
        path: "/energy_sector",
      },
      {
        id: 32,
        title: "Food and Agriculture",
        newTab: false,
        path: "/food_and_agriculture",
      },
      {
        id: 33,
        title: "Industrial sector",
        newTab: false,
        path: "/industrial_sector",
      },
      {
        id: 34,
        title: "Automotive sector",
        newTab: false,
        path: "/automotive_Sector",
      },
      {
        id: 35,
        title: "Governance and Policy",
        newTab: false,
        path: "/government_and_policy",
      },
      {
        id: 36,
        title: "Technology and Media",
        newTab: false,
        path: "/technology_and_media",
      },
      {
        id: 37,
        title: "Health Care Sector",
        newTab: false,
        path: "/healthcare_sector",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },

  {
    id: 31,
    title: "Policy",
    newTab: false,
    submenu: [
      // {
      //   id: 12,
      //   title: "Privacy",
      //   newTab: false,
      //   path: "/policy",
      // },
      {
        id: 7,
        title: "Complaint/Appeal",
        newTab: false,
        path: "/policy/complaint",
      },
      {
        id: 8,
        title: "Confidentiality",
        newTab: false,
        path: "/policy/confidentiality",
      },
      // {
      //   id: 9,
      //   title: "Exam Retake",
      //   newTab: false,
      //   path: "/policy/exam_retake",
      // },
      {
        id: 10,
        title: "Exam Security",
        newTab: false,
        path: "/policy/exam_security",
      },
      {
        id: 11,
        title: "Impartiality",
        newTab: false,
        path: "/policy/impartiality",
      },

    ],
  },

];

export default menuData;


