import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          // Section1 
          welcomingHeader: "Let us help your",
          agencyDescription: "We bring more customers to you by creating a strong digital presence for you.",
          wetakecare: "We take care of everything. A-Z",
          ourService: "Schedule a meeting",

          // Section2
          growTogether: "Let's grow together!",
          companyDescription: "WeDoTech is a full-service media agency that helps businesses drive sustainable growth in the new world of marketing. With a rich heritage in performance, we apply that mindset to everything we do; brand planning, strategy, integrated media, social, creative, and data.",
          globalHappyClients: "Satisfied Clients",
          globalHappyClients1: "Skilled employer",
          globalHappyClients2: "Current Projects",
          globalHappyClients3: "Global clients",

          // Section3
          findUs: "FIND US EVERYWHERE AND ANYWHERE YOU GO !!!",

          // Section4
          weDoTechBetter: "WE DO TECH BETTER",
          makeBusinessGrow: "WE MAKE YOUR BUSINESS GROW",
          getInTouch: "Get in touch",

          // Blogpost
          businessSuccess: "How to make my business successful",
          marketingStrategy: "What's the most used marketing strategy nowadays",
          aiMinds: "AI Minds: Blowing Bots that we provide",
          readMore: "Read more",

          // Footer
          footerDescription: "We are a global, full-service media agency that grows ambitious brands through reinvention.",
          quickLinks: "Quick Links",
          services: "Services",
          ourWork: "Our Work",
          getInTouchLink: "Get In Touch",
          whatsNew: "What's New",
          connectWithUs: "Connect With Us",
          callUs: "Call Us",
          phoneNumber: "+212 6-19-74-72-55",
          copyright: "Made and Designed by WEDOTECH",
          allRightsReserved: "All Copyrights © Reserved",

          // Navbar
          projects: "Projects",

          //herosection servicepage:
          services: "Services",
          integratedMarketingSolutions: "Integrated marketing solutions that help brands grow.",
          teamCommitment: "Our team is committed to gaining a deep understanding of our clients' business goals. In order to deliver real business impact, whether it's across Strategy & Planning and Media, or Analytics and Organic Performance, we work closely with our clients to develop tailored marketing solutions that set them up for success.",

          // Service description
          contentCreation: "Content Creation",
          contentCreationTitle: "Create, Captivate, Connect",
          contentCreationDescription: "Our content creation services are designed to captivate and engage your audience. We produce high-quality visuals, videos, and well-designed graphic content tailored to your brand's voice and objectives, using the best equipment and tools available in today's market. Whether you're looking for blog posts, social media content (Reels, Posts, Stories), or promotional videos, we deliver creative assets that drive engagement and build lasting connections.",

          socialMediaManagement: "Social Media Management",
          socialMediaManagementTitle: "Effortless Social Media Mastery",
          socialMediaManagementDescription: "Managing your social media presence can be overwhelming, but we make it simple. Our team handles everything from content scheduling to community engagement, ensuring your social profiles stay active and relevant. We keep your audience informed and engaged, growing your brand's online presence and loyalty while giving you the professional touch.",

          socialMediaAdvertising: "Social Media Advertising",
          socialMediaAdvertisingTitle: "Targeted Ads, More Results",
          socialMediaAdvertisingDescription: "Reach your target audience more effectively with our social media advertising solutions. We create and manage campaigns across major platforms like Facebook, Instagram, and TikTok to ensure your message gets seen by the right people. Our data-driven approach helps you maximize your ad spend and achieve measurable results.",
          
          websiteCreation: "Website Creation and Desigining",
          websiteCreationTitle: "Your Digital Home, Perfected",
          websiteCreationDescription: "Your website is the cornerstone of your digital presence. We design and develop responsive, user-friendly websites that align with your brand and drive conversions. From e-commerce to portfolio sites, we build websites that not only look great but also perform exceptionally well in terms of functionality and SEO.",

          seo: "SEO",
          seoTitle: "Get Found, Get Noticed",
          seoDescription: "Our SEO services help your business get found online by optimizing your website for search engines. We conduct in-depth keyword research, on-page optimization, and off-page strategies to improve your ranking on Google and other search engines, driving organic traffic to your site and increasing your visibility.",

          Branding: "Branding",
          BrandingTitle: "Unleash Your Authentic Voice, Stand out and Rule the market",
          BrandingDescription: "Branding is all about defining and promoting your Business. We help you craft a unique and authentic identity that sets you apart from the competition. From A to Z — including logo design, brand name development, color palette selection, mockups, and many more — we build your brand to resonate with your audience and leave a lasting impression.",

          scamHeader: "Please beware of recruitment scams",
          scamDescription1: "We are aware that some individuals have been contacted with fake job offers or freelance work opportunities by a third party unlawfully impersonating Wedotech. Recruitment fraud is on the rise across the sector, and we would advise you to please be vigilant. These sites are not in any way related to Wedotech agency and we are not responsible for their activities.",
          scamDescription2: "If you have been affected by this scam, we would advise you to raise it with your bank and / or local authorities. All legitimate work opportunities with Wedotech agency are only advertised on our careers site, and applications to join our freelance network are only made via our website.",
          scamDescription3: "Please report any suspected fraudulent recruitment activity that looks like it may be connected to Wedotech agency to us at report@Wedotech agency.com. Please understand we are not responsible for any such activity and will continue to take action towards the prevention of such operations.",

          //CONTACT 
          contact_us: "CONTACT US AT WE DO TECH.",
          contact_button: "Contact Us",
          get_in_touch: "Get in touch",
          contact_description: "Get in touch with the Wedotech agency team - we'd love to hear from you",
          digital_partner: "Whether you're looking for a digital marketing partner, or simply keen to find out more about Wedotech, drop us a line",
          first_name: "First name",
          last_name: "Last name",
          company: "Company",
          email: "Email",
          phone_number: "Phone number",
          your_message: "Your message - Let us know how we can help**",
          agree_policy: "Tick here if you'd like to receive marketing and insights from WeDoTech. You can unsubscribe at any time.",
          find_out_more: "Find out more",

          map_background_alt: "Map background",
    where_to_find_us: "Where to find us",
    location_rabat: "Rabat Morocco",
    address_line1: "Rabat Hassan morocco",
    address_line2: "al mouahidine street",
    phone_number: "+21277895469",
    view_location: "View location",

          explore_roles: "EXPLORE ROLES",
    at_we_do_tech: "AT WE DO TECH.",
        }
      },
      fr: {
        translation: {
          // Section1
          welcomingHeader: "Nous Vous aidons dans votre",
          agencyDescription: "Nous sommes une agence média globale et complète qui fait croître les marques ambitieuses par la réinvention.",
          ourService: "Planifier une Réunion",

          // Section2
          growTogether: "Ensemble, avançons plus vite ",
          companyDescription: "WeDoTech est une agence média complète qui aide les entreprises à stimuler une croissance durable dans le nouveau monde du marketing. Avec un riche héritage en performance, nous appliquons cette mentalité à tout ce que nous faisons : planification de marque, stratégie, médias intégrés, social, créatif et données.",
          globalHappyClients: "Clients heureux dans le monde",

          // Section3
          findUs: "TROUVEZ-NOUS PARTOUT OÙ VOUS ALLEZ !!!",
          wetakecare: "Nous nous occupons de tout. De A à Z",

          // Section4
          weDoTechBetter: "WE DO IT BETTER",
          makeBusinessGrow: "NOUS GRANDISSONS VOTRE ENTREPRISE",
          getInTouch: "Contactez-nous",

          // Blogpost
          businessSuccess: "Comment rendre mon entreprise prospère",
          marketingStrategy: "Quelle est la stratégie marketing la plus utilisée de nos jours",
          aiMinds: "AI Minds : Les bots époustouflants que nous fournissons",
          readMore: "Lire la suite",

          // Footer
          footerDescription: "Nous sommes une agence média globale et complète qui fait croître les marques ambitieuses par la réinvention.",
          quickLinks: "Liens rapides",
          services: "Services",
          ourWork: "Notre travail",
          getInTouchLink: "Nous contacter",
          whatsNew: "Quoi de neuf",
          connectWithUs: "Connectez-vous avec nous",
          callUs: "Appelez-nous",
          phoneNumber: "+212 6-19-74-72-55",
          copyright: "Conçu et réalisé par WEDOTECH",
          allRightsReserved: "Tous droits réservés ©",

          // Navbar
          projects: "Projects",

           // Hero.service
          services: "Services",
          integratedMarketingSolutions: "Solutions marketing intégrées qui aident les marques à se développer.",
          teamCommitment: "Notre équipe s'engage à acquérir une compréhension approfondie des objectifs commerciaux de nos clients. Afin de générer un réel impact commercial, que ce soit dans les domaines de la Stratégie & Planification et des Médias, ou de l'Analyse et de la Performance Organique, nous travaillons en étroite collaboration avec nos clients pour développer des solutions marketing sur mesure qui les préparent au succès.",

          // Service description
          contentCreation: "Création de Contenu",
          contentCreationTitle: "Créer, Captiver, Connecter",
          contentCreationDescription: "Nos services de création de contenu sont conçus pour captiver et engager votre audience. Nous produisons des visuels de haute qualité, des vidéos et du contenu graphique bien conçu, adaptés à la voix et aux objectifs de votre marque, en utilisant le meilleur équipement et les outils les plus performants du marché actuel. Que vous recherchiez des articles de blog, du contenu pour les réseaux sociaux (Reels, Publications, Stories) ou des vidéos promotionnelles, nous livrons des éléments créatifs qui suscitent l'engagement et construisent des relations durables.",
        
          socialMediaManagement: "Gestion des Réseaux Sociaux",
          socialMediaManagementTitle: "Maîtrise des Réseaux Sociaux Simplifiée",
          socialMediaManagementDescription: "Gérer votre présence sur les réseaux sociaux peut être accablant, mais nous simplifions la tâche. Notre équipe s'occupe de tout, de la planification du contenu à l'engagement communautaire, pour que vos profils sociaux restent actifs et pertinents. Nous informons et engageons votre audience, en développant la présence en ligne et la fidélité de votre marque tout en lui apportant une touche professionnelle.",
        
          socialMediaAdvertising: "Publicité sur les Réseaux Sociaux",
          socialMediaAdvertisingTitle: "Publicité Ciblée, Plus de Résultats",
          socialMediaAdvertisingDescription: "Atteignez plus efficacement votre audience cible avec nos solutions de publicité sur les réseaux sociaux. Nous créons et gérons des campagnes sur les principales plateformes comme Facebook, Instagram et TikTok pour que votre message soit vu par les bonnes personnes. Notre approche basée sur les données vous aide à maximiser votre budget publicitaire et à obtenir des résultats mesurables.",
        
          websiteCreation: "Création et Conception de Sites Web",
          websiteCreationTitle: "Votre Maison Digitale, Perfectionnée",
          websiteCreationDescription: "Votre site web est le pilier de votre présence numérique. Nous concevons et développons des sites web responsifs et conviviaux qui s'alignent sur votre marque et favorisent les conversions. Qu'il s'agisse de sites e-commerce ou de portfolios, nous créons des sites qui non seulement ont un superbe design mais qui offrent également des performances exceptionnelles en termes de fonctionnalité et de référencement (SEO).",
        
          seo: "Référencement (SEO)",
          seoTitle: "Soyez Trouvé, Attirez l'Attention",
          seoDescription: "Nos services de référencement vous aident à être trouvé en ligne en optimisant votre site web pour les moteurs de recherche. Nous menons des recherches approfondies de mots-clés, des optimisations on-page et des stratégies off-page pour améliorer votre positionnement sur Google et d'autres moteurs de recherche, en augmentant le trafic organique vers votre site et en accroissant votre visibilité.",
        
          Branding: "Branding",
          BrandingTitle: "Libérez Votre Voix Authentique et Démarquez-vous",
          BrandingDescription: "Le branding personnel consiste à définir et promouvoir qui vous êtes en tant que professionnel ou entreprise. Nous vous aidons à créer une identité unique et authentique qui vous distingue de la concurrence. Des visuels aux messages, nous construisons votre marque pour qu'elle résonne avec votre audience et laisse une impression durable.",

          scamHeader: "Veuillez vous méfier des arnaques de recrutement",
          scamDescription1: "Nous sommes conscients que certaines personnes ont été contactées avec de fausses offres d'emploi ou des opportunités de travail indépendant par un tiers usurpant illégalement l'identité de Wedotech agency. La fraude au recrutement est en augmentation dans le secteur, et nous vous conseillons d'être vigilant. Ces sites ne sont en aucun cas liés à Wedotech agency et nous ne sommes pas responsables de leurs activités.",
          scamDescription2: "Si vous avez été victime de cette arnaque, nous vous conseillons de le signaler à votre banque et/ou aux autorités locales. Toutes les opportunités de travail légitimes chez Wedotech agency sont uniquement annoncées sur notre site de carrières, et les candidatures pour rejoindre notre réseau de freelances se font uniquement via notre site Web.",
          scamDescription3: "Veuillez signaler toute activité de recrutement frauduleuse soupçonnée qui semble être liée à Wedotech agency à l'adresse report@Wedotech agency.com. Veuillez comprendre que nous ne sommes pas responsables de ces activités et continuerons à prendre des mesures pour prévenir ces opérations.",

          //Contact :
          contact_us: "CONTACTEZ-NOUS À WE DO TECH.",
          contact_button: "Contactez-nous",
          get_in_touch: "Contactez Nous",
          contact_description: "Contactez l'équipe Wedotech agency - nous serions ravis de vous entendre",
          digital_partner: "Que vous recherchiez un partenaire en marketing digital ou que vous souhaitiez simplement en sa voir plus sur Wedotech, n'hésitez pas à nous contacter.",
          first_name: "Prénom",
          last_name: "Nom de famille",
          company: "Société",
          email: "Email",
          phone_number: "Numéro de téléphone",
          your_message: "Votre message - Faites-nous savoir comment nous pouvons vous aider**",
          agree_policy: "Cochez ici si vous souhaitez recevoir des informations marketing de WeDoTech. Vous pouvez vous désabonner à tout moment.",
          find_out_more: "En savoir plus",

          map_background_alt: "Fond de carte",
    where_to_find_us: "Où nous trouver",
    location_rabat: "Rabat Maroc",
    address_line1: "Rabat Hassan maroc",
    address_line2: "rue al mouahidine",
    phone_number: "+21277895469",
    view_location: "Voir l'emplacement",

          explore_roles: "EXPLOREZ LES RÔLES",
    at_we_do_tech: "CHEZ WE DO TECH.",
        }
      },
    }
  })

export default i18n;