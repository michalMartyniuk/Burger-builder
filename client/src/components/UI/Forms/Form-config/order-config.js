export default {
  firstName: {
    config: {
      label: 'First name',
      inputtype: 'input',
      type: 'text',
      placeholder: 'First name',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false,
  },
  lastName: {
    config: {
      label: 'Last name',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Last name',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false
  },
  street: {
    config: {
      label: 'Street',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Street',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false
  },
  zipCode: {
    config: {
      label: 'Zip code',
      inputtype: 'input',
      type: 'text',
      placeholder: 'zip code',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false
  },
  country: {
    config: {
      label: 'Country',
      inputtype: 'input',
      type: 'text',
      placeholder: 'Country',
    },
    value: '',
    validation: {
      required: { value: true, msg: "This field is required" },
      minLength: { value: 4, msg: `Minimum character length is 4`}
    },
    touched: false
  }
}