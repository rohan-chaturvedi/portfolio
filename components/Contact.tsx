import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@layout/Button";
import ErrorMessage from "./Layout/Error";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isValid }
    } = useForm<FormData>();

    console.log(isValid);
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        reset();
    };
    return (
        <div id="contact" className="bg-primary-gray text-white py-12 px-4">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-y-8 justify-between gap-x-24">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-heading-xl font-bold">Contact</h2>
                    <p className="text-body-m font-regular text-primary-lightgray max-w-sm">
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I’ll get back to you
                        as soon as possible.
                    </p>
                </div>
                <div className="w-full lg:w-[50%]">
                    <form
                        className="flex flex-col justify-items-end gap-y-4 items-end"
                        onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name", {
                                required: "This field is required",
                                minLength: {
                                    value: 1,
                                    message:
                                        "Must be at least 1 character long."
                                }
                            })}
                            className={`w-full border-b-4 rounded-none border-primary-lightgray bg-transparent focus:outline-none   p-2 text-white  ${
                                errors.name
                                    ? "border-red-500"
                                    : "focus:border-primary-green"
                            }`}
                            type="text"
                            placeholder="NAME"
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                        <input
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                            className={`w-full border-b-4 rounded-none border-primary-lightgray bg-transparent focus:outline-none   p-2 text-white  ${
                                errors.email
                                    ? "border-red-500"
                                    : "focus:border-primary-green"
                            }`}
                            type="text"
                            placeholder="EMAIL"
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                        <textarea
                            {...register("message", {
                                minLength: {
                                    value: 2,
                                    message:
                                        "Must be at least 2 characters long."
                                }
                            })}
                            className={`w-full border-b-4 rounded-none border-primary-lightgray bg-transparent focus:outline-none   p-2 text-white  ${
                                errors.message
                                    ? "border-red-500"
                                    : "focus:border-primary-green"
                            }`}
                            rows={4}
                            placeholder="MESSAGE"
                        />
                        {errors.message && (
                            <ErrorMessage>
                                {errors.message.message}
                            </ErrorMessage>
                        )}
                        <Button
                            loading={!isValid}
                            className=""
                            text="SEND MESSAGE"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
