import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Team = () => {
  const teamData = [
    {
      role: "Managing Director",
      name: "Ailsa Billington",
      image: "/assets/images/ailsa-billington.avif",
      linkedin: "#",
    },
    {
      role: "Creative Director",
      name: "Phil Robinson",
      image: "/assets/images/phil-robinson.avif",
      linkedin: "#",
    },
    {
      role: "Director of Digital Strategy and Innovation",
      name: "Dan Hardaker",
      image: "/assets/images/dan-hardaker.avif",
      linkedin: "#",
    },
    {
      role: "Director of Technology",
      name: "Steve King",
      image: "/assets/images/steve-kingavif.avif",
      linkedin: "#",
    },
  ];

  return (
    <section className="section_space">
      <div className="container mx-auto">
        <div className="w-[70%]">
          <h6 className="eyebrow mb-8">Your Global team</h6>
          <h2 className="mb-8">
            Wherever you are,{" "}
            <strong className="font_bold">we’ll be there with you</strong>
          </h2>

          <p className="Nort mt-8">
            Whether you’re in the UK, Europe, USA, Middle East or Asia, we’re
            ready to become part of your marketing team. Exporting more than
            half of our work overseas, our team operates in any time zone.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="team_card">
                <div className="team_content flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="team_role">{member.role}</p>
                    <div className="team_name line-clamp-2">{member.name}</div>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="w-10 h-10 bg-[#a3a3a381] flex items-center justify-center rounded-md transition hover:bg-[#a3a3a3] shrink-0"
                  >
                    <LinkedinIcon size={20} color="white" strokeWidth={2} />
                  </a>
                </div>

                <div className="team_image">
                  {" "}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-full h-auto object-cover"
                    draggable={false}
                  />{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
