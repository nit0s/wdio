import homePage from '../pageobjects/googleHomePage';
import resultsPage from '../pageobjects/googleResultsPage';
import imagesPage from '../pageobjects/googleImagesPage';

describe('basic test in Google ', () => {
    it('should navigate to google and verify elements', async () => {
        await homePage.navigateToHomepage();
        await expect(homePage.googleLogo).toBeExisting();
        await expect(homePage.feelingLuckyButton).toBeExisting();
    });

    it('should show results and verify elements when specific search is performed', async () => {
        await homePage.searchSomething('cats');
        await expect(resultsPage.imagesTab).toBeExisting();
        await expect(resultsPage.videoTab).toBeExisting();
        await expect(resultsPage.resultsLabel).toBeExisting();
    });

    it('should navigate to images page, select the second img and verify that "visit" button is visible for it', async () => {
        await resultsPage.navigateToImagesTab();
        await imagesPage.secondImage(3).click();
        await expect(imagesPage.visitSpan).toBeExisting();
    });
});