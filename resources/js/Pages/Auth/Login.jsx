import React from "react";
import { LoginCard } from "../../Components/Card";
import DefaultLayout from "../../Layouts/DefaultLayout";
import Logo from "../../Assets/myLogoIcon.png";

function Login() {
    return (
        <div className="flex items-center justify-center h-[80vh] w-screen">
            <LoginCard>
                <img
                    src={Logo}
                    alt="sampleLogo"
                    className="w-24 md:w-28 h-auto mx-auto mb-4 rounded-full"
                />
                <div className="mb-4">
                    <p className="text-xl md:text-2xl text-left text-[var(--primary-color)] font-bold">
                        Login to your account
                    </p>
                    <p className="text-slate-500 text-sm">
                        Please enter your details
                    </p>
                </div>
            </LoginCard>
        </div>
    );
}

Login.layout = (page) => <DefaultLayout children={page} />;
export default Login;
