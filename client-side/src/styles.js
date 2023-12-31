import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: theme.spacing(5)
    },
    tf: {
        textAlign: 'center'
    }
}));