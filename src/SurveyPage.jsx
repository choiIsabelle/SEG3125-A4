import React, { useState } from 'react';
import styled from 'styled-components';

const accentColor = '#ff6347';

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
`;

const Title = styled.h1`
    color: #333;
`;

const Question = styled.div`
    margin: 15px 0 5px 0;
    font-size: 18px;
    color: #555;
    align-self: flex-start;
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
        outline: none;
        border-color: ${accentColor};
    }
`;

const Select = styled.select`
    margin-bottom: 15px;
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
        outline: none;
        border-color: ${accentColor};
    }
`;

const TextArea = styled.textarea`
    margin-bottom: 15px;
    padding: 10px;
    width: 300px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
        outline: none;
        border-color: ${accentColor};
    }
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${accentColor};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #ff4500;
    }
`;

const SurveyPage = () => {
    const [formData, setFormData] = useState({
        rating: '',
        easeOfUse: '',
        productVariety: '',
        shippingSatisfaction: '',
        recommend: '',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Survey Submitted:', formData);
        alert('Thank you for your feedback!');
    };

    return (
        <SurveyContainer>
            <Title>ReWear Website Experience Survey</Title>
            <form onSubmit={handleSubmit}>
                <Question>1. How would you rate your overall experience? (1-5)</Question>
                <Input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                />

                <Question>2. How easy was it to navigate the website? (1-5)</Question>
                <Input
                    type="range"
                    name="easeOfUse"
                    min="1"
                    max="5"
                    value={formData.easeOfUse}
                    onChange={handleChange}
                    required
                />
                <div>Selected: {formData.easeOfUse || 'None'}</div>


                <Question>3. How would you rate our product variety?</Question>
                <Select
                    name="productVariety"
                    value={formData.productVariety}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select an option</option>
                    {['Excellent', 'Good', 'Average', 'Poor'].map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>

                <Question>4. Were you satisfied with the shipping/delivery process?</Question>
                <div>
                    {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                name="shippingSatisfaction"
                                value={option}
                                checked={formData.shippingSatisfaction === option}
                                onChange={handleChange}
                                required
                            />
                            {option}
                        </label>
                    ))}
                </div>

                <Question>5. Would you recommend our website to others?</Question>
                <Select
                    name="recommend"
                    value={formData.recommend}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Select an option</option>
                    {['Definitely', 'Probably', 'Not Sure', 'Probably Not', 'Definitely Not'].map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>

                <Question>6. Any additional comments or suggestions?</Question>
                <TextArea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                />
                <Question>Thank you for your time!</Question>
                <Button type="submit">Submit</Button>
            </form>
        </SurveyContainer>
    );
};

export default SurveyPage;
