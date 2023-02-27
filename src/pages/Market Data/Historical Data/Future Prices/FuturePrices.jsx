import { Container, Typography } from "@mui/material";
import react from "react";
import PriceTable from "./PriceTable";
import SelectInstrument from "./SelectInstrument";

function FuturesPrices() {
    return (
        <Container className="py-4">
            <Typography variant="h6" gutterBottom>
                Choose product
            </Typography>
            <SelectInstrument />
            <PriceTable />
        </Container>
    )
}

export default FuturesPrices;