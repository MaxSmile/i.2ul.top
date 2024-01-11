import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
// #FF5 and #08F
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
    margin: 20px 0;
`;

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;s

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

function UrlShortenerForm() {
    const [url, setUrl] = useState('');
    const [shortName, setShortName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to backend to shorten URL
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                placeholder="Enter the URL you want to shorten"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <StyledInput
                type="text"
                placeholder="Enter your preferred short name"
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
            />
            <StyledButton type="submit">Shorten URL</StyledButton>
        </StyledForm>
    );
}

export default UrlShortenerForm;
