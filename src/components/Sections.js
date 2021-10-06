import downloadIcon from "../images/download-icon.gif";

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

const SectionCase = ({ elmCase, media }) => {
  switch (elmCase) {
    case "tv":
      return (
        <>
          <video
            className="section__animation__video"
            src={media.url.videoTV}
            autoplay="true"
            muted="true"
            loop
          ></video>
        </>
      );
      break;
    case "mobile":
      return (
        <div className="section__animation__download flex f-ai-c f-jc-b">
          <div className="section__animation__download__poster">
            <img src={media.poster} alt={media.title} />
          </div>

          <div className="section__animation__download__info">
            <h3 className="section__animation__download__info__title">
              {media.title}
            </h3>
            <span className="section__animation__download__info__sub">
              Downloading...
            </span>
          </div>

          <div className="section__animation__download__gif">
            <img src={downloadIcon} alt={media.title} />
          </div>
        </div>
      );
      break;
    case "mac":
      return (
        <>
          <video
            className="section__animation__video--mac"
            src={media.url.videoMac}
            autoplay="true"
            muted="true"
            loop
          ></video>
        </>
      );
      break;
    case "image":
      return <></>;
      break;

    default:
      break;
  }

  return <></>;
};

export default Sections;
