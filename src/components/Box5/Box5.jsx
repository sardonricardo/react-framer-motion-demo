import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; 

export default function Box5 () {

    //new variant declaration  
    const control = useAnimation()

    return (
        <div className="box-container">
            <button onClick={() => {
                control.start({
                    x: 400,
                    transition: { duration: 2 }
                })
            }}>Move Right</button>
            <button onClick={() => {
                control.start({
                    x: 0,
                    transition: { duration: 2 }
                })
            }}>Move Left</button>
            <button onClick={() => {
                control.start({
                    borderRadius: "50%",
                    transition: { duration: 1 }
                })
            }}>Circle</button>
            <button onClick={() => {
                control.start({
                    borderRadius: 0,
                    transition: { duration: 1 }
                })
            }}>Square</button>
            <button onClick={() => {
                control.stop({
                    x: 0,
                    transition: { duration: 1 }
                })
            }}>Stop</button>
            <motion.div //calling framer method "motion"
            className="box"
            animate={control}

            >

            </motion.div>
            
        </div>
    )

}