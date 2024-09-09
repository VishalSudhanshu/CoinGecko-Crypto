import React, { useState } from 'react'
import parse from 'html-react-parser';

const ExpandTextButton = ({ text }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const words = text.split(' ');
    const maxWords = 40;

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <p>
                {isExpanded ? parse(text) : words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '')}
            </p>

            {/* Button to toggle text view */}
            {words.length > maxWords && (
                <button onClick={toggleExpanded} className='text-yellow-400'>
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            )}
        </>
    )
}

export default ExpandTextButton