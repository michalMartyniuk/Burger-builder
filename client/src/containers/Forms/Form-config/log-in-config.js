export default {
  email: {
    config: {
      label: 'Email address',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Email address',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 6, msg: `Minimum character length is 4`}
    },
  },
  password: {
    config: {
      label: 'Password',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Password',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 6, msg: `Minimum character length is 4`}
    },
  },
}