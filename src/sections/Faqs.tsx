"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

import Tag from "@/components/Tag";

const faqs = [
    {
        question: "What exactly is a no-code AI agentic workflow?",
        answer: "It's a way to design and automate complex tasks using AI, without any coding. You visually connect different AI components and APIs to create intelligent workflows, then get an API to use that workflow as an AI agent.",
    },
    {
        question: "Do I need any coding experience to use this?",
        answer: "Absolutely not! Our platform is designed for everyone, regardless of technical background. You build workflows using a drag-and-drop interface, no code required.",
    },
    {
        question: "What kind of workflows can I create?",
        answer: "The possibilities are endless!  Automate data entry, personalize customer experiences, analyze market trends, generate content, and much more. If you can dream it, you can likely build it.",
    },
    {
        question: "What integrations are available? ",
        answer: "We offer a growing library of integrations with popular tools and services, allowing you to connect your AI agents to the data and platforms you already use. Check our integrations section for the latest additions.",
    },
    {
        question:
            "Can I create workflows that involve multiple AI agents working together?",
        answer: "Yes! Our platform supports complex workflows with multiple AI agents collaborating seamlessly. We offer 'Teams' which are groups of agents designed to work together on specific tasks. This allows you to orchestrate sophisticated, multi-agent interactions and achieve more complex automation goals.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl text-center font-medium mt-6 max-w-xl mx-auto">
                    Curiosity Meets{" "}
                    <span className="text-lime-400">Answers</span> Here
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setSelectedIndex(faqIndex)}
                            >
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
