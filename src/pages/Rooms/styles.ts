import styled from 'styled-components';

export const Header = styled.header`
    padding: 24px;
    border-bottom: 1px solid ${props => props.theme.colors.highlighted};

    .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > img {
            max-height: 45px;
        }

        > div {
            display: flex;
            gap: 16px;

            button {
                height: 40px;
            }
        }
    }
`;

export const Main = styled.main`
    max-width: 800px;
    margin: 0 auto;

    .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: center;

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            color: ${props => props.theme.colors.button_background};
        }

        span {
            margin-left: 16px;
            background: ${props => props.theme.colors.alert_mgs};
            border-radius: 9999px;
            padding: 8px 16px;
            color: ${props => props.theme.colors.input_text};
            font-weight: 500;
            font-size: 14px;
        }
    }
`;

export const Form = styled.form`
    textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: ${props => props.theme.colors.input_background};
        resize: vertical;
        min-height: 130px;
    }

    .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:  16px;

        .user-info {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }

            span {
                margin-left: 8px;
                color: ${props => props.theme.colors.text_title};
                font-weight: 500;
                font-size: 14px;
            }
        }

        > span {
            font-size:  14px;
            color: ${props => props.theme.colors.button_background};
            font-weight: 500;

            button {
                background: transparent;
                border: 0;
                color: ${props => props.theme.colors.secundary};
                text-decoration: underline;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }
`;

export const QuestionList = styled.div`
    margin-top: 32px;
`;