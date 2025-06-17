import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
    margin: 5rem 0;
    .BigCard {
        background: #fff;
        border-radius: 12px;
        padding: 2.5rem 3rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .SectionTitle {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 2rem;
        color: #151418;
    }
`;

export const Email = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    span {
        font-size: 1.25rem;
        font-weight: 500;
        color: #151418;
        user-select: all;
    }

    .btn {
        padding: 0.6rem 1.4rem;
        font-weight: 600;
        border-radius: 8px;
        font-size: 1rem;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    @media (min-width: 576px) {
        span {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 992px) {
        span {
            font-size: 1.75rem;
        }
    }
`;
