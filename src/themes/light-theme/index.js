import React from 'react';
import styles from '@/styles/light.module.css';
import { connect } from 'react-redux';
import Drawer from '@/themes/light-theme/components/drawer';

function Index() {
    
    return (
        <main className={styles.main}>
            <Drawer/>
        </main>
    )
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);