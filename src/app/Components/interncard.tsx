import React from "react";
import Image from "next/image";
import { title } from "process";

const data=[
    {
        imgcard : "/interns/internscards/card1.svg",
        title : "UI/UX Design",
        desc : "Craft seamless digital experiences through user-first design and intuitive interfaces."
    },
    {
        imgcard : "/interns/internscards/card2.svg",
        title : "Business Development",
        desc : "Drive growth by identifying opportunities, building relationships, and expanding reach."
    },
    {
        imgcard : "/interns/internscards/card3.svg",
        title : "Frontend Development",
        desc : "Build responsive, high-performance user interfaces using modern web technologies."
    },
    {
        imgcard : "/interns/internscards/card4.svg",
        title : "Flutter Development",
        desc : "Create beautiful, cross-platform mobile apps with Flutter and Dart."
    }
];

const InternCard: React.FC = () => {
    return(
        <div className="grid grid-cols-1 w-280 h-auto sm:grid-cols-2 md:grid-cols-4 gap-15 p-6 ">
            {data.map((internship, index) => (
                <div key={index} className="bg-white rounded-es-30px shadow-md/30 p-4 flex flex-col items-center h-">
                    <Image src={internship.imgcard} alt={internship.title} width={175} height={175} />
                    <h3 className="mt-4 text-lg font-semibold">{internship.title}</h3>
                    <p className="mt-2 text-md text-gray-600 text-center">{internship.desc}</p>
                    <div className="grid grid-row gap-3 ">
                        <div className="grid grid-row gap-1">
                            <Image
                                src={"interns/internscards/calender.svg"}
                                width={10}
                                height={10}
                                alt="calender image"
                                />
                            <span className="text-[7px]">May 4, 2025</span>
                        </div>
                        <div>
                            <Image
                                src={"interns/internscards/calender.svg"}
                                width={10}
                                height={10}
                                alt="calender image"
                                />
                            <span className="text-[7px]">May 4, 2025</span>                            
                        </div>
                        <div>
                            <Image
                                src={"interns/internscards/calender.svg"}
                                width={10}
                                height={10}
                                alt="calender image"
                                />
                            <span className="text-[7px]">May 4, 2025</span>                            
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};
export default InternCard;