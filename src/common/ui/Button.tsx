import { ButtonPropsType } from "../../types/buttonType";
export default function Button(props: ButtonPropsType) {
  const { type = "submit", test_id, label, onClick, disabled } = props;
  const baseStyle =
    "rounded-sm border-solid border-[1px] p-2 border-black shadow-md";
  return (
    <button
      className={`${baseStyle} ` + (disabled ? " bg-slate-500" : "")}
      type={type}
      data-testid={`${test_id}-button`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
