import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { database } from '../../services/firebase';
import { Button } from '../../components/Button/index';
import { useAuth } from '../../hooks/useAuth';

import {PageAuthContainer, MainContent, CreateRoomButton, Separator } from './styles';
import { FormEvent } from 'react';
import { useState } from 'react';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle} = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function randleCreateRoom() {
      if (!user) {
          await signInWithGoogle()
      }

      history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Room does not exists.');
            return;
        }

        if (roomRef.val().endedAt) {
            alert('Room already cloded.');
            return;
        }

        history.push(`/rooms/${roomCode}`);
    }
    
    return (
        <PageAuthContainer>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <MainContent className="main-content">
                <img src={logoImg} alt="Letmeask"/>
                <CreateRoomButton onClick={randleCreateRoom}>
                    <img src={googleIconImg} alt="Logo do Google"/>
                    Crie sua sala com o Google
                </CreateRoomButton>
                <Separator>ou entre em uma sala</Separator>
                <form onSubmit={handleJoinRoom}>
                    <input
                        type="text"
                        placeholder="Digite o código da sala"
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                    />
                    <Button type="submit">
                        Entrar na sala
                    </Button>
                </form>
                </MainContent>
            </main>
        </PageAuthContainer>
    )
}