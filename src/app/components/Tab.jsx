import { useState } from "react";
import styles from "../../assets/scss/section/module/ct.module.scss";

export default function Tab() {
  const data = [
    {
      id: 0,
      title: "전체",
      description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
    },
    {
      id: 1,
      title: "쇼핑몰",
      description: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
    },
    {
      id: 2,
      title: "도서관 및 공공기관",
      description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
    },
    {
      id: 3,
      title: "개인작업물",
      description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
    }
  ];
  const [index, setIndex] = useState(0);

  return (
        <>
            <div className={styles.tab}>
                {data.map(item => (
                    <div 
                    key={item.id}
                    className={index === item.id ? styles.on : null}
                    onClick={() => setIndex(item.id)}>
                        <a href="#none">{item.title}</a>
                    </div>
                ))}
            </div>
            
            {data.filter(item => index === item.id).map(item => (
                <div className={styles.tabContent}>{item.description}</div>
            ))}
        </>
  )
}