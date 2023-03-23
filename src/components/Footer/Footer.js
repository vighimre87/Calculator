import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Box component="footer"
        sx={{
            py: 2, 
            backgroundColor: '#3F91BF'
        }}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" textAlign='center'>
                    {'Copyright © Pixel Pionners '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
                
            </Container>
        </Box>
    )
}


export default Footer;