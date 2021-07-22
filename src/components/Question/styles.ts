import styled from "styled-components";

export const QuestionContainer = styled.div`

    background: ${props => props.theme.colors.text};
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    padding: 24px;

    & + .question {
        margin-top: 8px;
    }

    &.highlighted {
        background:${props => props.theme.colors.background};
        border: 1px solid ${props => props.theme.colors.secundary};

        footer .user-info span {
            color: ${props => props.theme.colors.primary};
        }
    }

    &.answered {
        background: ${props => props.theme.colors.text};
    }

    p {
        color: ${props => props.theme.colors.secundary};
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

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
                color: #737380;
                font-size: 14px;
            }
        }

        > div {
            display: flex;
            gap: 16px;
        }

        button {
            border: 0;
            background: transparent;
            cursor: pointer;
            transition: filter 0.2s;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: ${props => props.theme.colors.text};
                gap: 8px;

                &.liked {
                    color: ${props => props.theme.colors.secundary};

                    svg path {
                        stroke: ${props => props.theme.colors.secundary};
                    }
                }
            }

            &:hover {
                filter: brightness(0.7)
            }
        }
    }
`;