const EmptyState = () => {
  return (
    <div
      className="
        px-4
        py-10
        sm:px-6
        lg:px-8
        h-full
        flex
        justify-center
        items-center
        "
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: "cover", // Resmin kaplamasını sağlar
        backgroundPosition: "center", // Resmin ortalanmasını sağlar
        //backgroundColor: "rgba(0, 0, 0, 1)", // Siyah arka planın %50 opaklığı
      }}
    >
      <div className="text-center items-center flex flex-col">
        <h3
          className="
                        mt-2
                        text-2xl
                        font-bold
                        text-[#301f41]
                        bg-white
                        border-2
                        border-black
                        p-1
                    "
        >
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
