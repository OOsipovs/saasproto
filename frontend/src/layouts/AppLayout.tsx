import {Link, Outlet} from '@tanstack/react-router';
import styles from './AppLayout.module.css';
import { Notebook, Activity, User } from 'lucide-react';
import React from 'react';

const AppLayout: React.FC = () => {
    return <div className={styles.layout}>
        <h1>Notes</h1>
    </div>
};

export default AppLayout;

