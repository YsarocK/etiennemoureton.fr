import style from './style.scss';
import Gitlab from '../../assets/icons/gitlab.svg'
import Github from '../../assets/icons/github.svg'
import Linkedin from '../../assets/icons/linkedin.svg'

const Header = () => (
	<header class={'container ' + style.header}>
		<a target="blank" href="https://github.com/YsarocK"><Github /><p>Github</p></a>
		<a target="blank" href="https://gitlab.com/emoureton"><Gitlab /><p>Gitlab</p></a>
		<a target="blank" href="https://www.linkedin.com/in/etiennemoureton/"><Linkedin /><p>Linkedin</p></a>
	</header>
);

export default Header;
