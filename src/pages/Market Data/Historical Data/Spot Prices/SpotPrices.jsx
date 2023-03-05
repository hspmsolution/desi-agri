import { Container, Paper } from "@mui/material";
import { format } from "date-fns";
import { useState } from "react";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import PriceTable from "./PriceTable";

function SpotPrices() {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    
    return (
        <>
            <Navbar />
            <div > . <br /> . <br /> . <br /> . </div>
            <Container>
            <Paper className="py-4">
                <PriceTable />
            </Paper>
            </Container>
            <Footer />
        </>
    )
}

export default SpotPrices;