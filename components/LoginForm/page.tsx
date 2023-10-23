const LoginFormComponent = () => {
    return (
        <div className="grid place-items-center h-full">
            <div className="shadow-lg p-5 shadow-stone-800 rounded-lg border-4 border-cyan-500">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>

                <form className="flex flex-col gap-3" action="">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="text-slate-100 bg-cyan-500 py-2" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginFormComponent;
