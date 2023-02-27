import { Box, Container, Paper, Typography } from "@mui/material";
import react from "react";
import PriceTable from "./PriceTable";
import SelectInstrument from "./SelectInstrument";

function FuturesPrices() {
    return (
        <Container>
        <Paper className="py-4">
            {/* <SelectInstrument /> */}
            <PriceTable />
        </Paper>
        </Container>
    )
}

export default FuturesPrices;