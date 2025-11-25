import {
    Box,
    Typography,
    Card,
    Button,
} from "@mui/material";
import { userData } from "@/context/UserData";

const CartSummary = () => {

    const { cart } = userData();

       // CALCULATIONS 
    const subtotal = cart.reduce((sum: number, i: any) => sum + i.qty * i.price, 0);
    const handling = 5;
    const shipping = 0;
    const total = subtotal + handling + shipping;
    
    return (
        <Card
            sx={{
                width: '100%',
                p: 3,
                borderRadius: "16px",
                border: "1px solid #EDEDED",
                height: "fit-content",

            }}
        >
            <Typography sx={{ fontSize: 24, fontWeight: 400, mb: 2, color: '#00171F' }}>
                Order Summary
            </Typography>

            <SummaryRow label={`Subtotal (${cart.length} items)`} value={`$${subtotal}.00`} />
            <SummaryRow label="Handling Charge" value={`$${handling}.00`} />
            <SummaryRow label="Shipping Fee" value={`$${shipping}.00`} />

            <Box
                sx={{
                    mt: 2,
                    py: 1,
                    paddingBottom: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 18,
                    fontWeight: 700,
                    borderTop: "1px solid #E6E6E6",
                }}
            >
                <Typography variant="h4" sx={{ color: '#191A19', fontWeight: 400 }}>Total</Typography>
                <Typography variant="h4" sx={{ color: '#191A19', fontWeight: 400 }}>${total}.00</Typography>
            </Box>

            <Typography variant="caption" sx={{ color: '#A3A3A3', fontSize: '12px' }}>Inclusive of all taxes</Typography>

            <Button
                variant="contained"
                fullWidth
                sx={{
                    mt: 2,
                    height: 45,
                    bgcolor: "#003459",
                    fontSize: 16,
                    textTransform: "none",
                    borderRadius: "8px",
                }}
            >
                Checkout
            </Button>
        </Card>
    )
}

export default CartSummary;

function SummaryRow({ label, value }: { label: any, value: any }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#667479",
                fontSize: 15,
                my: 0.8,
            }}
        >
            <span>{label}</span>
            <span>{value}</span>
        </Box>
    );
}
