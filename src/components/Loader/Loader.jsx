import { Hearts } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div>
      <Hearts
        height={80}
        width={80}
        radius={5}
        color="#4f22f1"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};