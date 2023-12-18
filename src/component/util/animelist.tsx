type AnimeListProps = {
    api: {
      data: {
        images: {
          webp: {
            image_url: string;
          };
        };
        title: string;
      }[];
    };
  };
  
  const AnimeList: React.FC<AnimeListProps> = ({ api }) => {
    return (
      <>
        <div className="grid grid-cols-3 place-items-center">
          {api.data.length > 0 &&
            api.data?.map((product, index) => (
              <div
                key={index}
                className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  className="h-48 w-full object-cover p-2"
                  src={product.images.webp.image_url}
                  alt="Product Image"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900 truncate">
                    {product.title}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };
  
  export default AnimeList;