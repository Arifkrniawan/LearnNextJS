type PaginationProps = {
  page: number; // Define the type for the 'page' prop
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
    const handleNextPage = () =>{
        setPage((prevState)=> prevState + 1)
    }

    const handlePrevPage = () =>{
        setPage((prevState)=> prevState - 1)
    }

  return (
    <div className="flex justify-center items-center px-2 py-4 gap-4 text-primary">
      <button onClick={handlePrevPage} className="transition-all hover:text-color-accent mr-4">
        Prev
      </button>
      <p className="mr-4">{page}</p>
      <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
    </div>
  );
};

export default Pagination;