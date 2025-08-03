import React from "react";

function Card() {
  let data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cyE39Kqr4HqGZqjmPr65x82THTdCKq2Uew&s",
      name: "amazon basic",
      discription:
        " consectetur. Illo, nobis! Quasi earum quisquam repudiandae?",
    },
    {
      img: " https://www.pragimtech.com/wp-content/uploads/2020/04/react-js-tutorial-for-beginners.png ",
      name: "React",
      discription:
        "gbggnktytur. Illo, nobis! Quasi earum quisquam repudiandae?",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/960px-Googleplex_HQ_%28cropped%29.jpg",
      name: "Google",
      discription:
        " consectetur. Illo, nobis! Quasi earum quisquam repudiandae?",
    },
    {
      img: "https://media.gettyimages.com/id/1177856488/photo/a-giant-digital-sign-is-seen-at-facebooks-corporate-headquarters-campus-in-menlo-park.jpg?s=612x612&w=0&k=20&c=N1JnmIFTrWa2xp39gZzOyQoNtlyWVpYTDHmc4bbgNhU=",
      name: "facebook",
      discription:
        " consectetur. Illo, nobis! Quasi earum quisquam repudiandae?",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKHqRydy_iAFZh1dunNlXxxgjvP3DYbvuyA&s",
      name: "Microsoft",
      discription:
        "Lconsectetur. Illo, nobis! Quasi earum quisquam repudiandae?",
    },
  ];
  return (
    <div className=" bg-zinc-500 min-h-screen  flex flex-wrap justify-center items-center gap-10 ">
      {data.map((elem, index) => {
        return (
          <div className="flex flex-col w-52 bg-zinc-100 rounded-md overflow-hidden">
            <div className="h-full w-full ">
              <img className="object-cover h-40" src={elem.img} alt="img" />
            </div>
            <div className=" w-full px-5 py-4">
              <h1 className="text-2xl font-semibold uppercase text-center">{elem.name}</h1>
              <p className="font-normal  mt-3 capitalize text-center ">{elem.discription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
