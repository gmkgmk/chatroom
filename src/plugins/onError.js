import { message } from 'antd';
import { ERROR_MSG_DURATION } from './../constants';

export default {
  onError(error) {
    message.error(error.message, ERROR_MSG_DURATION);
  }
};