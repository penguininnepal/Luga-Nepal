import { useNavigate } from 'react-router-dom';

interface LogoButtonProps {
  className?: string; // allow overriding classes
  variant?: 'dark' | 'light';
}

function LogoButton({ variant = 'dark' }: LogoButtonProps) {
  const navigate = useNavigate();
  const textColor = variant === 'light' ? 'text-white' : 'text-black';

  return (
    <div>
      <button onClick={() => navigate('/home')}
        className="flex transition-transform hover:scale-105 group cursor-pointer"
      >
        <div className="text-2xl font-bold uppercase tracking-widest">
          <span className={`${textColor}`}>
            Luga
          </span>
          <span className={`${textColor} font-light`}>
            Nepal
          </span>
        </div>
      </button>
    </div>
  );
}

export default LogoButton;