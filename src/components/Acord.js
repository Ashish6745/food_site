import { useState } from "react";

const accordionStyles = {
    maxWidth: '1331px',
    paddingLeft: '17px',
  paddingTop:'20px'
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "5px",
  background: "#000000",
  color:"#ffffff"
};

const accordionContentStyles = {
  padding: "25px",
  background: "#1D5D9B",
  color:'#ffffff'
};

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div>
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-caret-down"></i>}</div>
      </div>
      {isActiveSection && (
        <div style={accordionContentStyles}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={accordionStyles}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;