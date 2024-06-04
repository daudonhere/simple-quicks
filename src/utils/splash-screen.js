import React from 'react';
import styles from '@/styles/light.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

function SplashScreen() {

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
    };

    return (
        <Box className={styles.loadingAreaStyle}>
            <Box className={styles.loadingContentStyle}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    <Typography className={styles.loadingTextStyle}>Simple</Typography>
                    <Typography className={styles.loadingTextStyle}>Quicks</Typography>
                </motion.div>
            </Box>
        </Box>
    );
};

export default SplashScreen;
