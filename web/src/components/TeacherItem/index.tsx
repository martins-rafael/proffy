import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import './styles.css';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacheItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacheItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                    target="_blank"
                >
                    <img src={whatsapp} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;

