const dynamicCourseDetails: Record<
  string,
  {
    title: string;
    short: string;
    image: string;
    video?: string;
    overview: string;
    benefits: string[];
    tabs: {
      title: string;
    }[];
    accordion: {
      [key: string]: {
        title: string;
        content: string;
      }[];
    };
    courses: {
      title: string;
      duration: string;
      audience: string;
    }[];
  }
> = {
  "iso-9001-qms": {
    title: "ISO 9001 Quality Management System",
    short: "Quality Management System",
    image: "/images/cert/cert1.png",
    video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    overview:
    "As an international standard, ISO 9001 specifies the requirements for organizations that want to ensure continual improvement and meet customers’ needs. ISO 9001 was specifically designed to serve as a guiding framework for organizations of all sizes and industries as it provides a firm customer focus, namely delivering qualitative goods and services, which subsequently leads to customer satisfaction. The implementation of a Quality Management System is a strategic decision for organizations that aspire to improve their overall performance and provide a strong basis for sustainable development initiatives. The standard assists organizations and/or professionals to plan processes, interactions and have a risk-based thinking.\n" +
      "ISO 9001 certified professionals are considered as a strong asset to any organization. Meeting the future needs and expectations is a big challenge for organizations that operate in any industry, especially in today’s increasingly dynamic environment. Thus, in order to accomplish organizational objectives, it is important to understand the necessity of hiring experts on Quality Management Systems. By implementing ISO 9001, the certified professionals will help organizations to adopt continuous improvement practices and provide them with the essential techniques to ameliorate their working processes. As a result of increased efficiency, all the processes within the organization will be accordingly aligned and understood. Moreover, the productivity will increase, and the costs will decrease.",

    benefits: [
      "Gain expertise on Quality Management Systems",
      "Help the organization to offer qualitative products and services.",
      "Help the organization to reduce costs.",
      "Gain competitive advantage.",
      "Increase effectiveness.",
      "Assist the organization to focus on risk-based thinking.",
      "Contribute to the organization’s continuous improvement.",
      "Improve performance.",
      "Streamline organizational operations."
    ],
    tabs:[
      { title: "Level"},
      { title: "Certification Terms"},
      { title: "Exams Process"},
    ],

    accordion: {
      "Level": [
        {
          title: "ISO 9001 Foundation (FD)",
          content: `ISO 9001 Foundation training enables participants to learn the basic elements to implement and manage a Quality Management System (QMS) as specified in ISO 9001. During this training course, you will be able to understand the different modules of a QMS, including QMS policy, procedures, performance measurements, management commitment, internal audit, management review and continual improvement. After completing this course, participants can sit for the exam. Once participants meet the pass mark, he/she will be given an “True-mark Certified ISO 9001 Foundation” credential. An True-mark Foundation Certificate shows that the participants have understood the fundamental methodologies, requirements, framework and management approach `
        },
        {
          title: "ISO 9001 Champion (CH)",
          content: `ISO 9001:2015 Certified Champion Course is a comprehensive training program designed for individuals appointed by their organizations to lead their departments towards excellence in quality management. This course is specifically crafted for ISO Champions, equipping them with the knowledge and skills necessary to navigate the intricacies of ISO 9001:2015 standards and drive continuous improvement.
After completing this course, participants can sit for the exam. Once participants meet the pass mark, he/she will be given an “True-mark Certified ISO 9001:2015 (QMS) Champion” credential. An True-mark Champion Certificate shows that the participants have understood the fundamental methodologies, practical knowledge and professional capabilities to assist in the implementation of ISO 9001 in an organization.`
        },
        {
          title: "ISO 9001 Lead Implementer (LI)",
          content: `ISO 9001 Lead Implementer training enables you to develop the necessary expertise to support an organization in establishing, implementing, managing and maintaining a Quality Management System (QMS) based on ISO 9001. During this training course, you will also gain a thorough understanding of the best practices of Quality Management Systems and consequently improve an organization’s customer satisfaction and overall performance and effectiveness.
After mastering all the necessary concepts of Quality Management Systems, participants can sit for the exam. Once participants meet the pass mark, he/she will be given an “True-mark Certified ISO 9001 Lead Implementer” credential. By holding an True-mark Lead Implementer Certificate, the participant can be able to demonstrate that he/she has the practical knowledge and professional capabilities to implement ISO 9001 in an organization.`
        },
        {
          title: "ISO 9001 Lead Auditor (LA)",
          content: `The ISO 9001 Lead Auditor training enables you to develop the necessary expertise to perform a Quality Management System (QMS) audit by applying widely recognized audit principles, procedures and techniques. During this training course, you will acquire the knowledge and skills to plan and carry out internal and external audits in compliance with ISO 19011 and the certification process according to ISO/IEC 17021-1.
Based on practical exercises, you will be able to master the audit techniques and become competent to manage an audit program, audit team, communication with customers, and conflict resolution.
After acquiring the necessary expertise to perform this audit, participants can sit for the exam. Once participants meet the pass mark, he/she will be given an “True-mark Certified ISO 9001 Lead Audit” credential. By holding a True-mark Lead Auditor Certificate, the participant can be able to demonstrate that he/she has the practical knowledge and professional capabilities to audit ISO 9001 in an organization.`
        }
      ],
      "Certification Terms": [
        {
          title: "Internal Auditing",
          content: "Practical guidance on internal auditing for QMS."
        },
        {
          title: "Compliance Requirements",
          content: "Details regulatory and compliance obligations."
        }
      ],
      "Exams Process": [
        {
          title: "Preparation",
          content: "Technology Setup\n" +
            "\n" +
            "     Device: Use a desktop or laptop with a working webcam and microphone.\n" +
            "     Mobile phones or tablets are not permitted unless explicitly allowed.\n" +
            "     Internet: Ensure a stable internet connection with sufficient bandwidth to stream video and audio continuously.\n" +
            "     Browser: Use the designated browser as specified by the exam platform.\n" +
            "     Power Backup: Ensure your device is fully charged and/or connected to a reliable power source.\n" +
            "\n" +
            "Environmental Setup\n" +
            "\n" +
            "     Location: Choose a quiet, well-lit room with minimal distractions.\n" +
            "     Background: Ensure the background is plain and free of any clutter or distractions.\n" +
            "     Privacy: No other person is allowed in the room during the examination.\n"

        },
        {
          title: "Exam Structure",
          content: "Explains question formats and duration."
        },
        {
          title: "Certification Issuance",
          content: "Describes how certification is granted after passing the exam."
        }
      ]
    },
    courses: [
      {
        title: "ISO 9001 Foundation",
        duration: "2 Days",
        audience: "Beginners and QMS team members"
      },
      {
        title: "ISO 9001 Implementer",
        duration: "3 Days",
        audience: "Mid-level implementers"
      },
      {
        title: "ISO 9001 Lead Auditor",
        duration: "5 Days",
        audience: "Quality Managers and Auditors"
      }
    ]
  },
  "iso-27001-isms": {
    title: "ISO 27001 Information Security Management",
    short: "Information Security Management",
    image: "/images/iso-27001.png",
    video: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    overview:
      "This course explores the principles and controls of ISO 27001 for securing organizational information.",
    benefits: [
      "Develop strong information security practices",
      "Understand risk assessment methods",
      "Build confidence in managing ISMS systems"
    ],
    tabs:[
      { title: "Level"},
      { title: "Certification Terms"},
      { title: "Exams Process"},
    ],
    accordion: {
      "Level": [
        {
          title: "Foundation",
          content: "Covers basic concepts, terminology, and the importance of ISO 9001."
        },
        {
          title: "Intermediate",
          content: "Introduces implementation strategies for quality systems."
        },
        {
          title: "Advanced",
          content: "Focuses on high-level audit preparation and system integration."
        }
      ],
      "Certification Terms": [
        {
          title: "Internal Auditing",
          content: "Practical guidance on internal auditing for QMS."
        },
        {
          title: "Compliance Requirements",
          content: "Details regulatory and compliance obligations."
        }
      ],
      "Exams Process": [
        {
          title: "Preparation",
          content: "Recommended study materials and tips."
        },
        {
          title: "Exam Structure",
          content: "Explains question formats and duration."
        },
        {
          title: "Certification Issuance",
          content: "Describes how certification is granted after passing the exam."
        }
      ]
    },
    courses: [
      {
        title: "ISO 27001 Foundation",
        duration: "2 Days",
        audience: "IT and Compliance staff"
      },
      {
        title: "ISO 27001 Implementer",
        duration: "3 Days",
        audience: "Information Security Officers"
      },
      {
        title: "ISO 27001 Lead Auditor",
        duration: "5 Days",
        audience: "ISMS Auditors and Security Managers"
      }
    ]
  }
};

export default dynamicCourseDetails;
