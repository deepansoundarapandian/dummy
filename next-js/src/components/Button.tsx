import { Button } from "@mui/material"

const CustomButton = ({ props }: { props: String }) => {
    return (
        <Button variant="contained" sx={{ borderRadius: 2, fontWeight:400 }}>{props}</Button>
    )
}

export default CustomButton;