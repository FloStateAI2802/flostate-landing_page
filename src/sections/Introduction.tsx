import Tag from "@/components/Tag";

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Introducing FloState</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>
                        You&apos;re eager to harness the power of AI agents,{" "}
                    </span>
                    <span className="text-white/15">
                        but you are tired of wrestling with complex code just to
                        automate your agentic workflows.{" "}
                    </span>
                    <span className="text-lime-400 block">
                        That&apos;s why we built FloState.
                    </span>
                </div>
            </div>
        </section>
    );
}
