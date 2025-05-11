import { useParams, Link } from 'react-router-dom';
import UserProfile, { users } from '../pages/UserProfile';

function Header() {

  const { userId } = useParams();
  const user = users[userId] || "Usuário";
    
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Principal</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li key={userId}><Link to={`/user/${userId}`}>Perfil de {user.name}</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;