const CircleProgressPublish = ({ CircleColor = 'border-t-primary-500' }) => {
  return (
    <div className={'flex justify-center items-center'}>
      <div
        className={`animate-spin ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 ${CircleColor}`}
      ></div>
    </div>
  );
};

export default CircleProgressPublish;
