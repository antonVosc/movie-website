import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Layout() {
  return (
    <Container fixed>
        <Navbar />
        <Outlet />
        <Footer />
    </Container>
  );
}