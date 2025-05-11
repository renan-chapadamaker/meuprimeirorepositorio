import { useParams, Link } from 'react-router-dom';
import './userprofile.css';

// Dados mockados de usuários (substitua por uma API real depois)
export const users = {
  '1': { name: 'João Silva', email: 'joao@exemplo.com', bio: 'Desenvolvedor Front-end' },
  '2': { name: 'Maria Souza', email: 'maria@exemplo.com', bio: 'UX Designer' },
  '3': { name: 'Carlos Oliveira', email: 'carlos@exemplo.com', bio: 'Gerente de Projetos' }
};

export default function UserProfile() {
  const { userId } = useParams();
  const user = users[userId];

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Usuário não encontrado</h2>
        <Link to="/">Voltar à página inicial.</Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Perfil de {user.name}</h2>
      <div className="profile-info">
        <p><strong>ID:</strong> {userId}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
      <Link to="/" className="back-link">Voltar</Link>
    </div>
  );
}