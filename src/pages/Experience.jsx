import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Timeline from '@mui/lab/Timeline';
import TimelineItem,{ timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Experience(){
    return(
        <Container sx={{mt:15}}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">Experience</Typography>
                <Typography variant="h6" sx={{mt:2, maxWidth:600, mx:"auto", fontWeight:"bold"}} color="text.secondary" textAlign="center">My professional and learning journey so far.</Typography>            
            <Timeline sx={{[`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },mt:5}}>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" fontWeight="bold">Software Developer</Typography>
                        <Typography variant="subtitle2" fontWeight="bold">Independent Projects</Typography>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{mb:1}}>March 2025 - Present</Typography>
                            <ul>
                                <li>Built and shipped multiple full stack applications with React frontends and Node.js/Express backends, integrating SQLite and Firebase for persistent data storage.</li>
                                <li>Developed strong foundations in Data Structures and Algorithms in C++, with consistent problem solving practice.</li>
                                <li>Designed and architected projects independently from data modeling to UI simulating real engineering ownership.</li>
                                <li>Actively improving code quality, application structure, and debugging skills through project based learning.</li>
                            </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" fontWeight="bold">Mercedes Benz Research and Development India </Typography>
                        <Typography variant="subtitle2" fontWeight="bold">Diagnostic Engineer – Automotive Aftersales </Typography>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{mb:1}}>August 2022 - February 2025</Typography>
                            <ul>
                                <li>Contributed to software-driven diagnostic systems for seat safety modules and interior lighting components within the Body & Interior domain.</li>
                                <li>Designed and maintained diagnostic logic and troubleshooting workflows using XENTRY authoring tools, enabling structured fault detection and isolation.</li>
                                <li>Investigated and resolved complex field issues through root cause analysis by analyzing fault codes, control unit behavior, and system-level interactions.</li>
                                <li>Executed software flashing and configuration updates on vehicle control units, ensuring system stability and correct functionality after updates.</li>
                                <li>Collaborated with cross-functional teams including development, testing, and service teams to improve system reliability and enhance the technician diagnostic experience.</li>
                            </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    )
}

export default Experience;