import {Link, Outlet} from '@tanstack/react-router';
import styles from './AppLayout.module.css';
import { Notebook, Activity, User } from 'lucide-react';
import React from 'react';

const AppLayout: React.FC = () => {
    return <div className={styles.layout}>
        <nav className={styles.menu}>
            <Link to='/'>
                <img src='/appicon.png' alt='My Saas prototype' className={styles.appicon}></img>
            </Link>
            <Link to='/app/notes'>
                <Notebook/>Notes
            </Link>
            <Link to='/app/reports'>
                <Activity />Reports
            </Link>
            <Link to='/app/users'>
                <User />Users
            </Link>
        </nav>
        <main>
            <header className={styles.header}>
                <Link to='/'>olegs@example.com</Link>
            </header>
            <Outlet />
        </main>
    </div>
};

export default AppLayout;

