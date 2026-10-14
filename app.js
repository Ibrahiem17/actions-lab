function login(user, pass) {
  if (user === "admin" && pass === "secret") {
    return 200;
  }
  return 401;
}

module.exports = { login };
