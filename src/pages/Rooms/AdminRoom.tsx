import { useHistory, useParams } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { database } from '../../services/firebase';
import { Button } from '../../components/Button/index';
import { Question } from '../../components/Question/index';
import { RoomCode } from '../../components/RoomCode/index';
import { useRoom } from '../../hooks/useRoom';

import Switch from 'react-switch';
import { useTheme } from '../../hooks/useTheme';

import { Header, Main, QuestionList } from './styles';
import { useAuth } from '../../hooks/useAuth';

type RoomParms = {
    id: string;
}

export function AdminRoom() {
    const history = useHistory();
    const params = useParams<RoomParms>();
    const roomId = params.id;
    const {title, questions} = useRoom(roomId);
    const {theme, toggleTheme} = useTheme()
    const {signOutWithGoogle} = useAuth()

    async function handleGoToRoom(roomId: string) {
        history.push(`/rooms/${roomId}`);
    }

    async function handleLogOut() {
        await signOutWithGoogle()
        history.push('/');
    }

    async function handleEndRoom(roomId: string) {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        })

        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
       }
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        })
    }
    
    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true
        })
    }

    return (
        <div id="page-room">
            <Header>
                <div className="content">
                    <img src={LogoImg} alt="Letmask" />
                    <div>
                        <Button isOutLined onClick={() => handleGoToRoom(roomId)}>Room</Button>
                        <RoomCode code={roomId} />
                        <Button isOutLined onClick={() => handleEndRoom(roomId)}>Encerrar Sala</Button>
                        <Button isOutLined onClick={() => handleLogOut()}>Log Out</Button>
                        <Switch 
                            onChange={toggleTheme}
                            checked={theme.themeTitle === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            offColor="#835afd"
                            onColor="#A3A3A3"
                        />
                    </div>
                </div>
            </Header>

            <Main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <QuestionList>
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}    
                                isHighLighted={question.isHighLighted}
                                isAnswered={question.isAnswered}
                            >
                                {!question.isAnswered && (
                                    <>
                                        <button
                                        type="button"
                                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                        >
                                        <img src={checkImg} alt="Marcar pergunta como respondida" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleHighlightQuestion(question.id)}
                                        >
                                        <img src={answerImg} alt="Dar destaque à pergunta" />
                                        </button>
                                    </>
                                )}
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        )
                    })}
                </QuestionList>
            </Main>
        </div>
    );
}