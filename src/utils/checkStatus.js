import { message } from 'antd'

export default (option = {}, toastMessage = "成功") => {
  const { success, data={} } = option;
  message.config({
    top: 100,
    duration: 2,
  });
  if (success) {
    message.success(toastMessage)
  } else {
    message.error(data.message)
  }
}