import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { motion} from 'framer-motion';

const iconVariants = (duration) => ({  
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            easy: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
        }
        }
    );

const technologies = [
  { id: 1, Icon: RiReactjsLine, label: "React", color: "text-cyan-400" },
  { id: 2, Icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
  { id: 3, Icon: RiTailwindCssFill, label: "Tailwind CSS", color: "text-blue-400" },
  { id: 4, Icon: RiJavascriptFill, label: "JavaScript", color: "text-yellow-400" },
];

const Technologies = () => {
  return (
    <div  id="tech" className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity: 1 ,y:0} }
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      variants={iconVariants(2.5)}
      animate="animate"
      className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map(({ id, Icon, label, color }) => (
          <div key={id} className="rounded-2xl border-4 border-neutral-800 p-4">
            <Icon className={`text-7xl ${color}`} aria-label={label} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

