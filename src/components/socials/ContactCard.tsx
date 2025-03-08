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

const ContactCard: React.FC<BlurbProps> = ({
  title,
  description,
  image,
  link,
  delay,
}) => {
  return (
    <motion.div
      className="mx-[5vw] flex w-[35vw] justify-center"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 * delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="grid grid-cols-3 items-center">
        <Link href={link}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image src={image} alt={title} />
          </motion.div>
        </Link>
        <div className="col-span-2 flex flex-col pl-4">
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
