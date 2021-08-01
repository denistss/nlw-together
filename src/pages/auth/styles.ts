import styled from "styled-components";

export const PageAuthContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 7;
        background: ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.input_text};

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;

        img {
            max-width: 320px;
        }

        strong {
            font: 700 36px 'Poppins', sans-serif;
            line-height: 42px;
            margin-top: 16px;
        }

        p {
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: ${props => props.theme.colors.input_text};
        }
    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 850px) {
        flex-direction: column;
    
        aside {
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          padding: 3rem 2rem;

          strong {
            line-height: 35px;
            margin-top: 16px;
        }

        p {
            font-size: 20px;
            line-height: 32px;
            margin-top: 16px;
        }
    
          img {
            height: 10rem;
    
            @media(max-width: 640px) {
              display: none;
            }
          }
        }
      }
`;

export const MainContent = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
        align-self: center;
    }

    h1 {
        font-size: 30px;
        margin: 30px 0 0;
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.colors.secundary};
    }

    h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
        color: ${props => props.theme.colors.secundary};
    }

    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background: ${props => props.theme.colors.input_background};
            border: 1px solid ${props => props.theme.colors.input_border};
        }

        button {
            margin-top: 16px;
        }

        button, input {
            width: 100%;
        }
    }

    p {
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        margin-top: 16px;

        a {
            color: ${props => props.theme.colors.text};
        }
    }
`;

export const CreateRoomButton = styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.theme.colors.login_btn};
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;

export const Separator = styled.div`
    font-size: 14px;
    color: ${props => props.theme.colors.separator};

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: ${props => props.theme.colors.separator};
        margin-right: 16px;
    }

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${props => props.theme.colors.separator};
        margin-left: 16px;
    }
`;