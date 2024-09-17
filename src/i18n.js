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
          agencyDescription: "We are a global, full-service media agency that grows ambitious brands through reinvention.",
          ourService: "Our service",

          // Section2
          growTogether: "Let's grow together!",
          companyDescription: "WeDoTech is a full-service media agency that helps businesses drive sustainable growth in the new world of marketing. With a rich heritage in performance, we apply that mindset to everything we do; brand planning, strategy, integrated media, social, creative, and data.",
          globalHappyClients: "Global Happy Clients",

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
          about: "About",

          //herosection servicepage:
          services: "Services",
          integratedMarketingSolutions: "Integrated marketing solutions that help brands grow.",
          teamCommitment: "Our team is committed to gaining a deep understanding of our clients' business goals. In order to deliver real business impact, whether it's across Strategy & Planning and Media, or Analytics and Organic Performance, we work closely with our clients to develop tailored marketing solutions that set them up for success.",

          // Service description
          strategyAndPlanning: "Strategy & Planning",
          socialMediaManagement: "Social Media Management",
          socialMediaAdvertising: "Social Media Advertising",
          influencerMarketing: "Influencer Marketing",
          websiteDevelopmentAndDesigning: "Website Development and Designing",
          trainingAndConsulting: "Training and Consulting",
          frameworkForGrowth: "A framework that meets business needs and drives sustainable growth",
          fullFunnelStrategy: "Full-funnel media strategy and execution that drives business growth",
          preciseRecommendations: "Precise recommendations, transformative results",
          socialMediaContent: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand's voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement."
        }
      },
      fr: {
        translation: {
          // Section1
          welcomingHeader: "Laissez-nous vous aider dans votre",
          agencyDescription: "Nous sommes une agence média globale et complète qui fait croître les marques ambitieuses par la réinvention.",
          ourService: "Nos services",

          // Section2
          growTogether: "Ensemble, avançons plus vite ",
          companyDescription: "WeDoTech est une agence média complète qui aide les entreprises à stimuler une croissance durable dans le nouveau monde du marketing. Avec un riche héritage en performance, nous appliquons cette mentalité à tout ce que nous faisons : planification de marque, stratégie, médias intégrés, social, créatif et données.",
          globalHappyClients: "Clients heureux dans le monde",

          // Section3
          findUs: "TROUVEZ-NOUS PARTOUT OÙ VOUS ALLEZ !!!",

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
          about: "À propos",

           // Hero.service
          services: "Services",
          integratedMarketingSolutions: "Solutions marketing intégrées qui aident les marques à se développer.",
          teamCommitment: "Notre équipe s'engage à acquérir une compréhension approfondie des objectifs commerciaux de nos clients. Afin de générer un réel impact commercial, que ce soit dans les domaines de la Stratégie & Planification et des Médias, ou de l'Analyse et de la Performance Organique, nous travaillons en étroite collaboration avec nos clients pour développer des solutions marketing sur mesure qui les préparent au succès.",

          // Service description
          strategyAndPlanning: "Stratégie et Planification",
          socialMediaManagement: "Gestion des Médias Sociaux",
          socialMediaAdvertising: "Publicité sur les Médias Sociaux",
          influencerMarketing: "Marketing d'Influence",
          websiteDevelopmentAndDesigning: "Développement et Conception de Sites Web",
          trainingAndConsulting: "Formation et Conseil",
          frameworkForGrowth: "Un cadre qui répond aux besoins de l'entreprise et favorise une croissance durable",
          fullFunnelStrategy: "Stratégie et exécution média sur l'ensemble du funnel qui stimule la croissance de l'entreprise",
          preciseRecommendations: "Recommandations précises, résultats transformateurs",
          socialMediaContent: "Élevez votre présence en ligne avec nos services complets de gestion des médias sociaux. Nous gérons tout, de la création de contenu à l'engagement communautaire, en veillant à ce que la voix de votre marque résonne sur toutes les plateformes. Notre équipe crée des publications convaincantes, conçoit des visuels accrocheurs et planifie le contenu pour un timing optimal. Nous gérons également les interactions avec votre audience, répondons aux commentaires et optimisons continuellement vos profils pour améliorer la visibilité et l'engagement."
        }
      },
      
    }
  })

export default i18n;

