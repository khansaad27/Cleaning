import BlogCard from "../layer/BlogCard";
import Container from "../layer/Container";

const BlogList = () => {
    const blogs = [
        {
            id: 1,
            title: "The Secret of Cleaning your office",
            description: "Discover how to choose the right house cleaning service for your needs, budget, and preferences.",
            image: "/slider3.jpg",
            auth: "md.mainuddin",
            comment: "3",
            date: "May 15, 2022"
        },
        {
            id: 2,
            title: "Tips for Effective House Cleaning",
            description: "Learn how to make your house cleaning experience more enjoyable and satisfying.",
            image: "/slider2.jpg",
            auth: "md.mainuddin",
            comment: "13",
            date: "April 20, 2022"
        },
        {
            id: 3,
            title: "Reasons to Choose Cleaning Co",
            description: "Discover why Cleaning Co is the best choice for house cleaning services.",
            image: "/b3.jpg",
            auth: "md.mainuddin",
            comment: "18",
            date: "March 12, 2022"
        },
        {
            id: 4,
            title: "The Impact of House Cleaning on Your Business",
            description: "Learn how house cleaning can improve your business's efficiency and profitability.",
            image: "/b4.jpg",
            auth: "md.mainuddin",
            comment: "10",
            date: "February 19, 2022"
        }
    ];

    return (
        <div className="mt-[90px]">
            <Container>
            <div>
          <h3 className="text-[#515854] font-Roboto text-[18px] font-medium leading-[26px]" >Recent Blogs</h3>
          <h2 className="text-[#0C261A] font-Roboto text-[28px] font-medium leading-[32px] tracking-[0px]  mt-2">Latest News & Updates</h2>
        </div>
                

                <div className="flex flex-wrap gap-5 justify-center mt-[50px]">
                    {blogs.map((item) => (
                        <BlogCard
                            key={item.id}
                            item={item} 
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default BlogList;
