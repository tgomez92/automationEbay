import { Given, When, Then } from '@wdio/cucumber-framework';
import articlePage from '../pageobjects/article.page';
import homePage from '../pageobjects/home.page';

const pages = {
    home: homePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I search for an (.+) object$/, async (article) => {
    await homePage.searchArticle(article);
});

Then(/^I can verify the (.+) quantity of the product$/, async (quantity) => {
    expect(await articlePage.getTotalArticle()).toEqual(quantity);
});

