import { FormEventHandler, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
function Login() {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);

	function attemptLogin(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		console.log("logging in!!");
		console.log("email", email);
		console.log("password", password);
	}

	return (
		<div className="container flex flex-col items-center justify-center gap-2">
			<h1>Hello from login</h1>
			<form onSubmit={attemptLogin}>
				<label className="input input-bordered flex items-center gap-2">
					<MdOutlineMailOutline />

					<input
						type="email"
						className="grow"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label htmlFor="" className="input input-bordered flex items-center gap-2">
					<RiLockPasswordFill />
					<input
						type="password"
						className="grow"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button className="btn btn-primary">Login</button>
			</form>
		</div>
	);
}

export default Login;
