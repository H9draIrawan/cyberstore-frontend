import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const getUserById = async (_id: string) => {
	const res = await api.get(`/api/v1/users/${_id}`);
	return res.data;
};

export { getUserById };
