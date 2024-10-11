import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
	const [token, setToken] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchToken = async (): Promise<void> => {
			const response = await fetch("/api/fake-auth");
			if (response.ok) {
				const data: { token: string } = await response.json();
				setToken(data.token);
				sessionStorage.setItem("token", data.token);
				router.push("/dashboard");
			}
		};

		fetchToken();
	}, [router]);

	return <div>Token stored in Session Storage: {token}</div>;
}
