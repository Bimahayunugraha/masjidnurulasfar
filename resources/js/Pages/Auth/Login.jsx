import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import TertiaryButton from "@/Components/TertiaryButton";
import { PulseLoader } from "react-spinners";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });
    const [loading, setLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);

        post(route("login"));
        setLoading(false);
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <GuestLayout>
            <Head title="Log in - Website Profile Masjid Nurul Asfar" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <h1 className="pb-2 text-center text-xl font-bold leading-tight tracking-wide text-gray-900 md:text-2xl">
                Login Admin
            </h1>
            <form onSubmit={submit} className="space-y-4 md:space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleOnChange}
                        placeholder="Masukkan email"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <div className="relative w-full">
                        <TextInput
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                            placeholder="Masukkan password"
                        />
                        <div className="absolute inset-y-0 right-0 mt-1 flex items-center justify-center pr-3">
                            <button type="button" onClick={togglePassword}>
                                {passwordShown ? (
                                    <i className="fa-light fa-eye"></i>
                                ) : (
                                    <i className="fa-light fa-eye-slash"></i>
                                )}
                            </button>
                        </div>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            onChange={handleOnChange}
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="border-b border-transparent text-sm text-gray-600 hover:border-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="mt-4 flex items-center">
                    {loading ? (
                        <TertiaryButton
                            disabled={processing}
                            className="w-full"
                        >
                            <PulseLoader size={6} color={"#ffffff"} />
                        </TertiaryButton>
                    ) : (
                        <TertiaryButton
                            disabled={processing}
                            className="w-full"
                        >
                            Log in
                        </TertiaryButton>
                    )}
                </div>
            </form>
        </GuestLayout>
    );
}
