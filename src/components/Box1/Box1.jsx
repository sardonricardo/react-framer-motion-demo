import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

export default function Box1 () {

    //new state declaration 
    const [isAnimating, setIsAnimating] = useState(false)


    return (
        <div className="box-container">
            <motion.div //calling framer method "motion"
            className="box"
            animate={{
                x: isAnimating ? 200 : 0,
                opacity: isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0, //rotate value
            }}
            initial={{
                opacity: 0.1
            }}
            transition={{
                type: "spring",
                stiffness: 60
            }}
            onClick={() => setIsAnimating(!isAnimating)} //onClick declaration

            >


            </motion.div>
            
        </div>
    )
}


