import Body from "./Body";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function LandingPage() {

  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div>
    
      <motion.div
       initial="hidden"
       animate="visible"
       variants={linkVariants}
      >
      <Body />
      <Footer />
      </motion.div>
    </div>
  )
}