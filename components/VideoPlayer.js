import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";
import { Container, FlexContainer } from "../sharedStyled";
import { IoClose } from "react-icons/io";
import { MdClose } from 'react-icons/md'
import { useState, useEffect } from 'react';

const player = {
    position: "absolute",
    top: 0,
    left: 0,
    maxHeight: '93vh',
}
const videoWrapper = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
}

export function SingleVideoPlayer({ setVideoPlayer }) {
    const [isWindow, setIsWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsWindow(true);
        }
    }, []);

    return (
        isWindow && (
            <div style={videoWrapper} >
                <FlexContainer align="flex-end" height="100%" w="100%" justify="end" pr='2rem' >
                    <Container b="none" bgc="transparent" cursor="pointer" h="5vh" onClick={() => setVideoPlayer(false)} as="button" color="red" >
                        <MdClose size="35" />
                    </Container>
                </FlexContainer>
                <Container position="relative" pt="56.25%"  >
                    <ReactPlayer
                        style={player}
                        width="100%"
                        height="100%"
                        // playing={true}
                        url="https://player.vimeo.com/video/732756644?h=550b9b432b"
                        controls={true}
                    />
                </Container>
            </div>
        )

    );
}