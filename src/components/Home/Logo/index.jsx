import 'animate.css';
import LogoS from '../../../assets/images/logo-d-svg.svg';
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo animate__animated animate__fadeInDown"
        src={LogoS}
        alt="Mi Logo"
      />
    </div>
  )
}

export default Logo;
