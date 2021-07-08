import ArticleSection from "./ArticleSection";
import ritualsImgOne from "../static/images/rituals/01.jpg";
import ritualsImgTwo from "../static/images/rituals/02.jpg";
import religionImgOne from "../static/images/religion/01.jpg";
import religionImgTwo from "../static/images/religion/02.jpg";
import godsImgOne from "../static/images/gods/01.jpg";
import godsImgTwo from "../static/images/gods/02.jpg";
import "../static/Article.css";

const Article = () => {
  return (
    <div className="article_wrapper">
      <ArticleSection
        article_label="RITUALS"
        article_content="Rituals practiced in all Hindu households are puja, meditation, silent prayers, yoga, recitation of scriptures from Bhagavad Gita or bhajans, reading religious books, participating in Satsang (prayer meets), performing charitable work, visiting a temple, and chanting the name of their beloved God"
        img_one={ritualsImgOne}
        img_two={ritualsImgTwo}
      />
      <ArticleSection
        article_label="RELIGIONS"
        article_content="Religion returns in Indian census provide a wonderful kaleidoscope of the country s rich social composition, as many religions have originated in the country and few religions of foreign origin have also flourished here"
        img_one={religionImgOne}
        img_two={religionImgTwo}
      />
      <ArticleSection
        article_label="GODS AND GODESS"
        article_content="Hinduism is the largest religion in the Indian subcontinent and third largest religion in the world"
        img_one={godsImgOne}
        img_two={godsImgTwo}
      />
    </div>
  );
};

export default Article;
