import Page from "./page";

class HomePage extends Page{

    get searchInput()   { return $('#gh-ac')}
    get searchButton()  { return $('#gh-btn')}

    open(){
        return super.open('/');
    }

    async searchArticle(article){
        await this.searchInput.waitForClick();
        await this.searchInput.setValue(article);
        await this.searchButton.waitForClick();
    }

}
export default new HomePage();