import RightArrow from "../images/rightArrow.svg";

function Mail() {
  return (
    <div className="email">
      <h3 className="email__title t-center">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="email__input flex">
        <input
          type="email"
          name="emial"
          id="email"
          placeholder="Email address"
        />
        <button>
          Get Started
          <span>
            <RightArrow />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Mail;
