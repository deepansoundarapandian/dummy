import { Button } from "@mui/material"

const CustomButton = ({ props }: any) => {
    return (
        <Button variant="contained" sx={{ borderRadius: 2, fontWeight:400, width:'100%' }}>{props}</Button>
    )
}

export default CustomButton;    