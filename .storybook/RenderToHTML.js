import { renderToStaticMarkup } from "react-dom/server";
// import AllHtmlEntities from 'html-entities'
import prettier from "prettier";
import HTMLParser from "prettier/parser-html";
// const entities = new AllHtmlEntities()

function renderToHTML(story, src) {
  // const nn = prettier.format(entities.decode(renderToStaticMarkup(story())), {
  //     parser: 'html',
  //     plugins: [HTMLParser],
  //   });
  return "-----REACT-----\n\n\n" + src + "\n\n\n-----HTML-----\n\n\n"; // + nn;
}

export default renderToHTML;
