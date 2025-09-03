import jwtDecode from "jwt-decode";

export function getUserFromToken() {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    return {
      sub: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
      role: decoded.role,
    };
  } catch (error) {
    console.error("Error decodificando token:", error);
    return null;
  }
}
