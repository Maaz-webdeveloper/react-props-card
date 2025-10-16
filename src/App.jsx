import Card from "./components/Card";
const App = () => {
  const openings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtpg4IsItbaNk0GxMyoz8f0fpVMIsFeNYCQ&s",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "London, UK",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      name: "Amazon",
      datePosted: "10 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      name: "Netflix",
      datePosted: "1 week ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      name: "NVIDIA",
      datePosted: "2 weeks ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      name: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Berlin, Germany",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      name: "OpenAI",
      datePosted: "8 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      name: "Adobe",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
  ];
  return (
    <>
      <div className="parent">
        {openings.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              company={elem.name}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              datePosted={elem.datePosted}
              pay={elem.pay}
              location={elem.location}
              brandLogo={elem.brandLogo}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
