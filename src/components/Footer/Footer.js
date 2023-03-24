import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <footer>
            <Box component="footer"
                sx={{
                    py: 2, 
                    backgroundColor: '#3F91BF'
                }}>
                <Container maxWidth="sm">
                    <Typography variant="body2" color="#f5f5f5" textAlign='center'>
                        {'Copyright © Pixel Pionners '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                    
                </Container>
            </Box>
        </footer>
        
    )
}


export default Footer;