import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },

  {
    id: 2,
    title: "Who We Are",
    newTab: false,
    path: "/who_we_are",
    submenu: [
      {
        id: 21,
        title: "About Us",
        newTab: false,
        path: "/who_we_are",
      },
      {
        id: 22,
        title: "Certification Withdrawal",
        newTab: false,
        path: "/who_we_are/certification_withdrawal_policy",
      },
      {
        id: 23,
        title: "Certification Mark Use",
        newTab: false,
        path: "/who_we_are/certification_mark_use_policy",
      },
      {
        id: 24,
        title: "Certification Process",
        newTab: false,
        path: "/who_we_are/certification_process",
      },
      {
        id: 25,
        title: "Code of Ethics",
        newTab: false,
        path: "/who_we_are/code_of_ethics",
      },
    ],
  },

  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "Certification",
        newTab: false,
        path: "/certification",
      },
      {
        id: 302,
        title: "Auditing",
        newTab: false,
        path: "/auditing",
      },
      {
        id: 303,
        title: "Outsourcing",
        newTab: false,
        path: "/outsourcing",
      },
      {
        id: 304,
        title: "inspection", // Fixed duplicate 35
        newTab: false,
        path: "/inspection",
      },
      {
        id: 305,
        title: "Verification",
        newTab: false,
        path: "/verification_validation",
      },
      {
        id: 306,
        title: "Training",
        newTab: false,
        path: "/training",
      },
    ],
  },

  {
    id: 4,
    title: "Sector",
    newTab: false,
    submenu: [
      {
        id: 401,
        title: "Energy",
        newTab: false,
        path: "/energy_sector",
      },
      {
        id: 402,
        title: "Food and Agriculture",
        newTab: false,
        path: "/food_and_agriculture",
      },
      {
        id: 403,
        title: "Industrial sector",
        newTab: false,
        path: "/industrial_sector",
      },
      {
        id: 404,
        title: "Automotive sector",
        newTab: false,
        path: "/automotive_Sector",
      },
      {
        id: 405,
        title: "Governance and Policy", // Fixed duplicate 35
        newTab: false,
        path: "/government_and_policy",
      },
      {
        id: 406,
        title: "Technology and Media",
        newTab: false,
        path: "/technology_and_media",
      },
      {
        id: 407,
        title: "Health Care Sector",
        newTab: false,
        path: "/healthcare_sector",
      },
    ],
  },

  {
    id: 5,
    title: "Support",
    newTab: false,
    path: "/support",
  },

  {
    id: 6,
    title: "Policy",
    newTab: false,
    submenu: [
      {
        id: 601,
        title: "Complaint/Appeal",
        newTab: false,
        path: "/policy/complaint",
      },
      {
        id: 602,
        title: "Confidentiality",
        newTab: false,
        path: "/policy/confidentiality",
      },
      {
        id: 603,
        title: "Exam Security",
        newTab: false,
        path: "/policy/exam_security",
      },
      {
        id: 604,
        title: "Impartiality",
        newTab: false,
        path: "/policy/impartiality",
      },
    ],
  },
];

export default menuData;