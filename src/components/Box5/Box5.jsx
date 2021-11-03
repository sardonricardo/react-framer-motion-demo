import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; 

export default function Box5 () {

    //new variant declaration  
    const control = useAnimation()

    return (
        <div className="box-container">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <motion.div //calling framer method "motion"
            className="box"

            >

            </motion.div>
            
        </div>
    )

}