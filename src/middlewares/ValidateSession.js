export default function validateSessionToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: "Falha ao authenticar!" });
    }
  
    next();
  }