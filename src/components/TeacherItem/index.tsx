import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import api from '../../services/api';


export interface Teacher {
		id: number;
		avatar: string;
		bio: string;
		cost: number;
		name: string;
		subject: string;
		whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher;
}

const  TeacherItem: React.FC<TeacherItemProps> = ( {teacher} ) => {
	function createNewConnection(){
		api.post('connections', {
			user_id: teacher.id,
		})
	}
	return (
		<article className="teacher-item">
				<header>
					<img src={teacher.avatar} alt="Pablo Azevedo"/>
					
					<div>
						<strong>{teacher.name}</strong>
						<span>{teacher.subject}</span>
					</div>
				</header>
				<p>
					{teacher.bio}
				</p>
				<footer>
					Preço/hora
					<strong>
						R$ {teacher.cost}
					</strong>
					<a 
					target="_blank" 
					onClick={createNewConnection}
					 href={`https://wa.me/${teacher.whatsapp}`}
					 >
					<img src={whatsapp} alt="Whatsapp"/>
					Entrar em Contato
					</a>
				</footer>
				</article>
	)
}

export default TeacherItem;