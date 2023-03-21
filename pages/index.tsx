import { ScrollArea, Stack } from "@mantine/core";
import AboutMe from "./components/AboutMe";
import Schedule from "./components/Schedule";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return(
  <Stack styles={{width:'100%', height:'100%'}}>
    <AboutMe/>
    <Schedule/>
    <Portfolio/>
  </Stack>
  )
}
