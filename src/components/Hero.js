import Mail from "./Mail";

const Hero = (props) => {
  return (
    <>
      <div className="header__hero flex f-jc-c f-ai-c">
        <h1 className="header__hero__title t-center">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="header__hero__subtitle">
          Watch anywhere. Cancel anytime.
        </h2>

        <Mail />
      </div>
    </>
  );
};
export default Hero;
