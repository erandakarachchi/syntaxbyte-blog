import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Document, Node } from "@contentful/rich-text-types";

interface IRichTextViewProps {
  content: Document;
}

const RichTextView = ({ content }: IRichTextViewProps) => {

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any) => {
        return <h1 className="heading-1 mb-4">{node.content[0].value}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any) => {
        return <h2 className="heading-2 mt-4 mb-4">{node.content[0].value}</h2>;
      },
      [BLOCKS.HEADING_3]: (node: any) => {
        return <h3 className="heading-3 mt-4 mb-4">{node.content[0].value}</h3>;
      },
      [BLOCKS.HEADING_4]: (node: any) => {
        return <h4 className="heading-4 mt-4 mb-4">{node.content[0].value}</h4>;
      },
      [BLOCKS.HEADING_5]: (node: any) => {
        return <h5 className="heading-5 mt-4 mb-4">{node.content[0].value}</h5>;
      },
      [BLOCKS.HEADING_6]: (node: any) => {
        return <h6 className="heading-6 mt-4 mb-4">{node.content[0].value}</h6>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { title, description, file } = node.data.target.fields;
        const imageUrl = file.url;
        const imageAlt = title || description || "Image";

        return <img src={imageUrl} alt={imageAlt} height={760} width={480} />;
      },
      [BLOCKS.PARAGRAPH]: (node: any) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.findIndex((val: any) => val.type === "code") !==
            -1
        ) {
          return (
            <div className="bg-slate-800">
              <code className=" text-green-200">{node.content[0].value}</code>
            </div>
          );
        }
        return <p className="text-lg">{node.content[0].value}</p>;
      },
    },
  };
  return <div>{documentToReactComponents(content, options)}</div>;
};

export default RichTextView;
