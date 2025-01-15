
const Cards = () => {
  const articles = [
    {
      image: "img-1.png",
      category: "Category",
      date: "November 22, 2021",
      title: "Pitch termsheet backing validation focus release.",
      authorImage: "Ellipse-1.png",
      authorName: "Chandler Bing",
    },
    {
      image: "img-2.png",
      category: "Category",
      date: "November 22, 2021",
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      authorImage: "Ellipse-2.png",
      authorName: "Rachel Green",
    },
    {
      image: "img-3.png",
      category: "Category",
      date: "November 22, 2021",
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition.",
      authorImage: "Ellipse-3.png",
      authorName: "Monica Geller",
    },
    {
      image: "img-4.png",
      category: "Category",
      date: "November 22, 2021",
      title: "Pitch termsheet backing validation focus release.",
      authorImage: "Ellipse-1.png",
      authorName: "Chandler Bing",
    },
    {
      image: "img-5.png",
      category: "Category",
      date: "November 22, 2021",
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      authorImage: "Ellipse-2.png",
      authorName: "Rachel Green",
    },
    {
      image: "img-6.png",
      category: "Category",
      date: "November 22, 2021",
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition.",
      authorImage: "Ellipse-3.png",
      authorName: "Monica Geller",
    },
  ];

  return (
    <div>
      <h2 className="mx-40 text-5xl mt-24 font-bold">Latest News</h2>

      <div className="grid grid-cols-3 gap-12 mx-40 mt-10">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col items-start">
            <img src={article.image} alt={`Article ${index + 1}`} />
            <p className="font-bold mt-6">
              {article.category}{' '}
              <span className="font-normal">{article.date}</span>
            </p>
            <h3 className="mt-3">{article.title}</h3>
            <div className="flex items-center mt-6 space-x-2">
              <img src={article.authorImage} alt={article.authorName} />
              <p className="">{article.authorName}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-24">
        <button
          className="transition duration-300 border-2 border-[#0A2640] rounded-full px-6 py-3 text-lg font-semibold text-[#0A2640] hover:bg-[#0A2640] hover:text-white"
          type="button"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cards;
