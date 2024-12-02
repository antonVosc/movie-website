import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack component="footer" sx={{ paddingTop: 4, paddingBottom: 4, flexDirection: { sm: 'row' }, justifyContent: { sm: 'space-between' }, alignItems: { sm: 'center' }, marginTop: 'auto', }}>
      <Stack>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} &laquo;Cineton&raquo; 18+ <br />
          This website was created for educational purposes only. <br />
          All Rights Reserved.
        </Typography>
        <Typography variant="h4" color="primary.main">
          cineton
        </Typography>
      </Stack>
    </Stack>
  );
}
