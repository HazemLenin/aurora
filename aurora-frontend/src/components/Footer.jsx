import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return <footer className="mt-12 py-10 bg-black text-center text-white">
            Made with <FontAwesomeIcon icon={faHeart} /> by Hazem Lenin ©
        </footer>;
}

export default Footer;
