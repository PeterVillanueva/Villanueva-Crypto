'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto
        flex flex-col gap-8`}
    >
      <div className="flex items-center justify-between
            flex-wrap gap-5"
      >
        <h4 className="font-bold md:text-[64px]
          text-[44px] text-white"
        >New Adventure Awaits
        </h4>
        <a href="https://petervillanueva.github.io/peter-react-portfolio/" type="button" className="flex
          items-center h-fit py-4 px-6 bg-[#25618B]
          rounded-[32px] gap-[12px]"
        >
          <img src="headset.svg" alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-semibold text-[16px] text-white">
            Start Now
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white
        opacity-10"
        />
      </div>
      <div className="flex items-center
        justify-between flex-wrap gap-4"
      >
        <h4 className="font-extrabold text-[h-[24px]
          text-white"
        >Metaverse
        </h4>
        <p className="font-semibold text-[14px]
          text-white opacity-50"
        >
          Copyright © 2024 - 2025 Peter Villanueva. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px]
                object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
    footer
  </motion.footer>
);

export default Footer;
