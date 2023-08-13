function EmployeeDetail({ employee, onSliderChange }) {
  const handleSliderChange = (e) => {
    e.stopPropagation();
    onSliderChange(e.target.value);
  };
  return (
    <div className="text-white absolute top-1/3 left-1/3 w-1/2 pl-16 drop-shadow-2xl">
      <div className="flex items-start">
        <img
          className="h-28 w-28 rounded-md border-picture-border border shadow-2xl"
          src={`/src/assets/img/profile-pics/${employee.image}`}
        />
        <div className="ml-8">
          <h1
            className="mb-4"
            style={{ fontSize: `${+employee.popularity + 20}px` }}
          >
            {employee.name}
          </h1>
          <div className="flex items-center">
            <p className="mb-0 mr-4">Popularity</p>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={employee.popularity}
              onChange={handleSliderChange}
              className="w-64 bg-main-bg"
            />
          </div>
          <div className="rounded-md bg-biography-bg p-4 mt-8">
            <p className="text-lg mb-4">Biography</p>
            <p className="text-xs text-biography-content">
              {employee.biography}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
