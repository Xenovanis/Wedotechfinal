import React, { useState, useRef } from "react";
import SectionList from './SectionList';
import SectionContent from './SectionContent';

const sections = [
  { id: 1, title: "Strategy & Planning", heading:"A framework that meets business needs and drives sustainable growth", content: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand’s voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement." },
  { id: 2, title: "Social Media Management", heading:"Full-funnel media strategy and execution that drives business growth", content: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand’s voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement." },
  { id: 3, title: "Social Media Advertsing",heading:"Precise recommendations, transformative results",  content: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand’s voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement." },
  { id: 4, title: "Influencer Marketing", heading:"A framework that meets business needs and drives sustainable growth", content: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand’s voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement." },
  { id: 5, title: "Website Development and Designing",heading:"A framework that meets business needs and drives sustainable growth",  content: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand’s voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement." },
  { id: 6, title: "Training and Consulting", heading:"A framework that meets business needs and drives sustainable growth", content: "Elevate your online presence with our comprehensive social media management services. We handle everything from content creation to community engagement, ensuring your brand’s voice resonates across platforms. Our team crafts compelling posts, designs eye-catching visuals, and schedules content for optimal timing. We also manage interactions with your audience, respond to comments, and continuously optimize your profiles to enhance visibility and engagement." },

];

const ContentSection = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  // Create ref for the content section container
  const contentRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    
    // Smooth scroll to the content area
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto mt-20  ">
      {/* Section list */}
      <SectionList
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      
      {/* Content area */}
      <div className=" mt-24 lg:ml-16 w-full lg:w-2/3" ref={contentRef}>
        {/* Only display the content for the active section */}
        <SectionContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default ContentSection;
