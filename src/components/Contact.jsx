import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

export const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
    <motion.h2
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 0.5}}
    className="my-2 text-center text-4xl">Get in Touch</motion.h2>
    <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        className="my-4"> {CONTACT.address} </motion.p>
        <motion.p
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        className="my-4"> {CONTACT.phoneNo} </motion.p>
        <motion.a
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        href="#" className="border-b"> {CONTACT.email} </motion.a>
        <div className=" lg:flex items-center gap-4 pr-6 text-2xl justify-center mt-4 flex">
        <a target='_blank' href="https://github.com/xKrompo" className="transform hover:scale-110">
          <FaGithub />
        </a>
        <a target='_blank' href="https://www.linkedin.com/in/nikolas-wolf-6726b22a8/" className="transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a target='_blank' href="https://www.instagram.com/wolf_nikolas12/" className="transform hover:scale-110">
          <FaInstagram />
        </a>
      </div>
    </div>
    </div>
  )
}
export default Contact;