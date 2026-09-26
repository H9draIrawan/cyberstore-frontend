import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { logoutUser, sessionUserNow } from "../services/Auth.Service";
import { getUser } from "../services/User.Service";

interface AuthUser {
	_id: string;
	username: string;
	email: string;
	role: string;
}

interface AuthContextType {
	user: AuthUser | null;
	isLoading: boolean;
	logout: () => void;
	reload: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<AuthUser | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const logout = async () => {
		try {
			await logoutUser();
		} finally {
			setUser(null);
		}
	};

	const reload = async () => {
		try {
			const session = await sessionUserNow();
			const userNow = await getUser(session?.user?._id ?? null);
			setUser(userNow);
		} catch {
			setUser(null);
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
		<AuthContext value={{ user, isLoading, logout, reload }}>
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
