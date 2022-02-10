import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 

export default function SocialProfile() {
  return (
    <div className='container'>
    <a href="https://github.com/abdul-ameer/food-recipe-reactapp" target="_blank" className='github'>
        <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
    
    <a href="https://linkedin.com/in/abdul-ameer" target="_blank" className='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
    </a>
      
    </div>
  )
}
