import { Box, Divider, FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";

const FilterProducts = () => {

    const petColor = ["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"];
    let checkBoxColor = { color: '#CCD1D2', borderRadius: "4px", width: '16px', height: '16px', mr: 2, p: 2, ml: 0.5, };
    
    return (
        <Box
            sx={{
                minWidth: "280px",
                p: 2,
                pt: 0,
                borderRadius: "16px",
                bgcolor: "#fff",
                display: { xs: 'none', md: 'block' },
            }}
        >
            <Typography variant="h3"
                sx={{
                    color: "primary.main",
                    mb: 2,
                }}
            >
                Filter
            </Typography>

            <Typography variant="h5" sx={{ mb: 1 }}>
                Gender
            </Typography>

            <FormGroup>
                <FormControlLabel
                    control={<Checkbox sx={{ ...checkBoxColor }} />}
                    label={
                        <Typography variant="h6" >
                            Male
                        </Typography>
                    }
                />
                <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
                    <Typography variant="h6" >
                        FeMale
                    </Typography>
                } />
            </FormGroup>

            <Divider sx={{ my: 1, borderBottom: '1px solid #EBEEEF', }} />

            <Typography variant="h5" sx={{ mt: 2 }}>
                Color
            </Typography>

            <FormGroup sx={{ mt: 1 }}>
                {
                    petColor.map(color => <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
                        <Typography variant="h6" >
                            {color}
                        </Typography>
                    } />)
                }
            </FormGroup>

            <Divider sx={{ my: 2, borderBottom: '1px solid #EBEEEF', }} />

            <Typography variant="h5" sx={{ mb: 1 }}>
                Price
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography variant="h6"
                    sx={{
                        borderBottom: '1px solid #EBEEEF',
                        px: 2,
                        py: 1,
                        width: "100%",
                    }}
                >
                    Min
                </Typography>
                <Typography variant="h6"
                    sx={{
                        borderBottom: '1px solid #EBEEEF',
                        px: 2,
                        py: 1,
                        width: "100%",
                    }}
                >
                    Max
                </Typography>
            </Box>

            <Divider sx={{ my: 2, borderBottom: '1px solid #EBEEEF', }} />

            <Typography variant="h5" sx={{ mb: 1 }}>
                Breed
            </Typography>

            <FormGroup sx={{ borderBottom: '1px solid #EBEEEF', pb: 1 }}>
                <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
                    <Typography variant="h6" >
                        Small
                    </Typography>
                } />
                <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
                    <Typography variant="h6" >
                        Medium
                    </Typography>
                } />
                <FormControlLabel control={<Checkbox sx={{ ...checkBoxColor }} />} label={
                    <Typography variant="h6" >
                        Large
                    </Typography>
                } />
            </FormGroup>
        </Box>
    )
}

export default FilterProducts;