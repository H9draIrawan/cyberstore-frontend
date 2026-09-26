import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const getErrorMessage = (error: unknown, fallback: string) => {
	if (axios.isAxiosError(error)) {
		return error.response?.data?.message ?? error.message;
	}

	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === "string") {
		return error;
	}

	return fallback;
};

const sessionUserNow = async () => {
	const res = await api.get("/api/v1/auth/user", { withCredentials: true });
	return res.data;
};

const loginUser = async (
	email: string,
	password: string,
	isRememberMe: boolean,
) => {
	const res = await api.post(
		"/api/v1/auth/login",
		{
			email: email,
			password: password,
			isRememberMe: isRememberMe,
		},
		{
			withCredentials: true,
		},
	);
	return res.data;
};

const registerUser = async (
	username: string,
	email: string,
	password: string,
) => {
	const res = await api.post("/api/v1/auth/register", {
		username: username,
		email: email,
		password: password,
	});
	return res.data;
};

const logoutUser = async () => {
	await api.post("/api/v1/auth/logout", {}, { withCredentials: true });
};

export { sessionUserNow, loginUser, registerUser, logoutUser, getErrorMessage };
