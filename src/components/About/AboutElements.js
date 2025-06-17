import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
    margin-top: 5rem;
`;

export const SectionTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
`;

export const SectionSubtitle = styled.div`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #666;
`;

export const AboutContainer = styled.div`
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const AboutImage = styled.img`
    max-width: 120px;
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        margin-bottom: 0;
    }
`;

export const AboutContent = styled.div`
    flex: 1;
`;

export const AboutDescription = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
    margin-bottom: 1.5rem;
`;

export const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 992px) {
        justify-content: flex-start;
    }
`;

export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100px;
    min-width: 100px;
    margin-bottom: 2rem;
    margin-right: 1rem;
`;

export const TechImg = styled.img`
    height: 40px;
    width: 40px;
    padding-bottom: 5px;
`;

export const TechName = styled.div`
    font-size: 14px;
    color: #333;
`;
