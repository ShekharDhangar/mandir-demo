import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Container } from '../../../sharedStyled';
import { AccordionSection, Dropdown, Wrap } from './styled.accordion';
const Data = [
    {
        question: 'What do you call a dog magician?',
        answer: 'A labracadabrador.'
    },
    {
        question: 'What do you call a funny mountain?',
        answer: 'Hill-arious.'
    },
    {
        question: 'What did the astronaut say ?',
        answer: 'I Apollo-gize.'
    }
];

const Accordion = ({ nextFunction }) => {
    const [clicked, setClicked] = useState(0);
    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
        nextFunction(index);
    };

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <AccordionSection>
                {/* position="absolute" top="30%" */}
                <Container position="absolute" >
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;