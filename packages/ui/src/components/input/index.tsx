// import styles from "./input-v1.module.css";
import { Input } from "@mui/base/Input";
import classNames from "clsx";
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
