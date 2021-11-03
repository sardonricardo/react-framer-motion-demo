import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

export default function Box2 () {

    //new state declaration 
    const [isAnimating, setIsAnimating] = useState(false)


    return (
        <div className="box-container">
            <motion.div //calling framer method "motion"
            className="box"
            drag
            dragConstraints={{
                right: 20,
                left: -20,
                top: 5,
                bottom: 5
            }}
            whileHover={{
                scale: 1.1
            }}
            whileFocus={{

            }}
            whileTap={{
                scale: 0.9
            }}

         >


            </motion.div>
            
        </div>
    )
}


