export function LoginCard({ children }) {
    return (
        <div
            className=" sm:max-w-md w-full m-4 md:m-16 bg-white p-6 rounded-lg border"
            style={{ boxShadow: "0 0 14px rgba(0, 0, 0, 0.10)" }}
        >
            {children}
        </div>
    );
}
