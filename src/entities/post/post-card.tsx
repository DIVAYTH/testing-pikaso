import {IPost} from "../../widgets/posts/types/posts";
import {Button, Card, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";
import {POSTS_PATH} from "../../app/providers/router/const";


const BUTTON_W = 120

const useStyles = makeStyles({
    card: {
        whiteSpace: "nowrap",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        margin: "16px 0",
        padding: "32px"
    },
    containerText: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        whiteSpace: "nowrap",
        width: `calc(100% - ${BUTTON_W}px)`
    },
    title: {
        fontWeight: 600,
        fontSize: 18
    },
    description: {
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
});

export const PostCard = (props: IPost) => {
    const classes = useStyles();
    const navigate = useNavigate()

    const {id, title, body} = props

    return (
        <Card className={classes.card}>
            <div className={classes.containerText}>
                <Typography className={classes.title}>
                    {`${id}. ${title}`}
                </Typography>
                <Typography className={classes.description}>
                    {body}
                </Typography>
            </div>
            <Button onClick={() => navigate(`${POSTS_PATH}/${id}`)}
                    style={{width: BUTTON_W}}
                    variant={"contained"}>
                Просмотр
            </Button>
        </Card>
    );
};
