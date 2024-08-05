const NeuButton = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
}) => {
  return (
    <div className="bg-white mt-6 flex items-center justify-center lg:w-full">
      <button
        type={type}
        className="px-6 py-2 font-medium bg-violet-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] sm:w-1/2"
      >
        {children}
      </button>
    </div>
  );
};

export default NeuButton;
