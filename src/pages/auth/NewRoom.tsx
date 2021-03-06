import { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { PageAuthContainer, MainContent } from './styles';
import { useState } from 'react';
import { Button } from '../../components/Button/index';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        
        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <PageAuthContainer>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <MainContent>
                <img src={logoImg} alt="Letmeask"/>
                <h1>{user?.name}</h1>
                <h2>Crie uma nova sala</h2>
                <form onClick={handleCreateRoom}>
                    <input
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                    />
                    <Button type="submit">
                        Criar sala
                    </Button>
                </form>
                <p>
                    Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                </p>
                </MainContent>
            </main>
        </PageAuthContainer>
    )
}