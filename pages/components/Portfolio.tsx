import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner__wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}))

export default function Portfolio() {
    const {classes} = useStyles()
    return (
        <>
        </>
    )
}