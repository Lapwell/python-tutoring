import { createStyles } from "@mantine/core"
import { InlineWidget } from 'react-calendly'
import React from 'react'

const useStyles = createStyles((theme) => ({
    wrapper: {
        width: '100%',
        padding: '64px',
        height: '100vh',
        display: 'flex',
        alignItems: 'top',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inner__stack: {
        paddingLeft: '20px',
    }
}))

export default function Schedule() {
    const { classes } = useStyles()
    return (
        <div className={classes.wrapper}>
            <InlineWidget url="https://calendly.com/byronrwc/code-tutoring"
                styles={{
                    height: '100%',
                }}
                pageSettings={{
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    hideGdprBanner: true
                }}
                utm={{
                    utmCampaign: 'Coding Tutor',
                    utmContent: 'Scheduling Sessions',
                    utmMedium: 'Inline Scheduling Widget',
                    utmSource: 'pythontutoring.ca',
                    utmTerm: 'Indefinite'
                }}
            />
        </div>
    )
}