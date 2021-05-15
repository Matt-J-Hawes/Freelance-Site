import React from 'react';

import { AiOutlineMobile } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { FaHandshake, FaRegKeyboard } from 'react-icons/fa';
import { BiCustomize } from 'react-icons/bi';


const Services = [
    {
        icon: <AiOutlineMobile className = 'service-icon' />,
        desc: 'Responsive Design.',
        key: 0
    },
    {
        icon: <FaRegKeyboard className = 'service-icon' />,
        desc: 'Excellent Accessibility.',
        key: 1
    },
    {
        icon: <RiComputerLine className = 'service-icon' />,
        desc: 'Hosting & Domain.',
        key: 2
    },
    {
        icon: <FaHandshake  className = 'service-icon'/>,
        desc: 'Continued Support.',
        key: 3
    },
    {
        icon: <BiCustomize className = 'service-icon' />,
        desc: 'Fully Customisable.',
        key: 4
    },
];

export default Services