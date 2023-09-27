import swal from "sweetalert";
// eslint-disable-next-line react/prop-types
export default function DetailsCard({ obj }) {
  // eslint-disable-next-line react/prop-types
  let { id } = obj || {};
  let handleDonate = () => {
    let addDonate = [];

    const donateItems = JSON.parse(localStorage.getItem("Donated"));

    if (!donateItems) {
      addDonate.push(obj);
      localStorage.setItem("Donated", JSON.stringify(addDonate));

      swal("Good job", "Thank you for your donation", "success");
    } else {
      const isExits = donateItems.find((obj) => obj.id === id);

      if (!isExits) {
        addDonate.push(...donateItems, obj);
        localStorage.setItem("Donated", JSON.stringify(addDonate));
        swal("Good job", "Thank you for your donation", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }
  };
  const styles = {
    content: {
      height: "20%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  const buttonBgStyle = {
    backgroundColor: obj.text_color,
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-3xl rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative ">
          <div className="w-full rounded-b-xl">
            <img className="w-full object-cover rounded-b-xl" src={obj.image} />
          </div>
          <div
            style={styles.content}
            className="absolute rounded-b-xl bottom-0 bg-slate-700 py-4"
          >
            <button
              style={buttonBgStyle}
              className="mx-4 mt-4 mb-4 middle none center rounded-lg  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              onClick={handleDonate}
            >
              Donate ${obj.price}
            </button>
          </div>
        </div>
        <div className="p-8">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {obj.category}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {obj.description}
          </p>
        </div>
      </div>
    </div>
  );
}
