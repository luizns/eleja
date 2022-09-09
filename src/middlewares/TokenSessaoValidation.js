import listUsuarioService from "../app/services/Usuarios/ListUsuarioService";
export default async function ValidaTokenSessao(req, res, next) {
  const service = new listUsuarioService();
  const tokenCabecalho = req.headers.authorization;
  let tokenFormatado;

  if (!tokenCabecalho) {
    return res
      .status(401)
      .json({ Erro: "Usuário não logado ou token da requisição inválido." });
  } else {
    tokenFormatado = tokenCabecalho.replace("Bearer ", "");
  }

  const tokenUsuarioValido = await service.listUsuarioToken(tokenFormatado);

 
  if (tokenUsuarioValido != tokenFormatado) {
    return res
      .status(401)
      .json({ Erro: "É necessário realizar login para acessar o recurso." });
  }

  next();
}
