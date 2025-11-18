import { Box, Typography, Container, Button } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

const HeroSection = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: '100px', paddingLeft: '40px' }}>
            <Box>
                <Typography variant="h1" sx={{ textTransform: 'capitalize', color: 'primary.main' }}>One more friend</Typography>
                <Typography variant="h2" sx={{ textTransform: 'capitalize', color: 'primary.main' }}>Thousands more fun!</Typography>
                <Typography variant="subtitle2" sx={{ color: '#242B33', mt: 2 }}>
                    Having a pet means you have more joy, a new friend, a happy <br /> person who will always be with you to have fun. We have 200+ <br /> different pets that can meet your needs!</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button variant="outlined" sx={{ display: 'flex', gap: 1 }}>
                    View Intro <PlayCircleFilledWhiteOutlinedIcon />
                </Button>
                <Button variant="contained">
                    Explore Now
                </Button>
            </Box>
        </Container>

    )
}

export default HeroSection;