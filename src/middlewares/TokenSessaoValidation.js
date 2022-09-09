export default function ValidaTokenSessao(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({Erro:"É necessário realizar login para acessar o recurso."});
  }

  next();
}
