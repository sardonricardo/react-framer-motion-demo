import React from 'react';
import { motion } from 'framer-motion'; 

export default function Box1 () {
    return (
        <div className="box-container">
            <motion.div //calling framer method "motion"
            className="box"
            animate={{
                x: 200,
                opacity: 1
            }}
            initial={{
                opacity: 0.1
            }}
            transition={{
                type: "spring",
                stiffness: 60
            }}

            >


            </motion.div>
            
        </div>
    )
}


