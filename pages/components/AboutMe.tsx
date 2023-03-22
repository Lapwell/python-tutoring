/* eslint-disable react/no-unescaped-entities */
import { createStyles, Title, Text, Image, Stack, CopyButton, Button } from '@mantine/core'
import { IoCheckmarkOutline, IoMailOutline } from 'react-icons/io5'

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
    title: {
        fontSize: 64,
        marginTop: '0rem',
        marginBottom: '0rem',
    },
}))

export default function AboutMe() {
    const {classes} = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner__wrapper}>
                <Image src='photo.png' alt='A snazzy photo' width='40vw' height='80vh' style={{alignSelf: 'end', flexShrink: 0}}/>
                <Stack>
                    <Title order={1} className={classes.title}>Hello, </Title>
                    <Title order={1} className={classes.title}>I'm Byron</Title>
                    <Text maw={500} size='xl' mb='xs'>My service is about helping you learn the basics and fundamentals of coding in a chill, relaxed environment.</Text>
                    <Text maw={500} size='md' mb='xs'>I'm a local, born in the Westshore area. I work at an awesome local tech company that teaches kids programming and STEM while pursuing education and personal goals in life. My passions and interests revolve around computers, science, video games, and technology in general.</Text>
                <CopyButton value={'ac.gnirotutnohtyp@cnoryb'.split('').reverse().join('')}>
                    {({ copied, copy }) => (
                        <Button
                        size="lg"
                        style={{
                            maxWidth: 200
                        }}
                        leftIcon={copied ? <IoCheckmarkOutline /> : <IoMailOutline />}
                        color={copied ? "lime" : "blue"}
                        mt="xl"
                        onClick={copy}
                        >
                        {
                            copied
                            ? "Email copied"
                            : "Get in touch"
                        }
                        </Button>
                    )}
                    </CopyButton>
                </Stack>
            </div>
        </div>
    )
}