const valid = {
  isEmailValid(email) {
    if (email) {
      var regEmail =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      return regEmail.test(email) ? '' : '请输入正确的邮箱';
    }
    return '请输入邮箱';
  },
  isPasswordValid(password) {
    if (password) {
      var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
      return regExp.test(password) ? '' : '密码是数字和字母组合，不能小于6位';
    }
    return '密码不能为空';
  }
}
export default valid;