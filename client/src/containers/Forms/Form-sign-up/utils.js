formSubmitHandler = (e) => {

  e.preventDefault();

  const email = this.state.formConfig.email.value
  const password = this.state.formConfig.password.value

  this.props.initSignUp(email, password)
}
