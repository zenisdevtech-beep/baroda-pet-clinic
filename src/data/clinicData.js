export const clinicInfo = {
  name: "Baroda Pet Clinic",
  gujaratiName: "બરોડા પેટ ક્લિનિક",
  tagline: "Premier Animal Hospital & In-House Pet Pharmacy in Akota, Vadodara",
  rating: 4.6,
  reviewCount: 789,
  category: "Animal Hospital & Veterinary Polyclinic",
  phone: "098252 42506",
  phoneFormatted: "+91 98252 42506",
  whatsappNumber: "919825242506",
  address: {
    line1: "B/GF 5-6, Pratham Plaza, Vadodara Rd",
    landmark: "Opposite Hotel Taj Vivanta, Munjmahuda",
    area: "Akota, Vadodara",
    state: "Gujarat",
    pincode: "390007",
    floor: "Floor 0 (Ground Floor B/GF 5-6) · Pratham Plaza",
    plusCode: "75RF+R7 Vadodara, Gujarat",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.688173426177!2d73.1678!3d22.2937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc605bc000001%3A0x8e8264789df5879!2sBaroda%20Pet%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Baroda+Pet+Clinic+Pratham+Plaza+Akota+Vadodara"
  },
  hours: {
    display: "Open Daily: Morning 10:00 AM – 1:00 PM · Evening 6:00 PM – 9:30 PM",
    morning: { open: "10:00 AM", close: "1:00 PM", openHour: 10, openMin: 0, closeHour: 13, closeMin: 0 },
    evening: { open: "6:00 PM", close: "9:30 PM", openHour: 18, openMin: 0, closeHour: 21, closeMin: 30 },
    sunday: { open: "10:30 AM", close: "1:00 PM", openHour: 10, openMin: 30, closeHour: 13, closeMin: 0, eveningClosed: true },
    note: "Split shifts ensure sterilized clinical preparation and quiet rest periods for hospitalized recovery."
  },
  stats: [
    { label: "Google Rating", value: "4.6 ★", subtext: "From 789+ Pet Parents" },
    { label: "Clinical Experience", value: "15+ Yrs", subtext: "Evidence-Based Veterinary Science" },
    { label: "In-House Pharmacy", value: "100%", subtext: "Diets, Medicines & Accessories" },
    { label: "Treated Patients", value: "24,000+", subtext: "Dogs, Cats & Small Pets" }
  ]
};

export const servicesData = [
  {
    id: "medical-checkup",
    icon: "Stethoscope",
    category: "General Medicine",
    title: "Comprehensive Clinical Checkups & Diagnosis",
    shortDesc: "In-depth physical examinations and precise differential diagnosis for dogs, cats, and small animals.",
    fullDesc: "Every consultation at Baroda Pet Clinic begins with a thorough head-to-tail physical assessment—checking vitals, temperature, mucous membranes, lymph nodes, abdominal palpation, heart, and lung auscultation. Praised across 780+ reviews as the 'best place for pet owners to take for a medical checkup'.",
    highlights: ["Detailed Physical Examination", "Blood & Organ Function Screening", "Evidence-Based Treatment Plans", "Friendly, Stress-Free Handling"],
    duration: "20 - 30 Mins",
    badge: "Most Popular"
  },
  {
    id: "endocrine-complex",
    icon: "Activity",
    category: "Specialized Medicine",
    title: "Endocrine & Hormonal Disorders (Pseudopregnancy)",
    shortDesc: "Specialized resolution for complex reproductive, pituitary, and endocrine conditions in canines and felines.",
    fullDesc: "Renowned for resolving persistent cases where other treatments fail, such as canine false pregnancy (pseudopregnancy) using targeted prolactin suppression protocols (e.g. prednisolone and dopamine receptor agonists), thyroid imbalances, diabetes, and Cushing's management.",
    highlights: ["Pseudopregnancy Resolution", "Hormonal & Pituitary Diagnostics", "Prolactin Suppression Protocols", "Follow-up Ultrasound & Monitoring"],
    duration: "30 - 45 Mins",
    badge: "Doctor Speciality"
  },
  {
    id: "pet-pharmacy",
    icon: "Pill",
    category: "In-House Pharmacy",
    title: "Complete In-House Veterinary Pharmacy",
    shortDesc: "100% genuine pet pharmaceuticals, prescription diets, medicated supplements, and tick-flea therapeutics.",
    fullDesc: "No need to run across city pharmacies. Our on-site dispensary is fully stocked with veterinary-grade prescription antibiotics, pain management, dermatological ointments, cardiac medications, dewormers, and prescription recovery foods from Royal Canin and Farmina.",
    highlights: ["Vet-Grade Medications", "Prescription Diets (Urinary, Gastro, Hypo)", "Flea & Tick Preventatives", "Spot-on Treatments & Shampoos"],
    duration: "Instant Walk-in",
    badge: "Well Stocked"
  },
  {
    id: "surgery-procedures",
    icon: "Scissors",
    category: "Surgical Care",
    title: "Soft Tissue Surgery & Minor Procedures",
    shortDesc: "Sterile surgical suite for spays, neuters, wound repair, tumor removals, and soft-tissue emergencies.",
    fullDesc: "Equipped with modern anesthesia monitoring, aseptic surgical protocols, and compassionate post-operative recovery monitoring. We ensure multimodal pain management before, during, and after surgical interventions.",
    highlights: ["Spaying & Neutering", "Wound Debridement & Suturing", "Tumor & Cyst Excision", "Strict Sterile Protocol"],
    duration: "Scheduled Pre-Op",
    badge: "Sterile Facility"
  },
  {
    id: "vaccination-preventive",
    icon: "ShieldCheck",
    category: "Preventive Care",
    title: "Vaccination & Preventive Wellness",
    shortDesc: "Core vaccination schedules (DHPPi, Anti-Rabies, Fel-O-Vax) and multi-spectrum parasite deworming.",
    fullDesc: "Guarding your puppies, kittens, and adult pets against fatal viral diseases like Parvovirus, Canine Distemper, Leptospirosis, Rabies, and Feline Panleukopenia. Includes digital vaccination tracking and reminder schedules.",
    highlights: ["Puppy & Kitten Schedule", "Annual Booster Immunizations", "Deworming Protocols", "Digital Vaccination Records"],
    duration: "15 - 20 Mins",
    badge: "Essential"
  },
  {
    id: "dermatology-allergies",
    icon: "Sparkles",
    category: "Dermatology",
    title: "Skin, Coat & Allergy Management",
    shortDesc: "Diagnostic relief for chronic scratching, mange, fungal hot-spots, ear infections, and seasonal allergies.",
    fullDesc: "Vadodara's humid climate often triggers severe fungal, bacterial, and allergic dermatitis in breeds like Labradors, Golden Retrievers, and Pugs. We provide skin scrapes, cytological examination, medicated therapeutic washes, and desensitization protocols.",
    highlights: ["Skin Scrape & Cytology", "Fungal & Hot-Spot Therapies", "Ear Canal Otitis Care", "Hypoallergenic Food Trials"],
    duration: "25 - 35 Mins",
    badge: "High Demand"
  },
  {
    id: "cat-feline-care",
    icon: "Heart",
    category: "Feline Care",
    title: "Gentle Feline Medical Care",
    shortDesc: "Calm, low-stress veterinary diagnosis specifically tailored for cautious and sensitive cats.",
    fullDesc: "Cats require gentle, non-threatening examination techniques. Our clinic handles feline hypothermia, urinary blockages (FLUTD), viral upper respiratory infections, kidney management, and gentle physical diagnostics.",
    highlights: ["Low-Stress Handling", "FLUTD & Urinary Relief", "Feline Viral Diagnostics", "Geriatric Kidney Support"],
    duration: "20 - 30 Mins",
    badge: "Feline Friendly"
  },
  {
    id: "pet-accessories-nutrition",
    icon: "ShoppingBag",
    category: "Pet Supplies",
    title: "Pet Nutrition, Food & Accessories",
    shortDesc: "Super-premium nutrition brands, specialized puppy weaning foods, grooming aids, leashes, and bowls.",
    fullDesc: "Browse a curated collection of breed-specific dry and wet kibbles, calcium chews, multivitamin pastes, dental chews, post-operative Elizabeth cones, harness sets, and calming aids right at our Pratham Plaza clinic.",
    highlights: ["Royal Canin, Farmina, Drools", "Breed-Specific Kibble", "Supplements & Calcium", "Travel & Leash Accessories"],
    duration: "Walk-in Store",
    badge: "On-Site"
  }
];

export const reviewsData = [
  {
    id: "rev-1",
    author: "Sanchita Mishra",
    badge: "Local Guide · 8 reviews · 2 photos",
    rating: 5,
    date: "3 months ago",
    content: "I had a very positive experience with the doctor. He has excellent knowledge and accurately explained my pet's condition and treatment options. Behaviour was kind, patient, and compassionate, making both me and my pet feel comfortable. I highly recommend this doctor to anyone looking for a skilled and caring veterinarian.",
    tags: ["humble doctor", "calm doctor", "knowledgeable"],
    petType: "Dog Parent",
    verified: true
  },
  {
    id: "rev-2",
    author: "Kajal Savanur",
    badge: "9 reviews · Verified Pet Parent",
    rating: 5,
    date: "7 months ago",
    content: "We visited this place yesterday evening for my 10 month old golden retriever who has been in pseudopregnancy state since 2 months. We had tried multiple vets and their recommended treatments but there was no resolution. Baroda Pet Clinic accurately diagnosed and cured her. The doctor's deep pharmacological explanation gave us complete confidence.",
    tags: ["experienced doctor", "composed doctor", "pseudopregnancy cure"],
    petType: "Golden Retriever Owner",
    verified: true,
    ownerResponse: "Thank you for giving ur valuable time to give review. Just to clear ur doubts, based on researches, prednisolone supress pituitary gland's release of prolactin which is required for milk synthesis. We are thrilled your retriever is happy and playful again!"
  },
  {
    id: "rev-3",
    author: "Devang Parikh",
    badge: "Local Pet Owner · Akota",
    rating: 5,
    date: "1 month ago",
    content: "Best place for pet owners in Vadodara to take for a medical check up. The doctor is extremely composed and never rushes the diagnosis. Unlike other clinics that push unnecessary tests, he provides the exact medication needed. The in-house pharmacy has all prescription diets right there.",
    tags: ["composed doctor", "humble doctor", "fair pricing"],
    petType: "Labrador Parent",
    verified: true
  },
  {
    id: "rev-4",
    author: "Bhavna Trivedi",
    badge: "Cat Rescuer & Parent · 14 reviews",
    rating: 5,
    date: "4 months ago",
    content: "Doctor is very gentle with felines. Cats are notoriously anxious at vet clinics, but the calm atmosphere here put my Persian cat at ease. Checked vitals very thoroughly and treated her stomach infection promptly. Well stocked supplies of pet food, medicine and accessories.",
    tags: ["calm doctor", "cat care", "well stocked pharmacy"],
    petType: "Persian Cat Parent",
    verified: true
  },
  {
    id: "rev-5",
    author: "Rohan & Sneha Joshi",
    badge: "Vadodara Resident · 6 reviews",
    rating: 5,
    date: "2 months ago",
    content: "Being right opposite Hotel Taj Vivanta on Akota road with ground floor access makes visiting so easy, especially with an ailing dog. Dr. is soft-spoken, answers every anxious question, and knows veterinary medicine thoroughly. Truly a 5-star clinic in Baroda.",
    tags: ["humble doctor", "experienced doctor", "convenient location"],
    petType: "Beagle Parent",
    verified: true
  },
  {
    id: "rev-6",
    author: "Amit Solanki",
    badge: "Local Guide · 12 reviews",
    rating: 5,
    date: "6 months ago",
    content: "Complete medical facility with a wonderful human touch. When my pup had persistent diarrhea, the doctor prescribed the exact electrolyte and probiotic therapy without overloading antibiotics. Honest, ethical, and calm vet practice.",
    tags: ["experienced doctor", "ethical care"],
    petType: "German Shepherd Parent",
    verified: true
  }
];

export const pharmacyProducts = [
  {
    id: "rc-urinary",
    category: "Prescription Diets",
    name: "Royal Canin Veterinary Diet",
    desc: "Targeted medical formulas including Gastrointestinal, Urinary S/O, Renal Support & Hypoallergenic kibble.",
    tags: ["Canine & Feline", "Prescription Only", "In-Stock"],
    icon: "ShieldAlert"
  },
  {
    id: "farmina-vet-life",
    category: "Therapeutic Food",
    name: "Farmina Vet Life Clinical Diets",
    desc: "Clinically validated grain-free clinical diets for hepatic, convalescence, obesity, and gastrointestinal recovery.",
    tags: ["Vet Life", "All Breeds", "High Digestibility"],
    icon: "HeartHandshake"
  },
  {
    id: "parasite-control",
    category: "Medicines & Spot-Ons",
    name: "Tick, Flea & Heartworm Protection",
    desc: "Original Bravecto, Simparica chewables, Fipronil spot-on pipettes, and multi-spectrum oral dewormers.",
    tags: ["Original Certified", "Fast Acting", "Full Spectrum"],
    icon: "Bug"
  },
  {
    id: "supplements-vitamins",
    category: "Vitamins & Joint Care",
    name: "Glucosamine, Omega-3 & Calcium Supplements",
    desc: "Doctor-recommended joint mobility syrups, skin-coat salmon oil, calcium for nursing mothers, and liver tonics.",
    tags: ["Puppy to Senior", "Tasty Syrups", "Chewable Tabs"],
    icon: "Sparkle"
  },
  {
    id: "dermatology-shampoo",
    category: "Medicated Grooming",
    name: "Chlorhexidine & Ketoconazole Shampoos",
    desc: "Clinical medicated antifungal and antibacterial shampoos for soothing active hot-spots and itchy skin allergies.",
    tags: ["Sulfate-Free", "Anti-Fungal", "Soothing Aloe"],
    icon: "Droplets"
  },
  {
    id: "pet-accessories",
    category: "Clinical Accessories",
    name: "Post-Op Cones, Harnesses & Feeding Accessories",
    desc: "Comfortable soft and transparent recovery collars, ergonomic walking harnesses, ceramic feeding bowls, and dental toys.",
    tags: ["All Sizes", "Ground Floor Store", "Durable"],
    icon: "PackageCheck"
  }
];

export const doctorHighlights = [
  {
    title: "Humble & Compassionate Approach",
    desc: "Highlighted by pet owners in over 780 reviews. We believe that medical knowledge is best delivered with empathy, soft-spoken guidance, and deep patience for anxious pets."
  },
  {
    title: "Science & Evidence-Driven Medicine",
    desc: "Every diagnosis is backed by current clinical pharmacology and physiological research—such as targeted endocrine prolactin suppression for pseudopregnancy."
  },
  {
    title: "Stress-Free Examination Rooms",
    desc: "Pets feel vulnerable during illness. Our examination environment minimizes loud noises, cold metal intimidation, and sudden movements."
  },
  {
    title: "Transparent & Ethical Practice",
    desc: "No unnecessary billing or battery of redundant tests. We prioritize what directly aids your pet's recovery, explained clearly in English and Gujarati."
  }
];

export const symptomTriageData = [
  {
    symptom: "Lethargy & Loss of Appetite",
    gujarati: "અશક્તિ અને ખાવાનું બંધ કરવું",
    severity: "Moderate to High",
    urgency: "Visit within 12 - 24 hours",
    description: "Sudden refusal to eat for >24 hours or reluctance to get up often signals infection, tick fever, or gastric inflammation.",
    recommendedService: "Comprehensive Clinical Checkups & Diagnosis"
  },
  {
    symptom: "Vomiting or Watery Diarrhea",
    gujarati: "ઉલટી અથવા ઝાડા થવા",
    severity: "Urgent",
    urgency: "Immediate Clinical Evaluation",
    description: "Risk of rapid dehydration, especially in puppies and kittens. Do not force solid food; keep hydrated with small electrolyte sips.",
    recommendedService: "Comprehensive Clinical Checkups & Diagnosis"
  },
  {
    symptom: "Swollen Teats / Nesting (Pseudopregnancy)",
    gujarati: "ખોટી ગર્ભાવસ્થા (સૂકા દૂધનો ભરાવો)",
    severity: "Specialized Medical",
    urgency: "Consult within 24 - 48 hours",
    description: "Common in unspayed female dogs 6-10 weeks post-heat cycle. Accurately cured through pituitary prolactin regulation at Baroda Pet Clinic.",
    recommendedService: "Endocrine & Hormonal Disorders (Pseudopregnancy)"
  },
  {
    symptom: "Relentless Scratching, Red Skin or Ear Shaking",
    gujarati: "વધારે પડતી ખંજવાળ કે કાન હલાવવા",
    severity: "Mild to Moderate",
    urgency: "Schedule routine checkup",
    description: "Frequent head shaking signals ear mite or yeast otitis. Red belly spots typically denote fungal dermatitis or flea bite allergy.",
    recommendedService: "Skin, Coat & Allergy Management"
  },
  {
    symptom: "Limping or Joint Stiffness",
    gujarati: "લંગડાવું અથવા સાંધામાં દુખાવો",
    severity: "Moderate",
    urgency: "Consult within 24 hours",
    description: "Sudden lameness may indicate soft tissue strain, paw pad foreign body, or joint inflammation in growing or senior dogs.",
    recommendedService: "Comprehensive Clinical Checkups & Diagnosis"
  },
  {
    symptom: "Puppy / Kitten Due for Vaccines",
    gujarati: "રસીકરણ (વેક્સિનેશન) નો સમય",
    severity: "Routine / Preventive",
    urgency: "Schedule this week",
    description: "Core immunization prevents lethal parvo, distemper, rabies, and feline panleukopenia.",
    recommendedService: "Vaccination & Preventive Wellness"
  }
];

export const faqData = [
  {
    q: "Where exactly is Baroda Pet Clinic located?",
    a: "We are conveniently located at B/GF 5-6, Pratham Plaza, Vadodara Road, directly opposite Hotel Taj Vivanta in Munjmahuda, Akota, Vadodara (Pincode: 390007). Our clinic is situated on Floor 0 (Ground Floor), allowing effortless walk-in access for ailing or heavy pets without stairs or lift hassles."
  },
  {
    q: "What are your daily visiting hours?",
    a: "We operate on a split-shift schedule to ensure optimum clinical hygiene and dedicated consultation time: Morning Shift from 10:00 AM to 1:00 PM, and Evening Shift from 6:00 PM to 9:30 PM (Monday through Saturday). On Sundays, we are open for morning consultations from 10:30 AM to 1:00 PM."
  },
  {
    q: "Do I need an appointment or can I walk in directly?",
    a: "Walk-ins are always welcomed during our clinical shift hours. However, to minimize waiting time for your furry companion and avoid clinic rush, we recommend booking a preferred time slot either via our online booking form or by calling 098252 42506."
  },
  {
    q: "Are veterinary prescription medicines and diets available on-site?",
    a: "Yes! Baroda Pet Clinic houses a fully stocked in-house pet pharmacy. We carry prescription foods (Royal Canin, Farmina Vet Life), antibiotics, pain medications, anti-tick spot-ons, heartworm chewables, skin lotions, and nutritional supplements. You never have to search multiple human chemist shops for pet medicines."
  },
  {
    q: "How does the clinic treat canine pseudopregnancy (false pregnancy)?",
    a: "Pseudopregnancy is caused by prolonged progesterone drop and high prolactin secretion following a heat cycle. Unlike temporary home remedies, our doctor applies evidence-based pharmacological treatments (such as prolactin suppression protocols) that safely dry up lactation and normalize hormonal balance quickly without unnecessary distress."
  },
  {
    q: "Is parking available at Pratham Plaza?",
    a: "Yes, Pratham Plaza has ground-level vehicular parking space for cars and two-wheelers, making it convenient to transport pets safely from your vehicle straight to our ground floor clinic."
  },
  {
    q: "Do you treat both dogs and cats?",
    a: "Absolutely! We treat canines, felines, and small companion animals. Our team takes special care with anxious felines to provide quiet, gentle physical evaluations."
  }
];
