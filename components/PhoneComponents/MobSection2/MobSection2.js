import React from 'react'
import { Container, FlexContainer } from '../../../sharedStyled'

function MobSection2() {
    return (
        <Container b='1px solid red' h="100vh" >
            <FlexContainer b='1px solid red' h='100%' justify='center' align="center" >
                <Container maxW="90%" b='1px solid red' p="1rem" >
                    <Container fs="3.25rem" my='1rem' >Why Coexistense?</Container>
                    <Container fs="1.5rem" >
                        We are living in a time when the Earth is losing wildlife and wild places faster than any time in the last 3 million years. If we maintain this path, wild species and their unique habitats will disappear forever. Currently, wildlife in conflict with humans are often killed or their habitat destroyed in an attempt to prevent the conflicts or simply because communities don’t have the resources to stop it. It is the primary threat to wildlife on a global scale
                    </Container>
                </Container>
            </FlexContainer>
        </Container>
    )
}

export default MobSection2