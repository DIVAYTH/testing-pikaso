import {useGetPostByIdQuery} from "../../posts/api/api-posts";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, Stack, Typography} from "@mui/material";
import {ArrowBack} from '@mui/icons-material';
import {makeStyles} from "@mui/styles";
import {Loader} from "../../../shared/loader/loader";

const useStyles = makeStyles({
    card: {
        margin: "64px auto",
        width: 600,
        padding: "32px",
    },
    containerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "end",
    },
    title: {
        fontWeight: 600,
        fontSize: 18
    },
});

export const PostsPage = () => {
    const {id} = useParams()
    const {data, isFetching} = useGetPostByIdQuery(id)
    const classes = useStyles();
    const navigate = useNavigate()

    if (isFetching) return <Loader height={"100vh"}/>

    return (
        <Card className={classes.card}>
            <Stack spacing={2}>
                <div className={classes.containerHeader}>
                    <Button onClick={() => navigate(-1)}
                            startIcon={<ArrowBack/>}
                            variant={"text"}
                    >
                        Назад
                    </Button>
                </div>
                <Typography className={classes.title}>
                    {`${id}. ${data?.title}`}
                </Typography>
                <Typography>
                    {data?.body}
                </Typography>
            </Stack>
        </Card>
    );
};
