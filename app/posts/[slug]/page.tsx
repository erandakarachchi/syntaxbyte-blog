import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

const SingleBlogPost = ({ params }: Props) => {
  return (
    <article className="blog-container mt-4">
      <Image
        src="https://placehold.it/1200x675"
        alt="Banner"
        width={1200}
        height={675}
        objectFit="cover"
        className="rounded"
      />
      <h1 className="heading-1 mt-6">
        Python vs. JavaScript: A Comprehensive Comparison for Beginners
      </h1>

      <p className="mt-6"># javascript # node # programming # codenewbie</p>
      <div className="flex items-center self-start gap-2 md:gap-2 mt-6">
        <Image
          src="https://placehold.it/100x100"
          alt="Author"
          width={25}
          height={25}
          className="rounded-full md:inline-block"
        ></Image>
        <p className="inline text-sm md:text-md">John Doe</p>
        <p className="inline text-sm ml-2 md:text-md md:ml-2">10 July, 2023</p>
      </div>
      <p className="mt-6 leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur, mi sed suscipit posuere, magna ligula vulputate enim, non
        fringilla ex risus placerat dolor. Aliquam quis aliquam magna. Sed
        condimentum nibh at elit posuere molestie. Vestibulum eleifend nibh
        elementum, convallis diam vitae, consequat risus. Phasellus mi tortor,
        consectetur faucibus vulputate id, tincidunt sit amet lorem. Cras
        faucibus enim in sem porta, ut venenatis urna viverra. Fusce iaculis
        arcu id accumsan lobortis. Sed tempor fringilla urna sit amet
        consectetur. In sed odio a ex varius luctus vitae ut lectus. Nullam sed
        dictum lectus. Vestibulum tincidunt ipsum mauris, eget fringilla ex
        tempus ut. Proin sollicitudin ante at nibh viverra luctus. In hac
        habitasse platea dictumst. Proin facilisis ex odio, et varius eros
        pulvinar eget. Pellentesque sit amet blandit augue. Ut non tincidunt
        nibh. Duis tincidunt felis id laoreet interdum. Proin dapibus lobortis
        pretium. Nullam sit amet lectus porta, rhoncus mi eleifend, dapibus mi.
        Duis sollicitudin dapibus ligula. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque consectetur, mi sed suscipit
        posuere, magna ligula vulputate enim, non fringilla ex risus placerat
        dolor.
        <br />
        <code className="block bg-slate-100 p-4 rounded mt-6">
          npm install npm run dev npm run build npm run start npm run lint
        </code>
        <br />
        Aliquam quis aliquam magna. Sed condimentum nibh at elit posuere
        molestie. Vestibulum eleifend nibh elementum, convallis diam vitae,
        consequat risus. Phasellus mi tortor, consectetur faucibus vulputate id,
        tincidunt sit amet lorem. Cras faucibus enim in sem porta, ut venenatis
        urna viverra. Fusce iaculis arcu id accumsan lobortis. Sed tempor
        fringilla urna sit amet consectetur. In sed odio a ex varius luctus
        vitae ut lectus. Nullam sed dictum lectus. Vestibulum tincidunt ipsum
        mauris, eget fringilla ex tempus ut. Proin sollicitudin ante at nibh
        viverra luctus. In hac habitasse platea dictumst. Proin facilisis ex
        odio, et varius eros pulvinar eget. Pellentesque sit amet blandit augue.
        Ut non tincidunt nibh. Duis tincidunt felis id laoreet interdum. Proin
        dapibus lobortis pretium. Nullam sit amet lectus porta, rhoncus mi
        eleifend, dapibus mi. Duis sollicitudin dapibus ligula. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur,
        mi sed suscipit posuere, magna ligula vulputate enim, non fringilla ex
        risus placerat dolor. Aliquam quis aliquam magna. Sed condimentum nibh
        at elit posuere molestie. Vestibulum eleifend nibh elementum, convallis
        diam vitae, consequat risus. Phasellus mi tortor, consectetur faucibus
        vulputate id, tincidunt sit amet lorem. Cras faucibus enim in sem porta,
        ut venenatis urna viverra. Fusce iaculis arcu id accumsan lobortis. Sed
        tempor fringilla urna sit amet consectetur. In sed odio a ex varius
        luctus vitae ut lectus. Nullam sed dictum lectus. Vestibulum tincidunt
        ipsum mauris, eget fringilla ex tempus ut. Proin sollicitudin ante at
        nibh viverra luctus. In hac habitasse platea dictumst. Proin facilisis
        ex odio, et varius eros pulvinar eget. Pellentesque sit amet blandit
        augue. Ut non tincidunt nibh. Duis tincidunt felis id laoreet interdum.
        Proin dapibus lobortis pretium. Nullam sit amet lectus porta, rhoncus mi
        eleifend, dapibus mi. Duis sollicitudin dapibus ligula.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur, mi sed suscipit posuere, magna ligula vulputate enim, non
        fringilla ex risus placerat dolor. Aliquam quis aliquam magna. Sed
        condimentum nibh at elit posuere molestie. Vestibulum eleifend nibh
        elementum, convallis diam vitae, consequat risus. Phasellus mi tortor,
        consectetur faucibus vulputate id, tincidunt sit amet lorem. Cras
        faucibus enim in sem porta, ut venenatis urna viverra. Fusce iaculis
        arcu id accumsan lobortis. Sed tempor fringilla urna sit amet
        consectetur. In sed odio a ex varius luctus vitae ut lectus. Nullam sed
        dictum lectus. Vestibulum tincidunt ipsum mauris, eget fringilla ex
        tempus ut. Proin sollicitudin ante at nibh viverra luctus. In hac
        habitasse platea dictumst. Proin facilisis ex odio, et varius eros
        pulvinar eget. Pellentesque sit amet blandit augue. Ut non tincidunt
        nibh. Duis tincidunt felis id laoreet interdum. Proin dapibus lobortis
        pretium. Nullam sit amet lectus porta, rhoncus mi eleifend, dapibus mi.
        Duis sollicitudin dapibus ligula.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur, mi sed suscipit posuere, magna ligula vulputate enim, non
        fringilla ex risus placerat dolor. Aliquam quis aliquam magna. Sed
        condimentum nibh at elit posuere molestie. Vestibulum eleifend nibh
        elementum, convallis diam vitae, consequat risus. Phasellus mi tortor,
        consectetur faucibus vulputate id, tincidunt sit amet lorem. Cras
        faucibus enim in sem porta, ut venenatis urna viverra. Fusce iaculis
        arcu id accumsan lobortis. Sed tempor fringilla urna sit amet
        consectetur. In sed odio a ex varius luctus vitae ut lectus. Nullam sed
        dictum lectus. Vestibulum tincidunt ipsum mauris, eget fringilla ex
        tempus ut. Proin sollicitudin ante at nibh viverra luctus. In hac
        habitasse platea dictumst. Proin facilisis ex odio, et varius eros
        pulvinar eget. Pellentesque sit amet blandit augue. Ut non tincidunt
        nibh. Duis tincidunt felis id laoreet interdum. Proin dapibus lobortis
        pretium. Nullam sit amet lectus porta, rhoncus mi eleifend, dapibus mi.
        Duis sollicitudin dapibus ligula.
      </p>
    </article>
  );
};

export default SingleBlogPost;
