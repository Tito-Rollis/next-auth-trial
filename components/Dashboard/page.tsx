export function DashboardComponent() {
    return (
        <div className="shadow-lg p-5 shadow-stone-800 rounded-lg border-4 border-cyan-500">
            <h1>
                Name: <span className="font-bold">John</span>
            </h1>
            <h1>
                Email: <span className="font-bold">John@gmail.com</span>
            </h1>
            <button className="text-slate-100 bg-orange-500 w-full mt-4 py-2" type="submit">
                Logout
            </button>
        </div>
    );
}
