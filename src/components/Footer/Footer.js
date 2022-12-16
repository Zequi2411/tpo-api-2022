import React from 'react';
import './Footer.css';
import '../../App.css';
import { Button } from '../Button/Button';
import Link from '@mui/material/Link';
import SchoolIcon from '@mui/icons-material/School';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link href='/sign-up'>How it works</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link href="https://www.instagram.com">Instagram</Link>
            <Link href="https://www.facebook.com">Facebook</Link>
            <Link href="https://www.youtube.com">Youtube</Link>
            <Link href="https://www.twitter.com">Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Tusclases.com
              <SchoolIcon></SchoolIcon>
            </Link>
          </div>
          <small class='website-rights'>Tusclases.com © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              href="https://www.facebook.com"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              href="https://www.instagram.com"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              href="https://www.youtube.com"
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              href="https://www.twitter.com"
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link github'
              href="https://github.com/Gabirojas1/tpo-api-2022.git"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;