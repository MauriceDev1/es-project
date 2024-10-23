const Profile = () => {


  return (
    <div className="w-full flex gap-10">
      <div className="w-1/2 bg-white border border-gray-300 h-96 rounded-md"></div>
      <div className="w-1/2">
        <h1 className="text-3xl">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
          ducimus accusamus quam expedita. Ducimus, praesentium vero. Corrupti
          pariatur suscipit, dolorem quasi laboriosam officia voluptatum
          exercitationem, nihil, dolore reiciendis deserunt!
        </p>
        <button className="bg-black px-8 text-white py-2 rounded-3xl">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Profile;
