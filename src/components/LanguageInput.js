import { IoEarth, IoCaretDown } from "react-icons/io5";

function LanguageInput() {
  return (
    <div className="cta__select">
      <span class="earth">
        <IoEarth />
      </span>
      <select name="lang" className="cta__select__lang">
        <option value="en">English</option>
        <option value="eg">العربية</option>
      </select>
      <span class="arrow">
        <IoCaretDown />
      </span>
    </div>
  );
}

export default LanguageInput;
