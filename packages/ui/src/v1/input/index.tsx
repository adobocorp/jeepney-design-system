// import styles from "./input-v1.module.css";
import classNames from "classnames";
import { Input } from "@mui/base/Input";
import styles from "./input.module.css";

export const InputV1 = ({ props }) => {
  return (
    <Input
      slotProps={{
        input: { className: classNames(styles.default) },
      }}
      aria-label="Demo input"
      placeholder="Type something…"
      {...props}
    />
  );
};
