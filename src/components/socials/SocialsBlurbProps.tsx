"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface BlurbProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  delay: number;
}

const SocialBlurb: React.FC<BlurbProps> = ({
  title,
  description,
  image,
  link,
  delay,
}) => {
  return (
    <motion.div
      className="mx-[5vw] flex w-[35vw] justify-center"
      whileInView={{ opacity: ["50%", "100%"], y: ["50%", "0%"] }}
      transition={{ duration: 1, delay: 0.3 * delay }}
    >
      <Link href={link} className="flex items-center">
        <Image src={image} alt={title} className="aspect-square w-[10vw]" />
        <div className="m-[1vw]">
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default SocialBlurb;
