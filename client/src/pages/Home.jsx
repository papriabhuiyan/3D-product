import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store'


//added github publish test comment
const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain'/>
                </motion.header>
                <motion.header>
                    <p> Testing github publish from work computer to work on this at work during work hours</p>
                </motion.header>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home