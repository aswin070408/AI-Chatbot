// ===== KNOWLEDGE BASE (from kings_collegeinfo.txt) =====
const KB = [
  {
    "k": [
      "contact",
      "phone",
      "email",
      "address",
      "reach",
      "where",
      "located",
      "location",
      "website"
    ],
    "a": "Kings College of Engineering (Autonomous)\nPunalkulam, Gandarvakottai Taluk, Pudukkottai District - 613 303, Tamil Nadu. On the Thanjavur-Pudukkottai Highway, about 10 km from Thanjavur New Bus Stand.\nPhone: +91-6380989024\nEmail: contact@kingsengg.edu.in\nWebsite: kingsengg.edu.in\nInformation Centre: 85/26, 3rd Cross, Arulanandha Nagar, VOC Nagar, Thanjavur - 613 007."
  },
  {
    "k": [
      "about",
      "founded",
      "history",
      "trust",
      "naac",
      "nba",
      "accredit",
      "autonomous",
      "motto",
      "established",
      "approved"
    ],
    "a": "KCE was founded in 2001 by Raj Educational Trust, Chennai, to give quality technical education to rural and economically disadvantaged students. It is AICTE approved, affiliated to Anna University, NAAC accredited, ISO certified (TUV Rheinland) and has autonomous status. Some programmes are NBA accredited. Motto: Seek, Strive, Succeed. About 45-50% of students are first graduates. The campus is about 48-50 acres."
  },
  {
    "k": [
      "course",
      "programme",
      "program",
      "branch",
      "offer",
      "intake",
      "seats",
      "ug",
      "pg",
      "phd",
      "ph.d",
      "mba"
    ],
    "a": "KCE offers 7 UG and 5 PG programmes plus Ph.D.\nUG: B.E. CSE (120 seats, since 2001), ECE (120, 2001), EEE (60, 2001), Mechanical (60, 2006), Civil (about 30, 2010); B.Tech AI & Data Science (60, 2023), IT (30, 2024).\nPG: M.E. VLSI Design (2008), Thermal Engineering (2010), Power Electronics and Drives (2008), CSE (2008), 9 seats each; MBA (60 seats, since 2026).\nPh.D.: Mechanical Engineering and ECE (since 2013).\nIntake figures change slightly each year."
  },
  {
    "k": [
      "principal",
      "vice principal",
      "management",
      "governing",
      "council",
      "secretary",
      "controller",
      "trustee"
    ],
    "a": "Principal: Dr. J. Arputha Vijaya Selvi\nVice Principal: Dr. S. Sivakumar\nController of Examinations: Dr. A. Albert Martin Ruban\n\nGoverning Council:\nDr. R. Rajendran - Secretary, Raj Educational Trust\nMr. TRS. Muthukumaar - Trustee, Raj Educational Trust\nMr. S. Ilavarasan - Trustee, Raj Educational Trust\nMr. S. Rajappa - Trustee, Raj Educational Trust\nProf. S. Raghavan - Professor (HAG), Dept. of ECE, NIT Tiruchirappalli\nMr. N. Govindaraj - Director, M/s. Mynor Enterprises Pvt. Ltd., Nagapattinam\nDr. R. Malaiyalamoorthi - Principal, Govt. College of Engineering, Srirangam\nDr. N. Senthil Kumar - Professor, Dept. of Management Studies, Anna University, Chennai\nDr. J. Arputha Vijaya Selvi - Principal, KCE\nDr. S. Sivakumar - Vice Principal, KCE\nDr. A. Albert Martin Ruban - Controller of Examinations, KCE"
  },
  {
    "k": [
      "library",
      "book",
      "journal",
      "borrow",
      "fine",
      "ieee",
      "opac"
    ],
    "a": "Fully computerized library of 1164 sq.mt with about 33,890 volumes (12,256+ titles), 68 printed journals, 1843+ online journals, 8 newspapers, 475 back volumes, 23 IEEE journal collections, DELNET and National Digital Library membership, and OPAC.\nHours: 9:00 AM - 4:30 PM (issue/return 9:00 AM - 4:00 PM).\nBorrowing: UG/PG students 3 books for 10 days (renewable 5 more days); teaching staff 5 books for 1 semester; non-teaching staff 3 books for 30 days.\nFine: Rs. 2/day. Lost book: replace it or pay triple cost. Photocopy: Rs. 2.\nLibrary Advisory Committee Chairman: Dr. S. Sivakumar (Vice Principal)."
  },
  {
    "k": [
      "hostel",
      "mess",
      "accommodation",
      "stay",
      "food"
    ],
    "a": "Separate hostels for boys and girls inside the campus, with veg and non-veg mess, 24x7 purified drinking water, hygienic bathrooms with drying rooms, individual study facilities (table, chair, shelf, power source), telephone facility and a dispensary. Both hostels have a reading room and recreation hall (TV, VCR, carom, chess) and a gym. The ladies' hostel campus has badminton and volleyball courts. Also available: post office, canteen and indoor stadium."
  },
  {
    "k": [
      "sport",
      "cricket",
      "football",
      "kabaddi",
      "ground",
      "gym",
      "basketball",
      "athletic"
    ],
    "a": "Facilities: 2 floodlit basketball courts, indoor shuttle court, volleyball, tennis, ball badminton, full-size cricket ground, football and hockey grounds, table tennis, kabaddi, handball and a 400m track. In 2025-26 KCE won Kabaddi and was runner-up in Cricket and Football at Anna University Zone-15. Physical Education: V. Rajendran (Director) and R. Aruna (Assistant Director)."
  },
  {
    "k": [
      "facility",
      "facilities",
      "infrastructure",
      "campus",
      "canteen",
      "cafeteria",
      "health",
      "medical",
      "generator",
      "internet",
      "wifi"
    ],
    "a": "Green campus with modern classrooms, labs, library, auditorium, hostels, a cafeteria and a 12,000 sq.ft canteen block. Also: purified water on every floor, 250 kVA and 125 kVA generators, campus-wide high-speed internet, and a 24x7 KCE Health Centre with a visiting doctor and full-time female nurse."
  },
  {
    "k": [
      "admission",
      "apply",
      "tnea",
      "eligib",
      "counselling",
      "counseling",
      "tancet",
      "document"
    ],
    "a": "UG (B.E./B.Tech) admission is through TNEA counselling by Anna University. Eligibility: 10+2 Science with 45% (40% reserved) or an Engineering Diploma with 45% (40% reserved).\nSteps: 1) Register on TNEA (usually May/June) 2) Fill college and branch choices 3) Upload documents 4) Attend counselling and confirm allotment 5) Report to KCE with originals and pay fees.\nPG (M.E./MBA) is through TANCET. Check tnea.ac.in for current dates."
  },
  {
    "k": [
      "cutoff",
      "cut-off",
      "cut off",
      "rank"
    ],
    "a": "TNEA 2024 indicative General category ranks (opening - closing):\nAI & Data Science: 28,326 - 64,261\nCSE: 34,155 - 86,861\nECE: 27,675 - 97,845\nIT: ~69,960\nEEE: ~95,522\nMechanical: ~112,938\nCivil: 135,530 - 191,486\nCut-offs change every year and by category, so check the latest official list."
  },
  {
    "k": [
      "fee",
      "fees",
      "cost",
      "tuition",
      "donation",
      "capitation",
      "payment",
      "course fee",
      "fee structure",
      "total fee",
      "overall fee",
      "how much"
    ],
    "a": {
      "title": "KCE fee details (indicative)",
      "rows": [
        [
          "UG per year",
          "Rs. 50,000-60,000"
        ],
        [
          "UG 4 years",
          "Rs. 2.0-2.8 lakh"
        ],
        [
          "M.E. per year",
          "about Rs. 60,000"
        ],
        [
          "Bus (optional)",
          "Rs. 13,000-15,000/yr"
        ],
        [
          "MBA and Ph.D.",
          "not listed, contact college"
        ]
      ],
      "note": "UG covers B.E. CSE, ECE, EEE, Mechanical, Civil and B.Tech AI&DS, IT. Branch-wise, hostel and quota-wise fees are not in my notes and fees are revised every year. KCE follows a No Donation, No Capitation policy, and scholarships are available. Confirm with the admission office: +91-6380989024 or contact@kingsengg.edu.in."
    }
  },
  {
    "k": [
      "scholarship",
      "waiver",
      "award",
      "cash",
      "incentive",
      "first graduate",
      "fg"
    ],
    "a": "KCE helps students claim government scholarships. Management offers fee waivers for merit, sports and economically poor students; sports waivers are 10-50%.\nAnna University rank cash awards: ranks 1-5 Rs. 1,00,000; 6-10 Rs. 75,000; 11-20 Rs. 50,000; 21-50 Rs. 25,000.\nOther awards: foreign industrial visit for top students, King of Kings (best outgoing student), Proficiency Award and Best Library User Award."
  },
  {
    "k": [
      "ragging",
      "helpline",
      "emergency",
      "posh",
      "women",
      "complaint",
      "icc",
      "safety"
    ],
    "a": "Anti-Ragging: 9443900509, 9842654625, 8903012474 (antiragging@kingsengg.edu.in)\nWomen's Cell / POSH: 9442590002, 8973302491 (womenscell@kingsengg.edu.in)\nInternal Complaints Committee: 9442590002 (icc@kingsengg.edu.in)\nCampus Emergency: 9442590002, 9442590003, 9442590004, 8903012474"
  },
  {
    "k": [
      "social",
      "facebook",
      "instagram",
      "youtube"
    ],
    "a": "Facebook: facebook.com/KingsCollegeofEngineering\nInstagram: instagram.com/kingscollegeofengineering\nYouTube: search Kings College of Engineering on YouTube."
  }
];

const BUSES = [
  [
    1,
    "Tolcopier Square - Vandikara Street - Mary's Corner - Ramanathan - Rohini - Child Jesus Church - Bank Staff Colony - Madhakkottai - College"
  ],
  [
    2,
    "Srinivasapuram - Mela Vedi - North Main Street - Old Bus Stand - Ramanathan Hospital - RR Nagar - New Bus Stand - College"
  ],
  [
    3,
    "Pappanadu - Orathanadu - Thennamanadu - Soorakottai - Keelavasthachavadi - Mellavasthachavadi - College"
  ],
  [
    4,
    "Mannargudi - Edamalaiyur - Vaduvur - Vandayarirruppu - Keelavasthachavady - College"
  ],
  [
    5,
    "Rajappa Nagar - Balaji Nagar - LIC Colony - Sundaram Nagar - Municipal Colony - Eswari Nagar - Medical College - Sundaram Paints - Power House - Sinthamani Quarters - Pillaiyarpatti - Periyar College"
  ],
  [
    6,
    "Naduvakkottai - Thekkur - Sellampattipalam - Vadakkur - Eachankottai - Marunkulam - Suriyampatti - PITS College - Arputhapuram - College"
  ],
  [
    7,
    "Kumbakonam - Govindangudi - Papanasam - Thirukarukavur - Irrubuthalai - Mariamman Kovil - Bypass - College"
  ],
  [
    9,
    "Thirumanur - Vilangudi - Eswari Nagar - Thiruvaiyaru - Kandiyur - Ammenpetai - Bypass - College"
  ],
  [
    10,
    "Pudukkottai - Ichadi - Perungalur - Adhanakkottai - Gandarvakkottai - College"
  ],
  [
    11,
    "Pattukottai - Sanjay Nagar - Karambayam - Papanadu - Vallam Road - Natham - Marunkulam - Ealupatti - College"
  ],
  [
    12,
    "Karambagudi - Suranveduthi - Sevaipatti - Nalroad - Regunathapuram - Naduppatti - Nayakar Patti - Mudhukulam - College"
  ],
  [
    14,
    "Pallia Agragaram - Karanthai - Old Bus Stand - Railady - Kallukulam - Anna Nagar - Bypass - College"
  ],
  [
    15,
    "Aladukku Molai - Enathi - Uranipuram - Thiruvonam - Mattangal - Gandarvakkottai - College"
  ],
  [
    16,
    "Thirukkattupalli - Buthalur - Puthupatti - Sengipatti - Vallam - Thirukanurpatti - Thethuvasalpatti - College"
  ],
  [
    17,
    "Ammapet - Saliyamangalam - Ponndi - Vellar Road - College"
  ],
  [
    18,
    "Sundarperumal Kovil - Umayalpuram - Kabisthalam - Papanasam - Pandaravadai - Koviladi - Ayyampet - Nedar - Bypass - Gurudhayal Sharma - Cholan Nagar - Ramanathan Hospital - Kamala Subramanian School - College"
  ]
];

const DEPTS = [
  {
    "id": "civil",
    "name": "Civil Engineering",
    "est": "2010",
    "hod": "Prof. Dr. R. Saravanan | B.E., M.E., Ph.D. | Professor",
    "fac": [
      {
        "n": "Dr. R. Saravanan",
        "q": "Ph.D",
        "s": "Civil Engineering",
        "d": "Professor (HOD)"
      },
      {
        "n": "Mr. R. Sundharam",
        "q": "M.E.",
        "s": "Structural Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. K. Arun",
        "q": "M.Tech",
        "s": "Structural Engineering",
        "d": "Assistant Professor-II"
      },
      {
        "n": "Mr. S. Kamaraj",
        "q": "M.Tech",
        "s": "Water Resources Engg & Mgmt",
        "d": "Assistant Professor-II"
      },
      {
        "n": "Mr. D. Nandakumar",
        "q": "M.E.,(PhD)",
        "s": "Structural Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. A. Sagaya Albert",
        "q": "M.E.",
        "s": "Structural Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. K. Sri Ram Gopal",
        "q": "M.E.",
        "s": "Structural Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. R. Umamaheswari",
        "q": "M.E.",
        "s": "Environmental Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. K. Kalpana",
        "q": "M.E.,(PhD)",
        "s": "Structural Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. R. Natarajan",
        "q": "M.Tech",
        "s": "Remote Sensing",
        "d": "Assistant Professor"
      }
    ],
    "staff": "Mr. P. Thamaraikannan (Attender), Ms. S. Anitha (Lab Technician)",
    "labs": "Strength of Materials Lab, Fluid Mechanics & Machinery Lab, Soil Mechanics Lab, Surveying Lab, Concrete & Highway Engineering Lab, Environment Engineering Lab, Computer Aided Design Lab",
    "extra": ""
  },
  {
    "id": "cse",
    "name": "Computer Science & Engineering",
    "est": "2001",
    "hod": "Dr. S. M. Uma | M.E., Ph.D. | Associate Professor",
    "fac": [
      {
        "n": "Dr. S. M. Uma",
        "q": "Ph.D",
        "s": "Data Mining",
        "d": "Associate Professor (HOD)"
      },
      {
        "n": "Dr. K. Abhirami",
        "q": "Ph.D",
        "s": "Artificial Intelligence",
        "d": "Associate Professor"
      },
      {
        "n": "Dr. S. Rajarajan",
        "q": "Ph.D",
        "s": "Deep Learning, Cyber Security",
        "d": "Associate Professor"
      },
      {
        "n": "Dr. S. Kannan",
        "q": "Ph.D",
        "s": "Data Mining, Data Science",
        "d": "Professor"
      },
      {
        "n": "Mr. M. Arun",
        "q": "M.E.,(Ph.D)",
        "s": "Affective Computing",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. S. Priyadharshini",
        "q": "M.Tech",
        "s": "Artificial Intelligence",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. N. Dhamayandhi",
        "q": "M.E.,(Ph.D)",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. B. Bavithra",
        "q": "M.E.,(Ph.D)",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. S. Abikayil Aarthi",
        "q": "M.Tech.,(Ph.D)",
        "s": "AI/ML, Deep Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. M. Kavitha",
        "q": "M.Tech.,(Ph.D)",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. R. Abinaya",
        "q": "M.Tech.,(Ph.D)",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. K. Saranya",
        "q": "M.Tech.,(Ph.D)",
        "s": "IoT, Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. K. Srividhya",
        "q": "M.E.",
        "s": "Computer Networks, AI",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. K. Pappathi",
        "q": "M.E.,(Ph.D)",
        "s": "Deep Learning, ML",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. S. Balakrishnan",
        "q": "M.Tech",
        "s": "Hardware & Networking, DBMS",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. A. Shanthi",
        "q": "M.E.",
        "s": "Big Data, Cloud Computing",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. K. Suganthi",
        "q": "M.E.",
        "s": "Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. R. Aruna",
        "q": "M.E.",
        "s": "Wireless Sensor Networks",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. P. Balamurugan",
        "q": "M.E.",
        "s": "Wireless Sensor Networks",
        "d": "Assistant Professor"
      },
      {
        "n": "Mrs. K. Madhumitha",
        "q": "M.E.",
        "s": "Wireless Sensor Networks",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. D. Parkavi",
        "q": "M.E.",
        "s": "Wireless Sensor Networks",
        "d": "Assistant Professor"
      }
    ],
    "staff": "Mr. S. Selvamani (System Admin), Mr. J. Venkatesh (Lab Technician), Mr. J. Mohamed Asadh (Lab Technician), Ms. K. Abirami (Lab Technician), Mrs. C. Pushpalatha (Clerk)",
    "labs": "Advanced Programming Lab, DBMS & RDBMS Lab, Conventional Programming Lab, Unix Lab, Multimedia & Image Processing Lab, Internet Lab, Peripherals & Interfacing Lab, Hardware Maintenance Lab, Software Development Lab, Grid and Cloud Computing Lab, Internet Security Lab",
    "extra": ""
  },
  {
    "id": "ece",
    "name": "Electronics & Communication Engineering",
    "est": "2001",
    "hod": "Mrs. N. Mangaiyarkarasi | B.E., M.E., (Ph.D) | Assistant Professor",
    "fac": [
      {
        "n": "Dr. J. Arputha Vijaya Selvi",
        "q": "Ph.D",
        "s": "Signal Processing, WSN, FSOC",
        "d": "Professor"
      },
      {
        "n": "Ms. N. Mangaiyarkarasi",
        "q": "M.E.,(Ph.D)",
        "s": "Communication Systems",
        "d": "Assistant Professor (HOD)"
      },
      {
        "n": "Mr. K. Sudarsanan",
        "q": "M.E.,(Ph.D)",
        "s": "Optical Communication",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. S. Ramarajan",
        "q": "M.E.,(Ph.D)",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. R. Sathyaraj",
        "q": "M.Tech",
        "s": "Advanced Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. U. Jeyamalar",
        "q": "M.E.",
        "s": "VLSI Design",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. D. Vennila",
        "q": "M.E.",
        "s": "Applied Electronics",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. R. Balakrishnan",
        "q": "M.E.,M.B.A.,(Ph.D)",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. R. Thandayuthapani",
        "q": "M.E.",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. M. Muthulakshmi",
        "q": "M.E.",
        "s": "Computer Communication Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. A. Herald",
        "q": "Ph.D",
        "s": "Optical Communication",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. R. Brindha",
        "q": "M.E.",
        "s": "VLSI Design",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. N. Karthiga",
        "q": "M.E.",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. P. Yamunarani",
        "q": "M.E.",
        "s": "VLSI Design",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. J. Janani",
        "q": "M.Tech",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. P. Malathi",
        "q": "Ph.D",
        "s": "Speech Processing",
        "d": "Professor"
      },
      {
        "n": "Ms. E. Priyadharshini",
        "q": "M.Tech",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. D. Abinaya",
        "q": "M.E.",
        "s": "Applied Electronics",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. B. Reuben",
        "q": "M.E.,M.B.A.,(Ph.D)",
        "s": "Communication Systems",
        "d": "Assistant Professor"
      }
    ],
    "staff": "Mr. J. Niranjan Samuel (Jr. Research Fellow), Mr. A. Parivallal, Mr. P. Suresh, Ms. K. Seethalakshmi, Ms. K. Mahalakshmi (Lab Technicians), Mr. P. Jayapal (Attender)",
    "labs": "Electronic Circuits Lab, Digital Electronics Lab, Microprocessors & Microcontrollers Lab, Linear Integrated Circuits Lab,Communication Lab, Digital Signal Processing Lab, Networks Lab, Optical & Microwave Lab, VLSI Lab, Embedded Lab",
    "extra": ""
  },
  {
    "id": "eee",
    "name": "Electrical & Electronics Engineering",
    "est": "2001",
    "hod": "Mr. R. Sundaramoorthi | B.E., M.E., (Ph.D) | Assistant Professor",
    "fac": [
      {
        "n": "Dr. S. Sivakumar",
        "q": "M.Tech, Ph.D",
        "s": "Power Systems & Project Mgmt",
        "d": "Professor"
      },
      {
        "n": "Dr. A. Albert Martin Ruban",
        "q": "M.E., Ph.D",
        "s": "Renewable Energy, Smart Grid, Wireless Network",
        "d": "Professor"
      },
      {
        "n": "Mr. R. Sundaramoorthi",
        "q": "M.E.,(Ph.D)",
        "s": "Power Electronics, Drives, Hybrid Energy",
        "d": "Assistant Professor (HOD)"
      },
      {
        "n": "Dr. P. Narasimman",
        "q": "M.E., Ph.D",
        "s": "Power Electronics & Drives, Control Systems",
        "d": "Associate Professor"
      },
      {
        "n": "Mr. J. Arokiaraj",
        "q": "M.E.,(Ph.D)",
        "s": "Electrical Machines, Smart Grid",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. S. R. Karthikeyan",
        "q": "M.E.,(Ph.D)",
        "s": "Power Electronics/Drives, FACTS, Power Quality",
        "d": "Assistant Professor"
      },
      {
        "n": "Mrs. P. Thirumagal",
        "q": "M.Tech",
        "s": "Communication System, EM Field",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. G. Suganya",
        "q": "M.Tech, Ph.D",
        "s": "Power System, High Voltage Engg, ML",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. L. Maheswari",
        "q": "M.E., Ph.D",
        "s": "Control System, Power Electronics",
        "d": "Assistant Professor"
      },
      {
        "n": "Mrs. N. Mangaleswari",
        "q": "M.E.,(Ph.D)",
        "s": "Power Electronics & Drives, Control Sys",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. G. Jayachandran",
        "q": "M.E.",
        "s": "Power Electronics & Drives, Electrical Machines",
        "d": "Assistant Professor"
      },
      {
        "n": "Mrs. S. Swathika",
        "q": "M.E.,(Ph.D)",
        "s": "Power Electronics & Drives, Control Sys",
        "d": "Assistant Professor"
      },
      {
        "n": "Mrs. I. Priyadharshini",
        "q": "M.E.",
        "s": "Power Electronics and Drives",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. G. Rathinasamy",
        "q": "M.E.",
        "s": "Power Electronics and Drives",
        "d": "Assistant Professor"
      }
    ],
    "staff": "Mr. R. Alex, Mr. K. Regubalan (Lab Technicians), Mrs. R. Rajasri (Attender)",
    "labs": "Electrical Machines Lab, Power Electronics Lab, Control Systems Lab, Measurements & Instrumentation Lab, Power System Simulation Lab, Electrical Circuits Lab, Electrical Workshop",
    "extra": ""
  },
  {
    "id": "mech",
    "name": "Mechanical Engineering",
    "est": "2006",
    "hod": "Dr. T. Pushparaj | B.E., M.E., Ph.D. | Professor and Head",
    "fac": [
      {
        "n": "Dr. T. Pushparaj",
        "q": "B.E.,M.E.,Ph.D.",
        "s": "Alt. Fuels, Emission Control, Solar Energy, EVs",
        "d": "Professor & Head"
      },
      {
        "n": "Dr. P. P. Shantharaman",
        "q": "B.E.,M.E.,Ph.D.",
        "s": "Thermal, Nano Composites, Optimization",
        "d": "Professor"
      },
      {
        "n": "Dr. R. Shankar",
        "q": "B.E.,M.E.,Ph.D.",
        "s": "Material Characterization, Surface Coating",
        "d": "Associate Professor"
      },
      {
        "n": "Dr. H. Agilan",
        "q": "B.E.,M.E.,Ph.D.",
        "s": "Alt Fuels, Emission Control, Power Plant",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. N. Magesh",
        "q": "B.E.,M.Tech,Ph.D.",
        "s": "Alt Fuels, Solar Energy, Heat Exchangers",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. M. Melwin Jagadeesh Sridhar",
        "q": "B.Tech,M.E.,Ph.D.",
        "s": "Manufacturing Engg, Material Science",
        "d": "Associate Professor"
      },
      {
        "n": "Mr. M. Sakthivel",
        "q": "B.E.,M.E.,(Ph.D)",
        "s": "Metal Joining, Composite Materials",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. S. Nelson Raja",
        "q": "B.E.,M.Tech,(Ph.D)",
        "s": "Composite Materials, Powder Metallurgy",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. V. Aravind",
        "q": "B.E.,M.E.,(Ph.D)",
        "s": "Hybrid Metal Matrix Composites, CAD/CAM",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. M. Vivekananthan",
        "q": "B.E.,M.E.,(Ph.D)",
        "s": "Advanced Manufacturing, Material Characterization",
        "d": "Assistant Professor"
      },
      {
        "n": "Dr. R. Ranjithkumar",
        "q": "B.E.,M.E.,Ph.D",
        "s": "Composite Materials, Advanced Manufacturing",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. M. Saravanan",
        "q": "B.E.,M.E.",
        "s": "Advanced Welding Processes",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. B. Jothiramalingam",
        "q": "B.E.,M.E.",
        "s": "CAD",
        "d": "Assistant Professor"
      }
    ],
    "staff": "Mr. K. Ravichandran (DME, Lab Technician), Mr. S. Selvarasu (I.T.I, Lab Technician), Mrs. P. Elakkiya (B.Lit, Clerk)",
    "labs": "Carpentry/Sheet Metal/Plumbing/Welding Practice, Metrology & Measurements Lab, Fluid Mechanics & Machines Lab, Machine Shop, CAD/CAM Lab, Strength of Materials Lab, Dynamics Lab, Computer Aided Simulation & Analysis",
    "extra": ""
  },
  {
    "id": "aids",
    "name": "Artificial Intelligence & Data Science",
    "est": "2023",
    "hod": "Dr. S. M. Uma | B.E., M.E., Ph.D | Head / Associate Professor",
    "fac": [
      {
        "n": "Dr. S. M. Uma",
        "q": "Ph.D",
        "s": "Data Mining",
        "d": "Head/Associate Professor"
      },
      {
        "n": "Ms. B. Sangeetha",
        "q": "M.Tech,(Ph.D)",
        "s": "Cloud Computing, ML, IoT",
        "d": "Academic Coordinator/Asst. Professor"
      },
      {
        "n": "Ms. M. Vidhya",
        "q": "M.E.",
        "s": "Cloud Computing",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. V. Gayathri",
        "q": "M.Tech",
        "s": "Software Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. T. Sindhu",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Mr. D. Rajkumar",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Mrs. A. Amirthavalli",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. Y. Vahidhabanu",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. R. Shamini",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. J. Akila",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      }
    ],
    "staff": "",
    "labs": "Advanced Programming Lab, DBMS & RDBMS Lab, Conventional Programming Lab, Unix Lab, Multimedia & Image Processing Lab, UI/UX Lab, Peripherals & Interfacing Lab, Hardware Maintenance Lab, Software Development Lab, Cloud Computing Lab, Internet Security Lab. Value Added Courses: AWS Academic Alliance, Oracle Academic Alliance",
    "extra": "Value Added Courses: AWS Academic Alliance, Oracle Academic Alliance."
  },
  {
    "id": "it",
    "name": "Information Technology",
    "est": "2024",
    "hod": "Dr. S. M. Uma | B.E., M.E., Ph.D | Head / Associate Professor",
    "fac": [
      {
        "n": "Dr. S. M. Uma",
        "q": "Ph.D",
        "s": "Data Mining",
        "d": "Head/Associate Professor"
      },
      {
        "n": "Ms. B. Sangeetha",
        "q": "M.Tech,(Ph.D)",
        "s": "Cloud Computing, ML, IoT",
        "d": "Academic Coordinator/Asst. Professor"
      },
      {
        "n": "Ms. M. Vidhya",
        "q": "M.E.",
        "s": "Cloud Computing",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. S. Nirmala",
        "q": "M.Tech",
        "s": "AI, Machine Learning",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. V. Gayathri",
        "q": "M.Tech",
        "s": "Software Engineering",
        "d": "Assistant Professor"
      },
      {
        "n": "Ms. T. Sindhu",
        "q": "M.E.",
        "s": "AI & Machine Learning",
        "d": "Assistant Professor"
      }
    ],
    "staff": "",
    "labs": "",
    "extra": "IT dept has a computer lab with 350+ PCs (per department page)."
  },
  {
    "id": "sh",
    "name": "Science And Humanities Department",
    "est": "",
    "hod": "",
    "fac": [],
    "staff": "",
    "labs": "",
    "extra": "(Handles core Physics, Chemistry, Mathematics, English & Tamil for first-year and foundational courses across all branches - listed under Departments menu on the college website: kingsengg.edu.in/science-and-humanities.html) --------------------------------------------------------------------------------"
  }
];

// ===== SETTINGS =====
const GREETING = "Hello! This is KCE Chatbot.. What can I do for you??";
const NOTE = "\nTransport is optional (about Rs. 13,000-15,000/year, third-party data). Ask the college office for exact timings.";
const FALLBACK = "I don't have that in my KCE notes. Try asking about courses, fees, admission, hostel, library, sports, scholarships, bus routes or contact details, or write to contact@kingsengg.edu.in.";

const SCHOOL_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>';

const STOP_WORDS = new Set([
  "the", "and", "who", "for", "are", "you", "what", "which", "about", "with",
  "from", "that", "this", "have", "has", "how", "many", "all", "list", "tell",
  "give", "show", "name", "names", "dr", "mr", "mrs", "ms", "prof", "faculty",
  "faculties", "staff", "teacher", "teachers", "professor", "professors",
  "lecturer", "department", "dept", "please", "details", "detail", "info",
  "information", "kce", "college", "teaches", "teach", "expert", "specialist",
  "know", "any", "his", "her"
]);

const DEPT_ALIASES = {
  civil: /\bcivil\b/,
  cse: /\bcse\b|computer science/,
  aids: /\bai\s*(&|and)?\s*ds\b|\baids\b|artificial|data science/,
  it: /information technology|\bit\b(?= *(dept|department|faculty|hod|staff|labs?|head))|(dept|department|faculty|hod|staff|labs?|head) (of |in |for )?it\b/,
  ece: /\bece\b|electronics (and|&) communication/,
  eee: /\beee\b|electrical/,
  mech: /\bmech\b|mechanical/,
  sh: /science and humanities|\bs&h\b|humanities/
};

// ===== PAGE ELEMENTS =====
const messages = document.getElementById("messages");
const input = document.getElementById("input");
const sendButton = document.getElementById("send");

// ===== SHOWING MESSAGES =====
function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(text) {
  const bubble = document.createElement("div");
  bubble.className = "message user-message";
  bubble.textContent = text;
  messages.appendChild(bubble);
  scrollToBottom();
}

function buildBotBubble(content) {
  const bubble = document.createElement("div");
  bubble.className = "message bot-message";
  if (typeof content === "string") {
    bubble.textContent = content;
    return bubble;
  }
  const title = document.createElement("p");
  title.className = "card-title";
  title.textContent = content.title;
  bubble.appendChild(title);
  content.rows.forEach(function (row) {
    const line = document.createElement("div");
    line.className = "card-row";
    const label = document.createElement("span");
    label.textContent = row[0];
    const value = document.createElement("span");
    value.textContent = row[1];
    line.appendChild(label);
    line.appendChild(value);
    bubble.appendChild(line);
  });
  const note = document.createElement("p");
  note.className = "card-note";
  note.textContent = content.note;
  bubble.appendChild(note);
  return bubble;
}

function addBotMessage(content) {
  const row = document.createElement("div");
  row.className = "bot-row";
  const avatar = document.createElement("div");
  avatar.className = "bot-avatar";
  avatar.innerHTML = SCHOOL_ICON;
  row.appendChild(avatar);
  row.appendChild(buildBotBubble(content));
  messages.appendChild(row);
  scrollToBottom();
}

function showTyping() {
  const row = document.createElement("div");
  row.className = "bot-row";
  row.innerHTML = '<div class="bot-avatar">' + SCHOOL_ICON + '</div><div class="message bot-message typing"><i></i><i></i><i></i></div>';
  messages.appendChild(row);
  scrollToBottom();
  return row;
}

// ===== BUS ROUTES =====
function busReply(q) {
  const matches = BUSES.filter(function (bus) {
    return bus[1].split(" - ").some(function (stop) {
      const name = stop.toLowerCase();
      return name.length > 3 && name !== "college" && name !== "bypass" && q.includes(name);
    });
  });
  if (matches.length > 0) {
    return matches.map(function (bus) {
      return "Bus No. " + bus[0] + ": " + bus[1];
    }).join("\n\n") + NOTE;
  }
  const numberMatch = q.match(/bus\s*(?:no\.?|number)?\s*(\d+)/);
  if (numberMatch) {
    const bus = BUSES.find(function (b) {
      return b[0] == numberMatch[1];
    });
    if (bus) {
      return "Bus No. " + bus[0] + ": " + bus[1] + NOTE;
    }
  }
  if (/\b(bus|buses|route|routes|transport)\b/.test(q)) {
    return "KCE college bus routes (all " + BUSES.length + " listed):\n\n" +
      BUSES.map(function (bus) {
        return "Bus No. " + bus[0] + ": " + bus[1];
      }).join("\n\n") +
      "\n\nTell me your town or a bus number for a single route." + NOTE;
  }
  return null;
}

// ===== DEPARTMENTS AND FACULTY =====
function formatFaculty(f) {
  return f.n + " - " + f.d + " (" + f.q + (f.s ? "; " + f.s : "") + ")";
}

function deptReply(d, q) {
  const label = d.name + (d.est ? " (est. " + d.est + ")" : "");
  if (d.fac.length === 0) {
    return label + "\n" + d.extra;
  }
  if (/\b(hod|head)\b/.test(q)) {
    return "HOD of " + d.name + ": " + d.hod;
  }
  if (/how many|count|number|total/.test(q)) {
    return d.name + " has " + d.fac.length + " faculty members.";
  }
  if (/\blabs?\b|laborator/.test(q)) {
    return "Laboratories in " + d.name + ":\n" + d.labs + ".";
  }
  if (/faculty|staff|teacher|professor|lecturer|list|members/.test(q)) {
    const list = d.fac.map(function (f, i) {
      return (i + 1) + ". " + formatFaculty(f);
    }).join("\n");
    const staff = d.staff ? "\n\nSupporting staff: " + d.staff : "";
    return d.name + " faculty (" + d.fac.length + "):\n\n" + list + staff;
  }
  let text = label + "\nHOD: " + d.hod + "\nFaculty: " + d.fac.length + " members";
  if (d.labs) {
    text += "\nLabs: " + d.labs + ".";
  }
  if (d.extra) {
    text += "\n" + d.extra;
  }
  return text + '\n\nAsk for "' + d.name + ' faculty" to see the full list.';
}

function peopleReply(q) {
  const dept = DEPTS.find(function (x) {
    return DEPT_ALIASES[x.id].test(q);
  });
  const otherTopic = /fee|cut.?off|rank|seat|intake|admission|scholar|hostel|bus|course|programme|program/.test(q);
  if (dept && (!otherTopic || /\b(hod|head)\b|faculty|staff|teacher|professor|lab/.test(q))) {
    return deptReply(dept, q);
  }
  if (/\b(hod|hods)\b|head of (the )?department/.test(q)) {
    return "Heads of departments:\n" + DEPTS.filter(function (x) {
      return x.hod;
    }).map(function (x) {
      return x.name + ": " + x.hod;
    }).join("\n");
  }
  if (/how many (faculty|teachers|staff)|total (faculty|staff)|faculty count/.test(q)) {
    return "Faculty count:\n" + DEPTS.filter(function (x) {
      return x.fac.length > 0;
    }).map(function (x) {
      return x.name + ": " + x.fac.length;
    }).join("\n");
  }
  const words = q.replace(/[^a-z ]/g, " ").split(/\s+/).filter(function (w) {
    return w.length >= 3 && !STOP_WORDS.has(w);
  });
  let best = [];
  let bestScore = 0;
  DEPTS.forEach(function (x) {
    x.fac.forEach(function (f) {
      const tokens = f.n.toLowerCase().replace(/[^a-z ]/g, " ").split(/\s+/);
      const score = words.filter(function (w) {
        return tokens.includes(w);
      }).length;
      if (score > bestScore) {
        bestScore = score;
        best = [[x, f]];
      } else if (score === bestScore && score > 0) {
        best.push([x, f]);
      }
    });
  });
  if (bestScore > 0) {
    const seen = new Map();
    best.forEach(function (pair) {
      const key = pair[1].n;
      if (seen.has(key)) {
        seen.get(key)[1].push(pair[0].name);
      } else {
        seen.set(key, [pair[1], [pair[0].name]]);
      }
    });
    return Array.from(seen.values()).slice(0, 5).map(function (item) {
      return formatFaculty(item[0]) + " - " + item[1].join(", ");
    }).join("\n\n");
  }
  if (/faculty|teacher|professor|expert|specialist|who teaches|who knows|specializ/.test(q)) {
    const hits = [];
    DEPTS.forEach(function (x) {
      x.fac.forEach(function (f) {
        const text = (f.s + " " + f.q).toLowerCase();
        const score = words.filter(function (w) {
          return text.includes(w);
        }).length;
        if (score > 0) {
          hits.push([score, x, f]);
        }
      });
    });
    hits.sort(function (a, b) {
      return b[0] - a[0];
    });
    if (hits.length > 0) {
      return "Faculty matching your topic:\n\n" + hits.slice(0, 8).map(function (h) {
        return formatFaculty(h[2]) + " - " + h[1].name;
      }).join("\n\n");
    }
  }
  return null;
}

// ===== FINDING THE ANSWER =====
function answer(raw) {
  const q = " " + raw.toLowerCase() + " ";
  if (/^\s*(hi|hello|hey)\b/.test(q.trim())) {
    return "Hello! What would you like to know about KCE?";
  }
  const bus = busReply(q);
  if (bus) {
    return bus;
  }
  const people = peopleReply(q);
  if (people) {
    return people;
  }
  let bestEntry = null;
  let bestScore = 0;
  KB.forEach(function (entry) {
    let score = 0;
    entry.k.forEach(function (keyword) {
      if (q.includes(keyword)) {
        score += keyword.length;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  });
  if (bestEntry) {
    return bestEntry.a;
  }
  return FALLBACK;
}

// ===== SENDING A MESSAGE =====
function sendMessage() {
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  addUserMessage(text);
  input.value = "";
  const typing = showTyping();
  setTimeout(function () {
    typing.remove();
    addBotMessage(answer(text));
  }, 500);
}

sendButton.addEventListener("click", sendMessage);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// ===== START =====
addBotMessage(GREETING);