module.exports = function (model) {
  return class UserModel extends model {
    static #db_name = "uber_clone"
    static #collection = "riders"

  }
}