import React from 'react';
import './AboutMe.scss';
import { useEffect } from 'react';
import createTyped from '../../utils/createTyped';

export default function AboutMe() {
  useEffect(() => {
    const typed = createTyped(
      '#about-me-article',
      30,
      [
        `
     Design has always been my hobby. Photoshop was my source of fun
    since I was 12 years old, and it still is to this day. ^500 
    Before I got into coding, I worked as a content writer, where I learned a lot about 
    SEO best practices. And had greatly improved my writing skills. ^500
    I fell in love with web development quite later on in my life. 
    And now I can't stop coding! ^1500
    I am making this portfolio website not just to show
    what I have done, but also to share my journey, write about the things I learned 
    through my own struggles. ^500 
    The goal is to share knoweldge about coding and 
    help you out who might be going through similar issues. And if you think I'm doing something
    wrong, the comment section will be open.
    `,
      ],
      100
    );

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='about-me container'>
      <p className='about-me__article' id='about-me-article'></p>
    </div>
  );
}
