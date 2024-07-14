export default function PaginationButtons({
  currentPage,
  totalPages,
  paginate,
}: any) {
  const buttons = [];
  const visiblePages = 3;
  let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let end = Math.min(totalPages, start + visiblePages - 1);

  if (totalPages > visiblePages && end === totalPages) {
    start = Math.max(1, end - visiblePages + 1);
  }

  for (let i = start; i <= end; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => paginate(i)}
        className={`px-3 py-1 mx-1 ${
          currentPage === i ? "bg-gray-700 text-white" : "bg-gray-300"
        }`}
      >
        {i}
      </button>
    );
  }

  return buttons;
}
