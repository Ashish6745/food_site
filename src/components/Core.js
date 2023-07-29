import React from 'react'
import Section1 from './Section1'
import Cards from './Cards'
import Fields from './Fields'
import Accordion from './Acord'
import Inputfields from './Inputfields'
const accordionData = [
  {
    title: " User Reviews",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur. Nunc non molestie nunc, venenatis maximus ante. Vestibulum mattis faucibus scelerisque. Nulla tempus semper congue. Phasellus maximus iaculis eleifend. Praesent elementum risus augue, eu viverra eros pulvinar sagittis. Aliquam ullamcorper vel metus at ultricies. Phasellus sollicitudin nibh lacus, nec malesuada felis dapibus eu. Suspendisse ut condimentum felis, vitae accumsan nunc. Nunc non bibendum diam, eget molestie metus. Nam orci sem, porttitor sed libero ut, rutrum tristique nulla. Praesent et odio posuere diam ultricies luctus nec eu nibh. Cras sit amet sagittis erat. Nulla viverra rhoncus magna, vitae aliquet ex consectetur at.
    `,
  },

];
function Core() {
  return (
    <div className='flex'>
        <div className='  w-1/2 flex-1 h-screen '>
        <Section1  />
        <Cards />
        <Fields />
        <Inputfields />
         {/* accordion */}
         <Accordion sections={accordionData} />
         
         <Fields />
         {/* accordion */}
         <Accordion sections={accordionData} />
        
         </div>
    
    </div>
  )
}

export default Core

