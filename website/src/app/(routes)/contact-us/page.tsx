"use client";
import { FC, useState } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import CustomInput from "@/components/common/CustomInput";
import CustomTextArea from "@/components/common/CustomTextArea";

const Page: FC = () => {

    const [contactForm, setContactForm] = useState<ContactFormTypes>({
        name: "",
        email: "",
        suggestions: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleContactFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(contactForm);
        setContactForm({
            name: "",
            email: "",
            suggestions: ""
        });
    };

    return (
        <CustomPage>
            <Heading level={1} text="Contact-Us" />
            <form method="POST" action={`https://getform.io/f/${process.env.NEXT_PUBLIC_GETFORM_API_KEY}`} encType='multipart/form-data' className="flex flex-col space-y-4">
                <CustomInput name="name" type="text" placeholder="Name" value={contactForm?.name} onChange={handleInputChange} className="p-2 md:w-1/2" />
                <CustomInput name="email" type="email" placeholder="Email" value={contactForm?.email} onChange={handleInputChange} className="p-2 md:w-1/2" />
                <CustomTextArea name="suggestions" placeholder="Your Suggestions..." value={contactForm?.suggestions} onChange={handleInputChange} rows={10} cols={50} className="p-2" />
                <button type="submit" onClick={handleContactFormSubmit} className="p-2 bg-[#005B41] dark:bg-violet-500 text-white rounded-md dark:text-black">Submit</button>
            </form>
            <div className="flex items-center my-4">
                <div className="flex-grow border-t dark:border-violet-500 text-[#005B41]"></div>
                <span className="mx-2 dark:text-violet-300 text-[#005B41]">OR</span>
                <div className="flex-grow border-t dark:border-violet-500 text-[#005B41]"></div>
            </div>
            <div className="text-xl font-medium">Write a mail - <a href="mailto:contactashar4@gmail.com" className="dark:text-violet-200 dark:hover:text-violet-400 underline underline-offset-4">contactashar4@gmail.com</a></div>
        </CustomPage>
    );
};

export default Page;