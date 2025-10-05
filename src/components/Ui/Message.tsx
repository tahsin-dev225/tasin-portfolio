import { message } from "antd";


export const success = (msg : string) => {
  message.success(msg);
};

export const info = (msg : string) => {
  message.info(msg);
};

export const warning = (msg : string) => {
  message.warning(msg);
};

export const errorMessage = (msg : string) => {
  message.error(msg);
};
