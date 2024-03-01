'use client';
import Image from 'next/image';

const SiteLogo = ({className}) => {
  return (
    <div className={className}>
      <Image
        src="/sitelogo.png"
        width={150}
        height={100}
        alt=""
        className=" rounded-md"
      />
    </div>
  );
};

export default SiteLogo;
