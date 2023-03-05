import { Box, Container, Paper, Typography } from "@mui/material";
import react from "react";
import Navbar from "../../../../components/navbar/Navbar";
import PriceTable from "./PriceTable";
import SelectInstrument from "./SelectInstrument";

function FuturesPrices() {
    return (
        <>
            <Navbar />
            <div > . <br /> . <br /> . <br /> . </div>
            <Container>
                <Paper className="py-4">
                    <PriceTable />
                </Paper>
            </Container>
        </>
    )
}

export default FuturesPrices;