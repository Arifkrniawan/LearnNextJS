type HeaderProps = {
  page: any; // Define the type for the 'page' prop
};

const Pagination: React.FC<HeaderProps> = ({ page }) => {
  return (
    <div className="flex justify-center items-center px-2 py-4 gap-4 text-primary">
      <h3>TOP ANIME PAGE {page}</h3>
    </div>
  );
};

export default Pagination;