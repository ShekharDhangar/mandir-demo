import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Container,  } from '../../../sharedStyled';
import { motion } from 'framer-motion';
import { AccordionSection, Dropdown, Wrap } from './styled.accordion';
const Data = [
    {
        question: 'Some Dummy Title here',
        answer: 'Some Dummy Context here'
    },
    {
        question: 'Some Dummy Title here',
        answer: 'Some Dummy Context here'
    },
    {
        question: 'Some Dummy Title here',
        answer: 'Some Dummy Context here'
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
                                <Wrap onClick={() => toggle(index)} key={index}
                                    as={motion.div}
                                    initial='collapsed'
                                    animate='open'
                                    exit='collapsed'
                                    variants={{
                                        open: { opacity: 1, height: 'auto', },
                                        collapsed: { opacity: 0, height: 0, }
                                    }}
                                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown as={motion.div} variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                        transition={{ duration: 0.8 }} >
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