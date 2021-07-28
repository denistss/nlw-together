import styled from "styled-components";

export const RoomContainer = styled.div`
    .room-code {
        height: 40px;
        border-radius: 8px;
        overflow: hidden;

        background: ${props => props.theme.colors.text_primary};
        border: 1px solid ${props => props.theme.colors.button_background};
        cursor: pointer;

        display: flex;

        div {
            background: ${props => props.theme.colors.button_background};
            padding: 0 12px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        span {
            display: block;
            align-self: center;
            flex: 1;
            padding: 0 16px 0 12px;
            width: 210px;
            font-size: 12px;
            font-weight: 500;
        }
    }
`