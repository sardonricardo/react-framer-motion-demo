import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

export default function Box3 () {

    //new variant declaration 
    const boxVariant = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 100,
            transition: {
                delay: 0.5,
                when: "beforeChildren"
            }
        }
    }

    const listVariant = {
        hidden: {
            x: -10,
            
        },
        visible: {
            x: 0, 
            opacity: 1,
            staggerChildren: 0.2
            }
        }

    


    return (
        <div className="box-container">
            <motion.div //calling framer method "motion"
            className="box"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            >

            {[1,2,3].map(box => {
                return (<motion.li  className="boxItem"
                variants={listVariant}
                initial="hidden"
                animate="visible"
                ></motion.li>
                )
            })}
          


            </motion.div>
            
        </div>
    )

}