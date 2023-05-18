import authDatas from "../data-access";

// check if account is exist
const checkExistOfAccount = async ({ name, email, address }) => {
  var existsAddress = await authDatas.AuthDB.findOne({
    filter: { address: address }
  });
  if (!!existsAddress)
    return {
      res: true,
      param: "address",
      msg: "address is Exist"
    }

  var existsName = await authDatas.AuthDB.findOne({
    filter: { name: name }
  });
  if (!!existsName)
    return {
      res: true,
      param: "name",
      msg: "name is Exist"
    }
  var existsEmail = await authDatas.AuthDB.findOne({
    filter: { email: email }
  });
  if (!!existsEmail)
    return {
      res: true,
      param: "email",
      msg: "email is Exist"
    }

  return {
    res: false,
    param: "none",
    msg: "true"
  }
}

const authService = {
  checkExistOfAccount,
}

export default authService