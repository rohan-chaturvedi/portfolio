import React, { useState } from "react";

type Props = {
    text: string;
    className?: string;
    loading?: boolean;
    onClick?: () => void;
};

export default function Button({
    className = "",
    loading,
    text = "",
    onClick
}: Props) {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={
                `hover:text-primary-green py-2 border-b-2 border-primary-green font-semibold text-[16px] text-white uppercase transition ease-in-out duration-150 flex ${
                    loading && "opacity-25"
                } ` + className
            }
            disabled={loading}>
            {text}
        </button>
    );
}
