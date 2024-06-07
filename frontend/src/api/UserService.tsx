import axios from "axios";

const API_BASE_URL = "https://localhost:7158";

interface LoginResponse {
  id: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/api/users/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Invalid email or password");
  }
};

export const register = async (user: RegisterRequest): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/api/users`, user);
  } catch (error) {
    throw new Error("Registration failed");
  }
};
