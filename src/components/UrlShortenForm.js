import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
    background: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
    margin: 20px 0;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px; 
`;

const StyledInput = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const StyledButton = styled.button`
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: #0056b3;
    }
`;

const UrlShortenerForm = () => {
    const [url, setUrl] = useState('');
    const [shortName, setShortName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to backend to shorten URL
    };

    return (
        <FormContainer>
            <h2>Shorten Your URL</h2>
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
        </FormContainer>
    );
}

export default UrlShortenerForm;
