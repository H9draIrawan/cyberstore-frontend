import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { sessionUserNow } from "../services/Auth.Service";

interface AuthContextType {
	userId: string | null;
	isLoading: boolean;
	login: (_id: string) => void;
	logout: () => void;
	refreshSession: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [userId, setUserId] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const login = (_id: string) => {
		setUserId(_id);
	};

	const logout = () => {
		setUserId(null);
	};

	const reload = async () => {
		try {
			const res = await sessionUserNow();
			setUserId(res?.user?.user_id ?? null);
		} catch {
			setUserId(null);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		void reload();
	}, [reload]);

	if (isLoading) {
		return <div>Checking authentication...</div>;
	}

	return (
		<AuthContext
			value={{ userId, isLoading, login, logout, refreshSession: reload }}
		>
			{children}
		</AuthContext>
	);
}

export function useAuth() {
	const context = use(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within a AuthProvider");
	}

	return context;
}
