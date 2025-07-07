import data from '@/assets/data.json';
import Card from '@/components/Card';
import IMG_ONE from '@/assets/images/1.webp';
import IMG_TWO from '@/assets/images/2.webp';
import IMG_THREE from '@/assets/images/3.webp';
import logo from '@/assets/logo.jpg'
import  Image, { StaticImageData }  from 'next/image';

const imageMap:Record<number,StaticImageData>= {
  1: IMG_ONE,
  2: IMG_TWO,
  3: IMG_THREE,
};
export default function Home() {

  return (
    <div className='flex flex-col font-mono min-h-screen items-center'>
    
    <div className='flex  items-center justify-center gap-5 w-full m-12'>
      {data.map((item, index) => (
        <Card
          key={index}
          description={item.description}
          title={item.title}
          color={item.color}
        >

          <Image src={imageMap[item.image]} alt={item.title} className='size-36 mb-8 block ' />

        </Card>
      )
      )
      }

    </div>
    <Card description='LEARN MORE ABOUT CODEX' orientation={false} color={"rgb(229 255 94)"}>
      <Image src={logo} alt='codex company logo'></Image>
    </Card>
    </div>
  );
}
