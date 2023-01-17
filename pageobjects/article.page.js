import Page from "./page";

class Article extends Page{

    get numberArticle() { return $('.srp-controls__count-heading')}

    async getTotalArticle(){
        return await this.numberArticle.getText();
    }

}
export default new Article();