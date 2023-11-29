import { Grid, useBreakpointValue } from "@chakra-ui/react";
import { Form } from "../Form/Form"
import { Map } from '../Map/Map'
import './contact.scss';

export const Contact = () => {
    const gridTemplateAreas = useBreakpointValue({
        xs: `
            "map"
            "form"
        `,
        sm: `
            "map"
            "form"
        `,
        md: `
            "map"
            "form"
        `,
        lg: `
            "map form"
        `,
        xl: `
            "map form"
        `,
    });

    const gridTemplateColumns = useBreakpointValue({ xs: "100%", sm: "100%", md: "100%", lg: "2fr 1fr", xl: "2fr 1fr"})
    const gridTemplateRows = useBreakpointValue({ xs: "1fr 1frv", sm: "1fr 1fr", md: "1fr 1fr", lg: "100%", xl: "100%"})



    return (
        <Grid 
            id="contact"
            w="100vw"
            className="animate__animated animate__fadeIn"
            templateAreas={ gridTemplateAreas }
            gridTemplateColumns={ gridTemplateColumns }
            gridTemplateRows= { gridTemplateRows}

            gap="2rem"
        >
            <Map />
            
            <Form />
        </Grid>
    )
}
