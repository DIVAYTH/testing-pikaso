import {CircularProgress} from "@mui/material";

interface ILoader {
    height: number | string
}

export const Loader = (props: ILoader) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: props.height}}>
            <CircularProgress size={48}/>
        </div>
    );
};
