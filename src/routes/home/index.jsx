import style from './home.scss';
import ImgWithFallback from '../../components/ImgWithFallback/ImgWithFallback';
import Technos from '../../components/Technos/Technos';
import GamePad from '../../assets/icons/gamepad.svg'
import Unflux from '../../assets/icons/unflux.svg'

const Home = () => (
	<div className={style.home + ' container'}>
		<section className={style.heroSection}>
			<div className={style.heroSection__left}>
				<div class={style.heroSection__left__portrait}>
					<ImgWithFallback
						src="/assets/img/portrait.webp"
						fallback="/assets/img/portrait.jpeg"
						alt="My own self portrait"
					/>
				</div>
				<p className={'league-spartan ' + style.heroSection__label}><span className={style.heroSection__label__text}>HI THERE </span>👋</p>
				<h1 className={'league-spartan ' + style.heroSection__title}>Etienne,</h1>
				<h2 className={'league-spartan ' + style.heroSection__subtitle}>Creative Developper</h2>
				<a className="cta cta--main" href="mailto:hello@etiennemoureton.fr">Me contacter</a>
			</div>
			<div className={style.heroSection__right}>
				<Technos />
			</div>
		</section>
		<section className={style.projects}>
			<div className={style.projects__container}>
				<div className={style.projects__content}>
					<h2>Mon travail</h2>
					<p>Du simple site vitrine à l'application complète, je construis <span>votre projet de A à Z</span>. Je me charge ou participer à l'élaboration de la maquette, de la mise en place du périmètre projet et discute avec vous de vos besoins.
					<br></br>
					<br></br>
					Je travaille dans <span>une démarche d'éco-conception</span>. J'essaie au maximum (et quand c'est possible) de réduire l'impact écologique d'une page. Cela passe autant par le retrait de fonctions inutiles que par l'optimisation du code, le choix de l'hébergeur ou le travail sur les animations.
					</p>
					<div className={style.projects__ctas}>
						<a target="blank" className="cta cta--secondary" href="https://haltogame.com"><GamePad/> Halto</a>
						<a target="blank" className="cta cta--secondary" href="https://unflux.fr"><Unflux/> Unflux</a>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Home;
