import classes from './Hero.module.scss';
import heroShoesImg from '../../img/aj1-hero.png';
const Hero = () => {

    return(
        <section className={classes.hero}>
            <div className={classes.description}>
            <h2>Retro I x Travis Scott</h2>
            <p>Only avaliable on our epic store . Do not waste time and buy this amazing shoes
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, dolores!
                 </p>
            </div>
            <img src={heroShoesImg} alt='aj 1 x travis-scott'/>
        </section>
    )

}

export default Hero;