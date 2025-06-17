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

export const QualificationContainer = styled.div`
    max-width: 768px;
    margin: 0 auto;
`;

export const QualificationTab = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
`;

export const QualificationContent = styled.div`
    display: block;
`;

export const QualificationData = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;

    /* Left side content aligned to the right */
    & > div:nth-of-type(1) {
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    /* Middle column: line and round stays centered */

    /* Right side content aligned to the left */
    & > div:nth-of-type(3) {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const QualificationTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
`;

export const QualificationSubtitle = styled.span`
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
`;

export const QualificationCalendar = styled.div`
    font-size: 0.8rem;
    color: #555;
`;

export const QualificationRound = styled.span`
    width: 13px;
    height: 13px;
    background-color: #333;
    border-radius: 50%;
    display: inline-block;
`;

export const QualificationLine = styled.span`
    width: 1px;
    height: 100%;
    background-color: #333;
    display: block;
    transform: translate(6px, -7px);
`;
