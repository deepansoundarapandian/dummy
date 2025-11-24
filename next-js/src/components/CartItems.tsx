import {
    Box,
    Typography,
    Card,
    IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { userData } from "@/context/UserData";
import Image from "next/image";

const CartItems = ({item}:{item: any}) => {

    const { setCart } = userData();

    const updateQty = (id: any, delta: any) => {
        setCart((prev: any) =>
            prev.map((item: any) =>
                item.id === id
                    ? { ...item, qty: Math.max(1, item.qty + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: any) => {
        setCart((prev: any) => prev.filter((item: any) => item.id !== id));
    };
    
    return (
        <Card
            key={item.id}
            sx={{
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 3,
                boxShadow: "none",

            }}
        >
            {/* PRODUCT IMAGE */}
            <Image
                src={item.img}
                width={145}
                height={145}
                alt={item.title}
                style={{ borderRadius: 8 }}
            />

            {/* PRODUCT DETAILS */}
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 16, color: 'black' }}>
                    {item.title}
                </Typography>

                <Typography sx={{ fontSize: 13, color: "#667479", mt: 1 }}>
                    Product: {item.productType} &nbsp;•&nbsp; Size: {item.size}
                </Typography>

                <Typography sx={{ fontWeight: 600, mt: 1, color: 'black' }}>
                    ${item.price}.00
                </Typography>

                {/* QUANTITY CONTROL */}
                <Box sx={{ display: "flex", gap: 1, mt: 1, width: 'fit-content', p: 1, borderRadius: '8px', boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                    <IconButton
                        size="small"
                        sx={{
                            borderRadius: "6px", bgcolor: '#EBEEEF', "&:hover": {
                                bgcolor: '#EBEEEF'
                            }
                        }}
                        onClick={() => updateQty(item.id, -1)}
                    >
                        <RemoveIcon fontSize="small" />
                    </IconButton>

                    <Box
                        sx={{
                            width: 35,
                            height: 32,

                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: 500,
                            color: 'black'
                        }}
                    >
                        {item.qty}
                    </Box>

                    <IconButton
                        size="small"
                        sx={{
                            borderRadius: "6px", bgcolor: 'primary.main', color: 'white', "&:hover": {
                                bgcolor: 'primary.main'
                            }
                        }}
                        onClick={() => updateQty(item.id, 1)}
                    >
                        <AddIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* DELETE BUTTON */}
            <IconButton onClick={() => removeItem(item.id)} sx={{ alignSelf: 'self-start' }}>
                <DeleteOutlineIcon sx={{ color: "#8C8C8C" }} />
            </IconButton>
        </Card>
    )
}

export default CartItems