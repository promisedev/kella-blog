import health from "../assets/health.jpg";
import fashion from "../assets/fashion.jpg";
import lifestyle from "../assets/lifestyle.jpg";

export const handleImage = (e) => {
  e.currentTarget.classList.add("no_image");
};
export const Category = () => {
  const pages = [
    {
      title: "health",
      link: "/categories/health",
      image: health,
      desc: "some dummy description about the category type",
    },
    {
      title: "fashion",
      link: "/categories/fashion",
      image: fashion,
      desc: "some dummy description about the category type",
    },
    {
      title: "lifestyle",
      link: "/categories/lifestyle",
      image: lifestyle,
      desc: "some dummy description about the category type",
    },
  ];

  return pages;
};

export const Pages = () => {
  const pages = [
    { title: "home", link: "/" },
    { title: "categories", categories: Category() },
    // { title: "contact", link: "/contact" },
    { title: "about", link: "/about" },
  ];

  return pages;
};

export const Socials = () => {
  const socials = ["twitter", "facebook", "pinterest"];
  return socials;
};
