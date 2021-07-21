import copyImg from '../../assets/images/copy.svg';

import { RoomContainer } from './styles';

type RoomCodeProps = {
    code: string;
} 

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }
    return (
        <RoomContainer>
            <button className="room-code" onClick={copyRoomCodeToClipboard}>
                <div>
                    <img src={copyImg} alt="Copy room Code" />
                </div>
                <span>Sala #{props.code}</span>
            </button>
        </RoomContainer>
    )
}