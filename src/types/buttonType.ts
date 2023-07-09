type ButtonType = "submit" | "button";

export interface ButtonPropsType {
  type?: ButtonType;
  test_id?: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
