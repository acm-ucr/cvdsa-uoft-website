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
      className="mx-auto flex w-[50vw] justify-center text-center md:w-[35vw] md:text-left"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 * delay, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 items-center pb-10 md:grid-cols-3">
        <Link href={link}>
          <motion.div className="hover:scale-105">
            <Image src={image} alt={title} />
          </motion.div>
        </Link>
        <div className="flex flex-col pt-6 md:col-span-2 md:pl-4 md:pt-0">
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
