import Container from "../layer/Container";
import TeamCard from "../layer/TeamCard";


const TeamMembers = () => {
  const teams = [
    {
      id: 1,
      name: "John Doe",
      role: "House Cleaner",
      image: "/T1.jpg",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        pinterest: "https://pinterest.com/markjohnson",
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "House Cleaner",
      image: "/T2.jpg",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        pinterest: "https://pinterest.com/markjohnson",
        youtube: "https://youtube.com/sarahwilson",
      }
    },
    {
      id: 3,
      name: "Mark Johnson",
      role: "House Cleaner",
      image: "/T3.jpg",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        pinterest: "https://pinterest.com/markjohnson",
        youtube: "https://youtube.com/sarahwilson",
      }
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "House Cleaner",
      image: "/T4.jpg",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        pinterest: "https://pinterest.com/markjohnson",
        youtube: "https://youtube.com/sarahwilson",
      }
    }
  ];
  return (
    <div className="mt-[90px]">
      <Container>
        <div>
          <h3 className="text-[#2B8761] font-Roboto text-[18px] font-medium leading-[26px]" >Team Members</h3>
          <h2 className="text-[#0C261A] font-Roboto text-[28px] font-medium leading-[32px] tracking-[0px]  mt-2">Our Expert members</h2>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-[50px]">
          {teams.map((item) => (
            <TeamCard
              key={item.id}
              id={item.id}
              name={item.name}
              role={item.role}
              image={item.image}
              socialLinks={item.socialLinks}
            />
          ))}
        </div>
      </Container>

    </div>
  );
};

export default TeamMembers;
