import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className='flex '>
      <div className='w-full h-screen bg-black justify-center items-center flex-col flex'>
      <Spline
        scene="https://prod.spline.design/7NZsr7XBT8cZ6JLG/scene.splinecode" 
      />
      </div>

    </div>
  );
}
