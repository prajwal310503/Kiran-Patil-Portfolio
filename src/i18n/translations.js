const translations = {
  en: {
    // Header / Nav
    nav_home: "Home",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_events: "Events",
    nav_join: "Join Us",

    // Hero
    hero_tagline: "A Voice for the People.\nA Vision for Progress.",
    hero_cta: "Know His Journey",
    hero_about_heading: "About the Leader",
    hero_about_p1:
      "Within the Panvel Municipal Corporation, Shri Kiran Prakash Patil takes up the significant issues of his constituency with careful study and a firm voice. Bringing together people from every caste, religion, and social group has always been a priority, with unity placed at the center of his approach.",
    hero_about_p2:
      "Traditionally, the role of a Corporator was limited to basics like water lines, drainage systems, and roads. His work does not stay confined to a narrow list or a fixed boundary. With a broader vision for the constituency, efforts are consistently directed toward areas such as sports, education, cultural development, and health camps. The aim is to keep the region progressive and evolving.",
    hero_about_p3:
      "Support is extended to anyone in need. Shri Kiran Patil understands that both the wealthy and the poor face challenges, and each problem is treated with equal seriousness. It is never assumed that only the underprivileged require assistance; even those who appear well-off often struggle in their own way, and guiding them out of those situations becomes part of his responsibility.",
    hero_explore_bio: "Explore Full Bio",

    // Events (Home section)
    events_heading: "Events",
    events_view_more: "View More",
    events_read_more: "Read More",
    events_loading: "Loading events...",
    events_none: "No events found.",
    events_error: "Failed to load events. Please try again later.",
    events_previous: "Previous",
    events_next: "Next",

    // Gallery
    gallery_heading: "Gallery",
    gallery_loading: "Loading...",
    gallery_back: "Back to Gallery",
    gallery_categories: "Categories",
    gallery_view: "View Gallery",

    // Footer
    footer_quick_links: "Quick Links",
    footer_explore_bio: "Explore Bio",
    footer_address: "Address",
    footer_meet_kiran: "Meet Shri Kiran Prakash Patil",
    footer_meet_netra: "Smt. Netra Kiran Patil",
    footer_copyright: "© 2025 kiranpatil. All rights reserved. | Developed by Codifyne",

    // About Kiran
    kiran_title: "My Journey, My Commitment",
    kiran_s1_h: "Roots in the Soil",
    kiran_s1_p1: "I was born into a humble farming family in the Jalgaon district of Maharashtra. Growing up, I witnessed firsthand the resilience and the challenges of those who work the land. These early years instilled in me a profound respect for hard work and the importance of community—values that continue to guide my every action today.",
    kiran_s1_p2: "While my roots are in Jalgaon, my journey took me to Nashik for my secondary education, expanding my horizons and preparing me for a life of service.",
    kiran_s2_h: "Education as a Tool for Service",
    kiran_s2_intro: "I have always believed that education is not merely a collection of degrees, but a set of tools to serve others more effectively. My academic background reflects my multidisciplinary approach to leadership:",
    kiran_s2_b1_l: "Social Sciences:", kiran_s2_b1_t: "I began with a Bachelor's degree to understand the intricacies of how societies function and how to plant the seeds of meaningful change.",
    kiran_s2_b2_l: "Healthcare Insight:", kiran_s2_b2_t: "Earning a Diploma in Medical Laboratory Technology (DMLT) allowed me to see the vital importance of healthcare and community well-being from a technical perspective.",
    kiran_s2_b3_l: "Communication & Leadership:", kiran_s2_b3_t: "To better connect with the people, I completed a Post Graduate Diploma in Public Relation Management, honing the empathy and communication skills required to lead with transparency.",
    kiran_s3_h: "Two Decades of Public Service",
    kiran_s3_p1: "I arrived in Mumbai in 2002, and by 2004, I took my first formal steps into the political arena. My mission has remained unchanged: to be a bridge between the people and the solutions they need.",
    kiran_s4_h: "Standing with the People",
    kiran_s4_b1_l: "Medical Guidance:", kiran_s4_b1_t: "Health crises can be overwhelming. I make it my priority to guide citizens through complex medical treatments and procedures, ensuring they never feel alone in their time of need.",
    kiran_s4_b2_l: "Administrative Synergy:", kiran_s4_b2_t: "I maintain strong, professional working relationships with the Police, CIDCO, Municipal Corporations, and the Tahsildar Office. These connections are not for personal gain, but to ensure that your concerns are addressed with speed and justice.",
    kiran_s4_b3_l: "Empowering our 'Swachhata Doots':", kiran_s4_b3_t: "Our sanitation workers and garbage collectors are the backbone of a clean city. I am committed to their safety, providing consistent support through protective care and essential TT injections.",
    kiran_s5_h: "My Core Philosophy: Humanity First",
    kiran_s5_p1: "At my core, I am a selfless servant of the people. I do not see caste, religion, or social status. Whether rich or poor, every individual who walks through my door is treated with the same dignity and respect.",
    kiran_s5_b1_l: "A Voice for the Unheard:", kiran_s5_b1_t: "I stand firmly for justice, especially for those who feel their voices have been silenced.",
    kiran_s5_b2_l: "Building a Future:", kiran_s5_b2_t: "I am a tireless advocate for our youth. I constantly motivate the next generation to be active citizens—to vote, to stay aware of social issues, and to give back to humanity through blood and organ donation.",
    kiran_quote: "\"Leadership is not a position; it is the responsibility to leave no one behind.\"",

    // About Netra
    netra_title: "Meet Smt. Netra Kiran Patil",
    netra_s1_p1: "My journey began in the historic city of Kolhapur, where I developed a deep sense of community and service. Pursuing my higher education in Mumbai, I earned a Bachelor's degree in Commerce from Mumbai University and further strengthened my skills with a Diploma in Office Administration—shaping my people-centric and organized approach to leadership.",
    netra_s1_p2: "My political journey began in 2016 with the BJP, and since then, I have been actively involved in social initiatives, working alongside Shri Kiran Prakash Patil to address community needs and drive positive change.",
    netra_s2_h: "My Roles & Responsibilities",
    netra_s2_b1_l: "Legislative Advocacy:", netra_s2_b1_t: "As a dedicated Corporator of the Panvel Municipal Corporation, I consistently raise important questions on key social issues, ensuring the voice of every citizen is heard in the halls of governance.",
    netra_s2_b2_l: "Public Awareness:", netra_s2_b2_t: "I work tirelessly to create public awareness on critical matters affecting our community, empowering citizens with the information they need to make informed decisions.",
    netra_s2_b3_l: "Community Welfare:", netra_s2_b3_t: "I am committed to addressing the needs of every section of society, with special focus on the underprivileged and marginalized, ensuring no one is left behind.",
    netra_s3_h: "Beyond Politics: Building a Better Society",
    netra_s3_b1_l: "Youth & Sports:", netra_s3_b1_t: "As the Secretary of the Kharghar Sports Academy, I actively promote youth engagement and sports development, nurturing the talents and energy of the next generation.",
    netra_s3_b2_l: "Social Empowerment:", netra_s3_b2_t: "As the Vice President of the Yuvaprerna Samajik Sanstha, I drive social empowerment and grassroots initiatives that create lasting, meaningful change in people's lives.",
    netra_s3_b3_l: "Cultural & Health Initiatives:", netra_s3_b3_t: "I organise and support cultural activities, health camps, and educational programmes that enrich and uplift people across all walks of life.",
    netra_s4_p: "My leadership extends far beyond conventional roles, reaching across sports, education, cultural activities, health initiatives, and every corner of community welfare. I am committed to building a better, more inclusive society—one step at a time.",

    // Mission (shared)
    mission_heading: "Mission",
    mission_sub:
      "A nation where every voice matters, every child learns, and every citizen lives with dignity and opportunity.",
    mission_education: "Quality Education for All",
    mission_sustainable: "Sustainable Development",
    mission_digital: "Digital India, Rural First",

    // Journey (shared label)
    journey_heading: "Journey",
    journey_year_label: "Year",

    // Kiran Journey entries
    kj_2001_title: "Launched \"Shiksha Jyoti\"",
    kj_2001_desc:
      "Initiated a rural education campaign enrolling 10,000+ children into government schools. Focused on girl-child education and dropout recovery.",
    kj_2002_title: "Digital Learning Pilot",
    kj_2002_desc:
      "Introduced basic digital literacy modules in 50 rural schools to enhance learning experiences.",
    kj_2003_title: "Scholarship Drive",
    kj_2003_desc:
      "Launched a nationwide scholarship program benefiting 5,000+ meritorious underprivileged students.",
    kj_2004_title: "Teacher Training Program",
    kj_2004_desc:
      "Trained over 2,000 rural school teachers in modern pedagogical practices and student engagement.",
    kj_2005_title: "Mobile Education Vans",
    kj_2005_desc:
      "Deployed education vans equipped with digital tools to reach remote tribal villages.",

    // Netra Journey entries
    nj_2010_title: "Youth Education Campaign",
    nj_2010_desc:
      "Started a grassroots initiative to promote education for underprivileged children in Satara.",
    nj_2012_title: "Women's Empowerment Drive",
    nj_2012_desc:
      "Launched self-help groups and awareness programs for women in rural Maharashtra.",
    nj_2015_title: "Leadership Development Workshops",
    nj_2015_desc:
      "Organized training camps to nurture youth leaders for social activism.",
    nj_2018_title: "Digital Literacy Mission",
    nj_2018_desc:
      "Introduced digital literacy vans for remote villages, especially focused on girls.",
    nj_2022_title: "Social Justice Campaign",
    nj_2022_desc:
      "Led community efforts against inequality and promoted inclusive policies.",

    // Impact
    impact_heading: "Impact",
    impact_health: "Health",
    impact_education: "Education",
    impact_schemes: "Schemes",
    impact_environment: "Environment",
    impact_health_items: [
      "Urban Health Centre",
      "Blood Donation Camp",
      "Covid Work",
      "Diabetes Awareness",
      "Vyasanmukti Campaign",
      "Cancer Awareness",
    ],
    impact_education_item: "RTE (Right to Education)",
    impact_schemes_items: ["AADHAR Card", "Ayushman Bharat Card"],
    impact_environment_items: [
      "Pollution (Taloja)",
      "AC Buses",
      "Water Protest (CIDCO)",
    ],

    // People's Voice
    peoples_voice: "People's Voice",
    pv_1: "Thanks to Kiran Prakash Patil's persistence, our main roads are finally smooth and pothole-free. My daily commute is shorter and much safer now—his work speaks for itself!",
    pv_1_by: "— Rajesh M., Local Resident",
    pv_2: "The new street lights and traffic signals near the school have made a world of difference for our children's safety. We feel much more secure walking home in the evenings thanks to Patil Saheb's initiative.",
    pv_2_by: "— Sunita Deshmukh, Home Maker",
    pv_3: "We used to struggle with inconsistent water pressure for years, but Kiran Patil made sure our pipelines were upgraded. It's a relief to have a leader who actually listens to the basic needs of the elderly.",
    pv_3_by: "— Vinayak Rao, Retired Teacher",
    pv_4: "I never thought we'd have a professional-grade sports ground in our area, but Shri Patil made it happen. He is truly empowering the youth by giving us the right facilities to chase our dreams.",
    pv_4_by: "— Sameer Khan, Local Footballer",
    pv_5: "During my father's medical emergency, the free health camp organized by Kiran Prakash Patil was a lifesaver. His dedication to providing healthcare for the poor is a blessing to our community.",
    pv_5_by: "— Anjali Gupta, Resident",
    pv_6: "I was worried about my son's future because of our financial situation, but Patil Saheb helped us secure a school admission. He doesn't just give speeches; he ensures every child gets a chance to study.",
    pv_6_by: "— Ramesh Jadhav, Daily Wage Earner",
    pv_7: "The blood donation drives organized by Kiran Patil are always so well-managed and impactful. It's inspiring to see a leader who consistently puts human life and service above everything else.",
    pv_7_by: "— Dr. Amit Shah, Volunteer",
    pv_8: "By fixing the traffic congestion and drainage issues in our market area, Kiran Prakash Patil has helped local businesses thrive. He is a man of action who understands the pulse of our city.",
    pv_8_by: "— Vikram Singh, Shop Owner",

    // Query / Contact
    nav_query: "Query",
    query_title: "Get in Touch",
    query_subtitle: "Have a question, concern, or need assistance? Reach out and we'll respond as soon as possible.",
    query_form_title: "Send Us a Message",
    query_name: "Full Name",
    query_name_ph: "Enter your full name",
    query_email: "Email Address",
    query_email_ph: "Enter your email",
    query_phone: "Phone Number",
    query_phone_ph: "Enter your phone number",
    query_subject: "Subject",
    query_subject_ph: "What is this regarding?",
    query_message: "Message",
    query_message_ph: "Write your message here...",
    query_send: "Send Message",
    query_sent: "Message Sent! We will get back to you soon.",
    query_contact_title: "Contact Information",
    query_address_label: "Office Address",
    query_phone_label: "Phone",
    query_email_label: "Email",
    query_follow: "Follow Us",

    // EventDetails
    event_back: "← Back to Events",
    event_images: "Event Images",
    event_no_images: "No images available.",
    event_prev_img: "← Prev",
    event_next_img: "Next →",
  },

  hi: {
    // Header / Nav
    nav_home: "होम",
    nav_about: "के बारे में",
    nav_gallery: "गैलरी",
    nav_events: "कार्यक्रम",
    nav_join: "हमसे जुड़ें",

    // Hero
    hero_tagline: "जनता की आवाज़।\nप्रगति के लिए एक दृष्टिकोण।",
    hero_cta: "उनकी यात्रा जानें",
    hero_about_heading: "नेता के बारे में",
    hero_about_p1:
      "पनवेल नगर निगम में, श्री किरण प्रकाश पाटिल अपने क्षेत्र के महत्वपूर्ण मुद्दों को सावधानीपूर्वक अध्ययन और दृढ़ आवाज़ के साथ उठाते हैं। हर जाति, धर्म और सामाजिक वर्ग के लोगों को एकजुट करना उनकी हमेशा प्राथमिकता रही है, जिसमें एकता उनके दृष्टिकोण के केंद्र में है।",
    hero_about_p2:
      "परंपरागत रूप से, एक नगर पार्षद की भूमिका पानी की लाइनों, नाली प्रणालियों और सड़कों जैसी बुनियादी जरूरतों तक सीमित होती थी। उनका काम किसी सीमित सूची या निश्चित सीमा तक सिमटा नहीं है। क्षेत्र के लिए व्यापक दृष्टिकोण के साथ, खेल, शिक्षा, सांस्कृतिक विकास और स्वास्थ्य शिविरों जैसे क्षेत्रों पर निरंतर ध्यान दिया जाता है। लक्ष्य है कि क्षेत्र प्रगतिशील और विकासशील बना रहे।",
    hero_about_p3:
      "जरूरतमंद हर व्यक्ति को सहायता प्रदान की जाती है। श्री किरण पाटिल समझते हैं कि अमीर और गरीब दोनों को चुनौतियों का सामना करना पड़ता है, और हर समस्या को समान गंभीरता से लिया जाता है। यह कभी नहीं माना जाता कि केवल वंचितों को ही सहायता चाहिए; जो लोग सम्पन्न दिखते हैं, वे भी अपने तरीके से संघर्ष करते हैं, और उन्हें उन परिस्थितियों से बाहर निकालना उनकी जिम्मेदारी का हिस्सा बन जाता है।",
    hero_explore_bio: "पूरी जीवनी देखें",

    // Events
    events_heading: "कार्यक्रम",
    events_view_more: "और देखें",
    events_read_more: "अधिक पढ़ें",
    events_loading: "लोड हो रहा है...",
    events_none: "कोई कार्यक्रम नहीं मिला।",
    events_error: "कार्यक्रम लोड करने में विफल। कृपया बाद में पुनः प्रयास करें।",
    events_previous: "पिछला",
    events_next: "अगला",

    // Gallery
    gallery_heading: "गैलरी",
    gallery_loading: "लोड हो रहा है...",
    gallery_back: "गैलरी पर वापस जाएं",
    gallery_categories: "श्रेणियाँ",
    gallery_view: "गैलरी देखें",

    // Footer
    footer_quick_links: "त्वरित लिंक्स",
    footer_explore_bio: "जीवनी देखें",
    footer_address: "पता",
    footer_meet_kiran: "श्री किरण प्रकाश पाटिल से मिलें",
    footer_meet_netra: "सौ. नेत्रा किरण पाटिल",
    footer_copyright: "© 2025 किरण पाटिल। सर्वाधिकार सुरक्षित। | Codifyne द्वारा विकसित",

    // About Kiran
    kiran_title: "मेरी यात्रा, मेरी प्रतिबद्धता",
    kiran_s1_h: "मिट्टी से जड़ुाव",
    kiran_s1_p1: "मेरा जन्म महाराष्ट्र के जलगांव जिले के एक साधारण किसान परिवार में हुआ था। बड़े होते हुए मैंने उन लोगों के संघर्ष और जीवंतता को करीब से देखा जो जमीन से जुड़े हैं। इन शुरुआती वर्षों ने मुझमें कड़ी मेहनत और सामुदायिक भावना के प्रति गहरा सम्मान पैदा किया—ये वही मूल्य हैं जो आज भी मेरे हर कार्य का मार्गदर्शन करते हैं।",
    kiran_s1_p2: "हालांकि मेरी जड़ें जलगांव में हैं, लेकिन मेरी माध्यमिक शिक्षा नासिक में हुई, जिसने मेरे क्षितिज का विस्तार किया और मुझे सेवा के जीवन के लिए तैयार किया।",
    kiran_s2_h: "सेवा के माध्यम के रूप में शिक्षा",
    kiran_s2_intro: "मेरा हमेशा से मानना रहा है कि शिक्षा केवल डिग्रियों का संग्रह नहीं है, बल्कि दूसरों की बेहतर सेवा करने का एक साधन है। मेरी शैक्षणिक पृष्ठभूमि नेतृत्व के प्रति मेरे बहुमुखी दृष्टिकोण को दर्शाती है:",
    kiran_s2_b1_l: "सामाजिक विज्ञान:", kiran_s2_b1_t: "मैंने स्नातक की डिग्री के साथ शुरुआत की ताकि यह समझ सकूं कि समाज कैसे कार्य करता है और सार्थक परिवर्तन के बीज कैसे बोए जाते हैं।",
    kiran_s2_b2_l: "स्वास्थ्य देखभाल अंतर्दृष्टि:", kiran_s2_b2_t: "मेडिकल लेबोरेटरी टेक्नोलॉजी (DMLT) में डिप्लोमा प्राप्त करने से मुझे तकनीकी दृष्टिकोण से स्वास्थ्य और सामुदायिक कल्याण के महत्व को समझने में मदद मिली।",
    kiran_s2_b3_l: "संचार और नेतृत्व:", kiran_s2_b3_t: "लोगों से बेहतर जुड़ने के लिए, मैंने जनसंपर्क प्रबंधन में पोस्ट ग्रेजुएट डिप्लोमा पूरा किया, ताकि पारदर्शिता के साथ नेतृत्व करने के लिए आवश्यक सहानुभूति और संचार कौशल विकसित कर सकूं।",
    kiran_s3_h: "सार्वजनिक सेवा के दो दशक",
    kiran_s3_p1: "मैं 2002 में मुंबई आया और 2004 में मैंने राजनीतिक क्षेत्र में अपना पहला औपचारिक कदम रखा। मेरा मिशन तब से अपरिवर्तित है: जनता और उनकी समस्याओं के समाधान के बीच एक सेतु बनना।",
    kiran_s4_h: "जनता के साथ खड़ा होना",
    kiran_s4_b1_l: "चिकित्सा मार्गदर्शन:", kiran_s4_b1_t: "स्वास्थ्य संकट भारी पड़ सकते हैं। मैं नागरिकों को जटिल चिकित्सा उपचारों और प्रक्रियाओं के माध्यम से मार्गदर्शन देना अपनी प्राथमिकता बनाता हूं।",
    kiran_s4_b2_l: "प्रशासनिक समन्वय:", kiran_s4_b2_t: "मैं पुलिस, सिडको (CIDCO), नगर निगम और तहसीलदार कार्यालय के साथ मजबूत और पेशेवर संबंध बनाए रखता हूँ। ये संबंध व्यक्तिगत लाभ के लिए नहीं, बल्कि यह सुनिश्चित करने के लिए हैं कि आपकी चिंताओं का समाधान शीघ्रता और न्याय के साथ किया जाए।",
    kiran_s4_b3_l: "स्वच्छता दूतों का सशक्तिकरण:", kiran_s4_b3_t: "हमारे स्वच्छता कर्मचारी और कचरा संग्रहकर्ता शहर की सफाई की रीढ़ हैं। मैं उनकी सुरक्षा के लिए प्रतिबद्ध हूं, उन्हें सुरक्षात्मक देखभाल और आवश्यक टीटी (TT) इंजेक्शन के माध्यम से निरंतर सहायता प्रदान करता हूं।",
    kiran_s5_h: "मेरा मूल दर्शन: मानवता सर्वोपरि",
    kiran_s5_p1: "मैं लोगों का एक निस्वार्थ सेवक हूं। मैं जाति, धर्म या सामाजिक स्थिति नहीं देखता। चाहे अमीर हो या गरीब, मेरे दरवाजे पर आने वाले हर व्यक्ति के साथ समान गरिमा और सम्मान के साथ व्यवहार किया जाता है।",
    kiran_s5_b1_l: "अनसुनी आवाजों का स्वर:", kiran_s5_b1_t: "मैं न्याय के लिए दृढ़ता से खड़ा रहता हूं, विशेष रूप से उन लोगों के लिए जो महसूस करते हैं कि उनकी आवाज दबा दी गई है।",
    kiran_s5_b2_l: "भविष्य का निर्माण:", kiran_s5_b2_t: "मैं अपने युवाओं का अथक समर्थक हूं। मैं अगली पीढ़ी को सक्रिय नागरिक बनने—मतदान करने, सामाजिक मुद्दों के प्रति जागरूक रहने और रक्तदान एवं अंगदान के माध्यम से मानवता की सेवा करने के लिए निरंतर प्रेरित करता हूं।",
    kiran_quote: "\"नेतृत्व कोई पद नहीं है; यह एक जिम्मेदारी है कि कोई भी पीछे न छूटे।\"",

    // About Netra
    netra_title: "सौ. नेत्रा किरण पाटिल से मिलें",
    netra_s1_p1: "मेरी यात्रा ऐतिहासिक शहर कोल्हापुर से शुरू हुई, जहाँ मैंने समुदाय और सेवा की गहरी भावना विकसित की। मुंबई में उच्च शिक्षा प्राप्त करते हुए, मैंने मुंबई विश्वविद्यालय से वाणिज्य में स्नातक की डिग्री प्राप्त की और कार्यालय प्रशासन में डिप्लोमा के साथ अपने कौशल को और मजबूत किया—जिसने मेरे जन-केंद्रित और सुव्यवस्थित नेतृत्व दृष्टिकोण को आकार दिया।",
    netra_s1_p2: "मेरी राजनीतिक यात्रा 2016 में भाजपा के साथ शुरू हुई, और तब से मैं सामाजिक पहलों में सक्रिय रूप से शामिल हूँ, सामुदायिक जरूरतों को पूरा करने और सकारात्मक बदलाव लाने के लिए श्री किरण प्रकाश पाटिल के साथ मिलकर काम कर रही हूँ।",
    netra_s2_h: "मेरी भूमिकाएँ और जिम्मेदारियाँ",
    netra_s2_b1_l: "विधायी वकालत:", netra_s2_b1_t: "पनवेल नगर निगम की एक समर्पित पार्षद के रूप में, मैं प्रमुख सामाजिक मुद्दों पर लगातार महत्वपूर्ण प्रश्न उठाती हूँ, यह सुनिश्चित करते हुए कि शासन के गलियारों में हर नागरिक की आवाज सुनी जाए।",
    netra_s2_b2_l: "जन जागरूकता:", netra_s2_b2_t: "मैं हमारे समुदाय को प्रभावित करने वाले महत्वपूर्ण मामलों पर सार्वजनिक जागरूकता बनाने के लिए अथक परिश्रम करती हूँ, नागरिकों को सूचित निर्णय लेने के लिए आवश्यक जानकारी से सशक्त बनाती हूँ।",
    netra_s2_b3_l: "सामुदायिक कल्याण:", netra_s2_b3_t: "मैं समाज के हर वर्ग की जरूरतों को पूरा करने के लिए प्रतिबद्ध हूँ, विशेष रूप से वंचितों और हाशिए पर रहने वाले लोगों पर विशेष ध्यान देती हूँ, यह सुनिश्चित करते हुए कि कोई भी पीछे न रहे।",
    netra_s3_h: "राजनीति से परे: एक बेहतर समाज का निर्माण",
    netra_s3_b1_l: "युवा और खेल:", netra_s3_b1_t: "खारघर स्पोर्ट्स अकादमी की सचिव के रूप में, मैं अगली पीढ़ी की प्रतिभाओं और ऊर्जा को पोषित करते हुए, हमारे क्षेत्र में युवा भागीदारी और खेल विकास को सक्रिय रूप से बढ़ावा देती हूँ।",
    netra_s3_b2_l: "सामाजिक सशक्तिकरण:", netra_s3_b2_t: "युवाप्रेरणा सामाजिक संस्था की उपाध्यक्ष के रूप में, मैं सामाजिक सशक्तिकरण और जमीनी स्तर की पहल चलाती हूँ जो लोगों के जीवन में स्थायी और सार्थक बदलाव लाती हैं।",
    netra_s3_b3_l: "सांस्कृतिक और स्वास्थ्य पहल:", netra_s3_b3_t: "मैं सांस्कृतिक गतिविधियों, स्वास्थ्य शिविरों और शैक्षणिक कार्यक्रमों का आयोजन और समर्थन करती हूँ जो जीवन के हर क्षेत्र के लोगों को समृद्ध और उत्थान प्रदान करते हैं।",
    netra_s4_p: "मेरा नेतृत्व पारंपरिक भूमिकाओं से कहीं आगे है, खेल, शिक्षा, सांस्कृतिक गतिविधियों, स्वास्थ्य पहलों और सामुदायिक कल्याण के हर कोने तक पहुँचता है। मैं एक बेहतर, अधिक समावेशी समाज बनाने के लिए प्रतिबद्ध हूँ—एक कदम एक बार।",

    // Mission
    mission_heading: "मिशन",
    mission_sub:
      "एक ऐसा राष्ट्र जहाँ हर आवाज़ मायने रखती है, हर बच्चा सीखता है, और हर नागरिक गरिमा और अवसर के साथ जीता है।",
    mission_education: "सभी के लिए गुणवत्तापूर्ण शिक्षा",
    mission_sustainable: "सतत विकास",
    mission_digital: "डिजिटल भारत, ग्रामीण पहले",

    // Journey
    journey_heading: "यात्रा",
    journey_year_label: "वर्ष",

    // Kiran Journey
    kj_2001_title: '"शिक्षा ज्योति" का शुभारंभ',
    kj_2001_desc:
      "10,000+ बच्चों को सरकारी स्कूलों में नामांकित कराने का ग्रामीण शिक्षा अभियान शुरू किया। बालिका शिक्षा और ड्रॉपआउट रिकवरी पर ध्यान केंद्रित किया।",
    kj_2002_title: "डिजिटल लर्निंग पायलट",
    kj_2002_desc:
      "50 ग्रामीण स्कूलों में बुनियादी डिजिटल साक्षरता मॉड्यूल पेश किए गए।",
    kj_2003_title: "छात्रवृत्ति अभियान",
    kj_2003_desc:
      "5,000+ मेधावी वंचित छात्रों को लाभ पहुँचाने वाला राष्ट्रव्यापी छात्रवृत्ति कार्यक्रम शुरू किया।",
    kj_2004_title: "शिक्षक प्रशिक्षण कार्यक्रम",
    kj_2004_desc:
      "2,000+ ग्रामीण स्कूली शिक्षकों को आधुनिक शैक्षणिक तरीकों में प्रशिक्षित किया।",
    kj_2005_title: "मोबाइल शिक्षा वैन",
    kj_2005_desc:
      "दूरदराज के आदिवासी गांवों तक पहुँचने के लिए डिजिटल उपकरणों से सुसज्जित शिक्षा वैन तैनात की गईं।",

    // Netra Journey
    nj_2010_title: "युवा शिक्षा अभियान",
    nj_2010_desc:
      "सातारा में वंचित बच्चों के लिए शिक्षा को बढ़ावा देने की जमीनी पहल शुरू की।",
    nj_2012_title: "महिला सशक्तिकरण अभियान",
    nj_2012_desc:
      "ग्रामीण महाराष्ट्र में महिलाओं के लिए स्वयं सहायता समूह और जागरूकता कार्यक्रम शुरू किए।",
    nj_2015_title: "नेतृत्व विकास कार्यशालाएँ",
    nj_2015_desc:
      "सामाजिक सक्रियता के लिए युवा नेताओं को तैयार करने हेतु प्रशिक्षण शिविर आयोजित किए।",
    nj_2018_title: "डिजिटल साक्षरता मिशन",
    nj_2018_desc:
      "दूरदराज के गांवों के लिए डिजिटल साक्षरता वैन पेश की गईं, विशेष रूप से लड़कियों पर ध्यान केंद्रित किया।",
    nj_2022_title: "सामाजिक न्याय अभियान",
    nj_2022_desc:
      "असमानता के खिलाफ सामुदायिक प्रयासों का नेतृत्व किया और समावेशी नीतियों को बढ़ावा दिया।",

    // Impact
    impact_heading: "प्रभाव",
    impact_health: "स्वास्थ्य",
    impact_education: "शिक्षा",
    impact_schemes: "योजनाएं",
    impact_environment: "पर्यावरण",
    impact_health_items: [
      "शहरी स्वास्थ्य केंद्र",
      "रक्तदान शिविर",
      "कोविड कार्य",
      "मधुमेह जागरूकता",
      "व्यसनमुक्ति अभियान",
      "कैंसर जागरूकता",
    ],
    impact_education_item: "आरटीई (शिक्षा का अधिकार)",
    impact_schemes_items: ["आधार कार्ड", "आयुष्मान भारत कार्ड"],
    impact_environment_items: [
      "प्रदूषण (तलोजा)",
      "एसी बसें",
      "जल विरोध (सिडको)",
    ],

    // People's Voice
    peoples_voice: "लोगों की आवाज़",
    pv_1: "किरण प्रकाश पाटिल की लगन के कारण हमारी मुख्य सड़कें अब चिकनी और गड्ढामुक्त हो गई हैं। मेरा दैनिक सफर अब छोटा और बहुत सुरक्षित है—उनका काम खुद बोलता है!",
    pv_1_by: "— राजेश एम., स्थानीय निवासी",
    pv_2: "स्कूल के पास नई स्ट्रीट लाइटें और ट्रैफिक सिग्नल हमारे बच्चों की सुरक्षा के लिए बहुत बड़ा बदलाव लाए हैं। पाटिल साहब की पहल की वजह से शाम को घर वापस आते समय हम बहुत अधिक सुरक्षित महसूस करते हैं।",
    pv_2_by: "— सुनीता देशमुख, गृहिणी",
    pv_3: "हम सालों से अनियमित पानी के दबाव से जूझ रहे थे, लेकिन किरण पाटिल ने सुनिश्चित किया कि हमारी पाइपलाइनें अपग्रेड हों। ऐसे नेता होना राहत की बात है जो बुजुर्गों की बुनियादी जरूरतों को वाकई सुनते हैं।",
    pv_3_by: "— विनायक राव, सेवानिवृत्त शिक्षक",
    pv_4: "मैंने कभी नहीं सोचा था कि हमारे इलाके में एक पेशेवर स्तर का खेल मैदान होगा, लेकिन श्री पाटिल ने इसे सच कर दिया। वे सच में युवाओं को सशक्त बना रहे हैं, हमें सपने पूरे करने के सही साधन देकर।",
    pv_4_by: "— समीर खान, स्थानीय फुटबॉलर",
    pv_5: "मेरे पिता की चिकित्सा आपातस्थिति के दौरान, किरण प्रकाश पाटिल द्वारा आयोजित मुफ्त स्वास्थ्य शिविर एक जीवनरक्षक साबित हुआ। गरीबों को स्वास्थ्य सेवा प्रदान करने के प्रति उनकी लगन हमारे समुदाय के लिए वरदान है।",
    pv_5_by: "— अंजलि गुप्ता, निवासी",
    pv_6: "मैं हमारी आर्थिक स्थिति के कारण अपने बेटे के भविष्य को लेकर चिंतित था, लेकिन पाटिल साहब ने हमें स्कूल में प्रवेश दिलाने में मदद की। वे केवल भाषण नहीं देते; वे सुनिश्चित करते हैं कि हर बच्चे को पढ़ने का मौका मिले।",
    pv_6_by: "— रमेश जाधव, दैनिक मजदूर",
    pv_7: "किरण पाटिल द्वारा आयोजित रक्तदान शिविर हमेशा बहुत अच्छी तरह से प्रबंधित और प्रभावशाली होते हैं। ऐसे नेता को देखकर प्रेरणा मिलती है जो हमेशा मानव जीवन और सेवा को सर्वोपरि रखता है।",
    pv_7_by: "— डॉ. अमित शाह, स्वयंसेवक",
    pv_8: "हमारे बाजार क्षेत्र में यातायात की भीड़ और जल निकासी की समस्याओं को ठीक करके, किरण प्रकाश पाटिल ने स्थानीय व्यवसायों को फलने-फूलने में मदद की है। वे एक कर्मठ व्यक्ति हैं जो हमारे शहर की नब्ज को समझते हैं।",
    pv_8_by: "— विक्रम सिंह, दुकानदार",

    // Query / Contact
    nav_query: "पूछताछ",
    query_title: "संपर्क करें",
    query_subtitle: "कोई सवाल, चिंता या सहायता चाहिए? हमसे संपर्क करें और हम जल्द से जल्द जवाब देंगे।",
    query_form_title: "हमें संदेश भेजें",
    query_name: "पूरा नाम",
    query_name_ph: "अपना पूरा नाम दर्ज करें",
    query_email: "ईमेल पता",
    query_email_ph: "अपना ईमेल दर्ज करें",
    query_phone: "फोन नंबर",
    query_phone_ph: "अपना फोन नंबर दर्ज करें",
    query_subject: "विषय",
    query_subject_ph: "यह किस बारे में है?",
    query_message: "संदेश",
    query_message_ph: "अपना संदेश यहाँ लिखें...",
    query_send: "संदेश भेजें",
    query_sent: "संदेश भेज दिया गया! हम जल्द ही आपसे संपर्क करेंगे।",
    query_contact_title: "संपर्क जानकारी",
    query_address_label: "कार्यालय पता",
    query_phone_label: "फोन",
    query_email_label: "ईमेल",
    query_follow: "हमें फॉलो करें",

    // EventDetails
    event_back: "← कार्यक्रमों पर वापस जाएं",
    event_images: "कार्यक्रम की तस्वीरें",
    event_no_images: "कोई तस्वीर उपलब्ध नहीं।",
    event_prev_img: "← पिछला",
    event_next_img: "अगला →",
  },

  mr: {
    // Header / Nav
    nav_home: "होम",
    nav_about: "माहिती",
    nav_gallery: "गॅलरी",
    nav_events: "कार्यक्रम",
    nav_join: "आमच्यात सामील व्हा",

    // Hero
    hero_tagline: "जनतेचा आवाज़.\nप्रगतीसाठी एक दृष्टी.",
    hero_cta: "त्यांचा प्रवास जाणा",
    hero_about_heading: "नेत्याबद्दल",
    hero_about_p1:
      "पनवेल महानगरपालिकेत, श्री किरण प्रकाश पाटील आपल्या मतदारसंघातील महत्त्वाचे प्रश्न काळजीपूर्वक अभ्यास करून आणि ठाम आवाजात मांडतात. प्रत्येक जाती, धर्म आणि सामाजिक गटातील लोकांना एकत्र आणणे नेहमीच प्राधान्य राहिले आहे, एकता हे त्यांच्या दृष्टिकोनाचे केंद्र आहे.",
    hero_about_p2:
      "परंपरागतपणे, नगरसेवकाची भूमिका पाण्याच्या पाइपलाइन, गटार व्यवस्था आणि रस्ते अशा मूलभूत गोष्टींपुरती मर्यादित होती. त्यांचे काम कोणत्याही संकुचित यादीत किंवा निश्चित मर्यादेत अडकत नाही. मतदारसंघासाठी व्यापक दृष्टीसह, क्रीडा, शिक्षण, सांस्कृतिक विकास आणि आरोग्य शिबिरे यांसारख्या क्षेत्रांकडे सातत्याने लक्ष पुरवले जाते. उद्दिष्ट आहे की हा प्रदेश प्रगतिशील आणि विकासशील राहावा.",
    hero_about_p3:
      "गरज असलेल्या प्रत्येकाला मदत दिली जाते. श्री किरण पाटील समजतात की श्रीमंत आणि गरीब दोघांनाही आव्हानांचा सामना करावा लागतो, आणि प्रत्येक समस्येला समान गांभीर्याने हाताळले जाते. असे कधीही गृहीत धरले जात नाही की केवळ वंचितांनाच मदत लागते; जे संपन्न दिसतात तेही त्यांच्या पद्धतीने संघर्ष करतात, आणि त्यांना त्या परिस्थितीतून बाहेर काढणे हे त्यांच्या जबाबदारीचा भाग बनते.",
    hero_explore_bio: "संपूर्ण माहिती पहा",

    // Events
    events_heading: "कार्यक्रम",
    events_view_more: "अधिक पहा",
    events_read_more: "अधिक वाचा",
    events_loading: "लोड होत आहे...",
    events_none: "कोणतेही कार्यक्रम सापडले नाहीत.",
    events_error: "कार्यक्रम लोड करण्यात अयशस्वी. कृपया नंतर पुन्हा प्रयत्न करा.",
    events_previous: "मागील",
    events_next: "पुढील",

    // Gallery
    gallery_heading: "गॅलरी",
    gallery_loading: "लोड होत आहे...",
    gallery_back: "गॅलरीवर परत जा",
    gallery_categories: "श्रेण्या",
    gallery_view: "गॅलरी पहा",

    // Footer
    footer_quick_links: "द्रुत लिंक्स",
    footer_explore_bio: "माहिती पहा",
    footer_address: "पत्ता",
    footer_meet_kiran: "श्री किरण प्रकाश पाटील यांना भेटा",
    footer_meet_netra: "सौ. नेत्रा किरण पाटील",
    footer_copyright: "© 2025 किरण पाटील. सर्व हक्क राखीव. | Codifyne द्वारा विकसित",

    // About Kiran
    kiran_title: "माझा प्रवास, माझी कटिबद्धता",
    kiran_s1_h: "मातीशी नातं",
    kiran_s1_p1: "माझा जन्म महाराष्ट्रातील जळगाव जिल्ह्यातील एका सामान्य शेतकरी कुटुंबात झाला. मातीत राबणाऱ्या कष्टकऱ्यांची जिद्द आणि त्यांची आव्हाने मी जवळून पाहिली आहेत. या सुरुवातीच्या काळाने माझ्यामध्ये कठोर परिश्रम आणि सामाजिक बांधिलकीबद्दल आदर निर्माण केला—हेच संस्कार आजही माझ्या प्रत्येक कृतीला दिशा देतात.",
    kiran_s1_p2: "माझे मूळ जळगावचे असले तरी, माध्यमिक शिक्षणासाठी मी नाशिकला गेलो, जिथे माझ्या कक्षा रुंदावल्या आणि मी समाजसेवेच्या प्रवासासाठी सज्ज झालो.",
    kiran_s2_h: "सेवेचे साधन म्हणून शिक्षण",
    kiran_s2_intro: "शिक्षण म्हणजे केवळ पदव्यांचा संग्रह नसून, इतरांची प्रभावीपणे सेवा करण्याचे ते एक साधन आहे, अशी माझी धारणा आहे. माझी शैक्षणिक पार्श्वभूमी माझ्या नेतृत्वाचा बहुआयामी दृष्टिकोन दर्शवते:",
    kiran_s2_b1_l: "समाजशास्त्र:", kiran_s2_b1_t: "समाजाची जडणघडण कशी होते आणि परिवर्तनाचे बीज कसे रोवता येईल, हे समजून घेण्यासाठी मी पदवी शिक्षण पूर्ण केले.",
    kiran_s2_b2_l: "आरोग्य सेवा दृष्टीकोन:", kiran_s2_b2_t: "मेडिकल लॅबोरेटरी टेक्नॉलॉजी (DMLT) मधील पदविकेमुळे मला आरोग्य आणि लोककल्याणाचे महत्त्व तांत्रिक दृष्टिकोनातून समजले.",
    kiran_s2_b3_l: "संवाद आणि नेतृत्व:", kiran_s2_b3_t: "लोकांशी अधिक चांगल्या प्रकारे जोडले जाण्यासाठी, मी जनसंपर्क व्यवस्थापनात (PR Management) पदव्युत्तर पदविका पूर्ण केली, ज्यामुळे पारदर्शक नेतृत्व करण्यासाठी आवश्यक कौशल्ये मला आत्मसात करता आली.",
    kiran_s3_h: "सार्वजनिक सेवेची दोन दशके",
    kiran_s3_p1: "मी २००२ मध्ये मुंबईत आलो आणि २००४ मध्ये राजकीय क्षेत्रात पहिले पाऊल टाकले. जनता आणि त्यांच्या समस्यांवरील उपाय यांच्यातील एक 'सेतू' बनणे, हे माझे उद्दिष्ट तेव्हापासून कायम आहे.",
    kiran_s4_h: "जनतेच्या पाठीशी खंबीरपणे",
    kiran_s4_b1_l: "वैद्यकीय मार्गदर्शन:", kiran_s4_b1_t: "आरोग्याचे संकट कठीण असते. अशा वेळी नागरिकांना क्लिष्ट वैद्यकीय उपचार आणि प्रक्रियेत मार्गदर्शन करणे ही माझी प्राथमिकता असते, जेणेकरून त्यांना एकाकी वाटू नये.",
    kiran_s4_b2_l: "प्रशासकीय समन्वय:", kiran_s4_b2_t: "पोलीस, सिडको (CIDCO), महानगरपालिका आणि तहसीलदार कार्यालयाशी मी सलोख्याचे व व्यावसायिक संबंध जपतो. हे संबंध वैयक्तिक फायद्यासाठी नसून, तुमच्या समस्यांचे निराकरण वेगाने आणि न्यायाने व्हावे यासाठी आहेत.",
    kiran_s4_b3_l: "'स्वच्छता दूतां'चे सक्षमीकरण:", kiran_s4_b3_t: "आमचे स्वच्छता कर्मचारी शहराचा कणा आहेत. त्यांच्या सुरक्षिततेसाठी मी कटिबद्ध असून, त्यांना संरक्षक साधने आणि आवश्यक टीटी (TT) इंजेक्शनद्वारे सातत्याने सहकार्य करतो.",
    kiran_s5_h: "माझे मूळ तत्त्वज्ञान: माणुसकी प्रथम",
    kiran_s5_p1: "मी जनतेचा एक निस्वार्थ सेवक आहे. मी जात, धर्म किंवा सामाजिक स्तर मानत नाही. माझ्या दारात येणाऱ्या प्रत्येक व्यक्तीला, मग ती श्रीमंत असो वा गरीब, तितक्याच आदराने आणि सन्मानाने वागवले जाते.",
    kiran_s5_b1_l: "वंचितांचा आवाज:", kiran_s5_b1_t: "मी न्यायासाठी खंबीरपणे उभा राहतो, विशेषतः अशा लोकांसाठी ज्यांना वाटते की त्यांचा आवाज दाबला गेला आहे.",
    kiran_s5_b2_l: "भविष्य घडवणे:", kiran_s5_b2_t: "मी तरुणांचा खंबीर समर्थक आहे. पुढच्या पिढीने सक्रिय नागरिक बनावे—मतदान करावे, सामाजिक प्रश्नांची जाणीव ठेवावी आणि रक्तदान व अवयवदानाद्वारे माणुसकीची सेवा करावी, यासाठी मी त्यांना नेहमीच प्रोत्साहित करतो.",
    kiran_quote: "\"नेतृत्व म्हणजे केवळ पद नाही; तर कोणालाही मागे न ठेवण्याची ती एक जबाबदारी आहे.\"",

    // About Netra
    netra_title: "सौ. नेत्रा किरण पाटील यांना भेटा",
    netra_s1_p1: "माझा प्रवास कोल्हापुरच्या ऐतिहासिक नगरीतून सुरू झाला, जिथे मी समाज आणि सेवेची खोल भावना विकसित केली. मुंबईत उच्च शिक्षण घेताना, मी मुंबई विद्यापीठातून वाणिज्य पदवी मिळवली आणि कार्यालय प्रशासनात डिप्लोमाद्वारे माझी कौशल्ये आणखी मजबूत केली—ज्याने माझ्या लोककेंद्रित आणि सुसंघटित नेतृत्व दृष्टिकोनाला आकार दिला.",
    netra_s1_p2: "माझा राजकीय प्रवास 2016 मध्ये भाजपसोबत सुरू झाला, आणि तेव्हापासून मी सामाजिक उपक्रमांमध्ये सक्रियपणे सहभागी आहे, सामुदायिक गरजा पूर्ण करण्यासाठी आणि सकारात्मक बदल घडवण्यासाठी श्री किरण प्रकाश पाटील यांच्यासोबत काम करत आहे.",
    netra_s2_h: "माझ्या भूमिका आणि जबाबदाऱ्या",
    netra_s2_b1_l: "विधिमंडळीय समर्थन:", netra_s2_b1_t: "पनवेल महानगरपालिकेची समर्पित नगरसेविका म्हणून, मी सातत्याने प्रमुख सामाजिक प्रश्नांवर महत्त्वाचे प्रश्न विचारते, हे सुनिश्चित करते की शासनाच्या दालनांमध्ये प्रत्येक नागरिकाचा आवाज ऐकला जावा.",
    netra_s2_b2_l: "जनजागृती:", netra_s2_b2_t: "आमच्या समाजावर परिणाम करणाऱ्या महत्त्वाच्या विषयांवर सार्वजनिक जागरूकता निर्माण करण्यासाठी मी अथक परिश्रम करते, नागरिकांना माहितीपूर्ण निर्णय घेण्यासाठी आवश्यक माहितीने सक्षम बनवते.",
    netra_s2_b3_l: "सामुदायिक कल्याण:", netra_s2_b3_t: "मी समाजाच्या प्रत्येक घटकाच्या गरजा पूर्ण करण्यासाठी कटिबद्ध आहे, विशेषतः वंचित आणि उपेक्षित वर्गावर विशेष लक्ष देते, हे सुनिश्चित करते की कोणालाही मागे सोडले जाऊ नये.",
    netra_s3_h: "राजकारणाच्या पलीकडे: एक चांगल्या समाजाची उभारणी",
    netra_s3_b1_l: "युवा आणि क्रीडा:", netra_s3_b1_t: "खारघर स्पोर्ट्स अकादमीची सचिव म्हणून, मी पुढच्या पिढीची प्रतिभा आणि ऊर्जा जोपासत आमच्या प्रदेशात युवा सहभाग आणि क्रीडा विकासाला सक्रियपणे प्रोत्साहन देते.",
    netra_s3_b2_l: "सामाजिक सक्षमीकरण:", netra_s3_b2_t: "युवाप्रेरणा सामाजिक संस्थेची उपाध्यक्ष म्हणून, मी सामाजिक सक्षमीकरण आणि जमिनीवरील उपक्रम चालवते जे लोकांच्या जीवनात चिरस्थायी आणि अर्थपूर्ण बदल घडवतात.",
    netra_s3_b3_l: "सांस्कृतिक आणि आरोग्य उपक्रम:", netra_s3_b3_t: "मी सांस्कृतिक उपक्रम, आरोग्य शिबिरे आणि शैक्षणिक कार्यक्रमांचे आयोजन करते जे जीवनाच्या सर्व क्षेत्रांतील लोकांचे जीवन समृद्ध आणि उन्नत करतात.",
    netra_s4_p: "माझे नेतृत्व पारंपरिक भूमिकांच्या खूप पलीकडे पोहोचते, क्रीडा, शिक्षण, सांस्कृतिक उपक्रम, आरोग्य उपक्रम आणि सामुदायिक कल्याणाच्या प्रत्येक कोपऱ्यात. मी एक चांगला, अधिक समावेशक समाज घडवण्यासाठी कटिबद्ध आहे—एक एक पाऊल टाकत.",

    // Mission
    mission_heading: "ध्येय",
    mission_sub:
      "असा देश जिथे प्रत्येक आवाज महत्त्वाचा असतो, प्रत्येक मूल शिकते आणि प्रत्येक नागरिक प्रतिष्ठेने आणि संधीसह जगतो.",
    mission_education: "सर्वांसाठी दर्जेदार शिक्षण",
    mission_sustainable: "शाश्वत विकास",
    mission_digital: "डिजिटल इंडिया, ग्रामीण प्रथम",

    // Journey
    journey_heading: "प्रवास",
    journey_year_label: "वर्ष",

    // Kiran Journey
    kj_2001_title: '"शिक्षा ज्योती" चा शुभारंभ',
    kj_2001_desc:
      "10,000+ मुलांना सरकारी शाळांमध्ये नोंदणी करण्यासाठी ग्रामीण शिक्षण मोहीम सुरू केली. मुलींच्या शिक्षणावर आणि गळतीवर लक्ष केंद्रित केले.",
    kj_2002_title: "डिजिटल लर्निंग पायलट",
    kj_2002_desc:
      "50 ग्रामीण शाळांमध्ये मूलभूत डिजिटल साक्षरता मॉड्यूल सादर केले.",
    kj_2003_title: "शिष्यवृत्ती अभियान",
    kj_2003_desc:
      "5,000+ गुणवंत वंचित विद्यार्थ्यांना लाभ देणारा राष्ट्रव्यापी शिष्यवृत्ती कार्यक्रम सुरू केला.",
    kj_2004_title: "शिक्षक प्रशिक्षण कार्यक्रम",
    kj_2004_desc:
      "2,000+ ग्रामीण शाळेतील शिक्षकांना आधुनिक शैक्षणिक पद्धती आणि विद्यार्थी सहभागात प्रशिक्षण दिले.",
    kj_2005_title: "मोबाइल शिक्षण वैन",
    kj_2005_desc:
      "दुर्गम आदिवासी गावांपर्यंत पोहोचण्यासाठी डिजिटल साधनांनी सज्ज शिक्षण वैन तैनात केल्या.",

    // Netra Journey
    nj_2010_title: "युवा शिक्षण मोहीम",
    nj_2010_desc:
      "सातारा येथे वंचित मुलांसाठी शिक्षणाला प्रोत्साहन देण्यासाठी जमिनीवरील उपक्रम सुरू केला.",
    nj_2012_title: "महिला सक्षमीकरण अभियान",
    nj_2012_desc:
      "ग्रामीण महाराष्ट्रातील महिलांसाठी बचत गट आणि जागरूकता कार्यक्रम सुरू केले.",
    nj_2015_title: "नेतृत्व विकास कार्यशाळा",
    nj_2015_desc:
      "सामाजिक सक्रियतेसाठी युवा नेते घडवण्यासाठी प्रशिक्षण शिबिरे आयोजित केली.",
    nj_2018_title: "डिजिटल साक्षरता मिशन",
    nj_2018_desc:
      "दुर्गम गावांसाठी डिजिटल साक्षरता वैन सुरू केल्या, विशेषतः मुलींवर लक्ष केंद्रित केले.",
    nj_2022_title: "सामाजिक न्याय मोहीम",
    nj_2022_desc:
      "असमानतेविरुद्ध सामुदायिक प्रयत्नांचे नेतृत्व केले आणि सर्वसमावेशक धोरणांना प्रोत्साहन दिले.",

    // Impact
    impact_heading: "प्रभाव",
    impact_health: "आरोग्य",
    impact_education: "शिक्षण",
    impact_schemes: "योजना",
    impact_environment: "पर्यावरण",
    impact_health_items: [
      "शहरी आरोग्य केंद्र",
      "रक्तदान शिबिर",
      "कोविड कार्य",
      "मधुमेह जागरूकता",
      "व्यसनमुक्ती अभियान",
      "कर्करोग जागरूकता",
    ],
    impact_education_item: "आरटीई (शिक्षण हक्क)",
    impact_schemes_items: ["आधार कार्ड", "आयुष्मान भारत कार्ड"],
    impact_environment_items: [
      "प्रदूषण (तळोजा)",
      "एसी बसेस",
      "पाणी आंदोलन (सिडको)",
    ],

    // People's Voice
    peoples_voice: "लोकांचा आवाज",
    pv_1: "किरण प्रकाश पाटील यांच्या चिकाटीमुळे आमच्या मुख्य रस्त्यांवरील खड्डे बुजले आणि रस्ते गुळगुळीत झाले. माझा रोजचा प्रवास आता छोटा आणि खूपच सुरक्षित झाला आहे—त्यांचं काम स्वतःच बोलतं!",
    pv_1_by: "— राजेश एम., स्थानिक रहिवासी",
    pv_2: "शाळेजवळील नवीन पथदिवे आणि वाहतूक सिग्नल्समुळे आमच्या मुलांच्या सुरक्षिततेत खूप मोठा फरक पडला आहे. पाटील साहेबांच्या पुढाकारामुळे संध्याकाळी घरी येताना आम्हाला खूप सुरक्षित वाटते.",
    pv_2_by: "— सुनीता देशमुख, गृहिणी",
    pv_3: "आम्ही वर्षानुवर्षे अनियमित पाण्याच्या दाबाशी झुंजत होतो, पण किरण पाटील यांनी आमच्या पाइपलाइन अपग्रेड करण्याची खात्री केली. असा नेता असणे किती दिलासादायक आहे जो वृद्धांच्या मूलभूत गरजा खरोखर ऐकतो.",
    pv_3_by: "— विनायक राव, निवृत्त शिक्षक",
    pv_4: "आमच्या परिसरात व्यावसायिक दर्जाचं क्रीडांगण असेल असं मला कधीच वाटलं नव्हतं, पण श्री पाटील यांनी ते शक्य केलं. ते खरोखरच युवावर्गाला सक्षम करत आहेत, आमच्या स्वप्नांचा पाठलाग करण्यासाठी योग्य सुविधा देऊन.",
    pv_4_by: "— समीर खान, स्थानिक फुटबॉलर",
    pv_5: "माझ्या वडिलांच्या वैद्यकीय आणीबाणीच्या वेळी, किरण प्रकाश पाटील यांनी आयोजित केलेलं मोफत आरोग्य शिबिर जीव वाचवणारं ठरलं. गरीबांना आरोग्य सेवा देण्यासाठी त्यांची निष्ठा आमच्या समाजासाठी एक वरदान आहे.",
    pv_5_by: "— अंजली गुप्ता, रहिवासी",
    pv_6: "आमच्या आर्थिक परिस्थितीमुळे मुलाच्या भविष्याची काळजी वाटत होती, पण पाटील साहेबांनी आम्हाला शाळेत प्रवेश मिळवून दिला. ते केवळ भाषणे देत नाहीत; ते हे सुनिश्चित करतात की प्रत्येक मुलाला शिक्षणाची संधी मिळेल.",
    pv_6_by: "— रमेश जाधव, रोजंदारी कामगार",
    pv_7: "किरण पाटील यांनी आयोजित केलेले रक्तदान शिबिर नेहमीच अतिशय सुव्यवस्थित आणि प्रभावी असतात. असा नेता पाहणं स्फूर्तिदायक आहे जो नेहमीच मानवी जीवन आणि सेवेला सर्वोच्च प्राधान्य देतो.",
    pv_7_by: "— डॉ. अमित शाह, स्वयंसेवक",
    pv_8: "आमच्या बाजार परिसरातील वाहतूक कोंडी आणि ड्रेनेजच्या समस्या सोडवून, किरण प्रकाश पाटील यांनी स्थानिक व्यवसायांना भरभराट करण्यास मदत केली आहे. ते एक कृतिशील व्यक्ती आहेत जे आपल्या शहराची नाडी ओळखतात.",
    pv_8_by: "— विक्रम सिंह, दुकानदार",

    // Query / Contact
    nav_query: "चौकशी",
    query_title: "संपर्क साधा",
    query_subtitle: "काही प्रश्न, चिंता किंवा मदत हवी आहे? आमच्याशी संपर्क साधा आणि आम्ही लवकरात लवकर उत्तर देऊ.",
    query_form_title: "आम्हाला संदेश पाठवा",
    query_name: "पूर्ण नाव",
    query_name_ph: "तुमचे पूर्ण नाव टाका",
    query_email: "ईमेल पत्ता",
    query_email_ph: "तुमचा ईमेल टाका",
    query_phone: "फोन नंबर",
    query_phone_ph: "तुमचा फोन नंबर टाका",
    query_subject: "विषय",
    query_subject_ph: "हे कशाबद्दल आहे?",
    query_message: "संदेश",
    query_message_ph: "तुमचा संदेश येथे लिहा...",
    query_send: "संदेश पाठवा",
    query_sent: "संदेश पाठवला गेला! आम्ही लवकरच तुमच्याशी संपर्क करू.",
    query_contact_title: "संपर्क माहिती",
    query_address_label: "कार्यालयाचा पत्ता",
    query_phone_label: "फोन",
    query_email_label: "ईमेल",
    query_follow: "आम्हाला फॉलो करा",

    // EventDetails
    event_back: "← कार्यक्रमांवर परत जा",
    event_images: "कार्यक्रमाचे फोटो",
    event_no_images: "कोणतेही फोटो उपलब्ध नाहीत.",
    event_prev_img: "← मागील",
    event_next_img: "पुढील →",
  },
};

export const getLang = () => localStorage.getItem("siteLang") || "mr";

export const t = (key) => {
  const lang = getLang();
  return translations[lang]?.[key] ?? translations["en"]?.[key] ?? key;
};

export default translations;
