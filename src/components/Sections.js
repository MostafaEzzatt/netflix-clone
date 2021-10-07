import SectionCase from "./SectionCase";

const Sections = ({ title, subtitle, image, elmCase, media, reversed }) => {
  if (!reversed) {
    reversed = false;
  }

  const sectionClassName = `section flex f-ai-c ${
    reversed ? "f-reversed" : ""
  }`;
  return (
    <>
      <div className="container flex f-jc-c section-border">
        <section className={sectionClassName}>
          <div className="section__info">
            <h1 className="section__info__title">{title}</h1>
            <h2 className="section__info__subtitle">{subtitle}</h2>
          </div>
          <div className="section__animation">
            <img className="section__animation__image" src={image} alt="tv" />
            <SectionCase elmCase={elmCase} media={media} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sections;
