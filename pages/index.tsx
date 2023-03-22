import { createStyles, Stack } from "@mantine/core";
import AboutMe from "./components/AboutMe";
import Schedule from "./components/Schedule";
import Portfolio from "./components/Portfolio";

const useStyles = createStyles((theme) => ({
  child: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
}))

export default function Home() {
  const {classes} = useStyles()
  return (
  <Stack styles={{width: '100%', height: '100%'}}>
    <AboutMe/>
    <Schedule/>
    <Portfolio/>
  </Stack>
  )
}