import {PropsWithChildren} from 'react';
import {Container} from "@mui/material";

type Props = PropsWithChildren

export const Layout = (props: Props) => {

    return (
        <Container maxWidth="lg">
            {props.children}
        </Container>
    );
};
